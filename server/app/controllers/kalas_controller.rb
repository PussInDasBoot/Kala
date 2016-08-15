class KalasController < ApplicationController

  def show
    render :layout => false
  end

  def landing_page
  end

  def get_user_events
    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = session[:access_token]
    current_user_calendar_id = current_user.email

    Time.zone = "America/Vancouver"
    time_min = Time.zone.now
    time_max = (time_min + 1.week).beginning_of_day
    response = service.list_events(current_user_calendar_id,
                                   single_events: true,
                                   order_by: 'startTime',
                                   time_min: time_min.to_datetime.rfc3339,
                                   time_max: time_max.to_datetime.rfc3339)
    events = []
    response.items.each do |user_event| 
      events << { start: user_event.start.date_time,
                  end: user_event.end.date_time,
                  summary: user_event.summary }
    end
    render json: events
  end

  def get_classes_outside_busy_time
    Time.zone = "America/Vancouver"
    start_time = Time.zone.now
    end_time = (start_time + 1.week).beginning_of_day
    yoga_classes = YogaClass.filter(params[:commitment],
                                    params[:max_price],
                                    params[:rating],
                                    params[:class_name],
                                    params[:studio_name],
                                    params[:location])
    busy_times = get_busy_times(current_user.email, session[:access_token])

    busy_times.each do |busy_time|
      yoga_classes = yoga_classes.where("(start_time < ? AND end_time < ?) OR (start_time > ? AND end_time > ?)", busy_time.start, busy_time.start, busy_time.end, busy_time.end)
    end

    yoga_classes = yoga_classes.order(:start_time)

    render json: yoga_classes
  end

  def get_busy_times(calendar_id, access_token) 
    Time.zone = "America/Vancouver"
    time_min = Time.zone.now.to_datetime
    time_max = (time_min + 1.week).beginning_of_day.to_datetime

    free_busy_request_item = Google::Apis::CalendarV3::FreeBusyRequestItem.new
    free_busy_request_item.id = calendar_id

    free_busy_request = Google::Apis::CalendarV3::FreeBusyRequest.new
    free_busy_request.time_zone = "America/Vancouver"
    free_busy_request.time_min = time_min
    free_busy_request.time_max = time_max 
    free_busy_request.items = [free_busy_request_item]

    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = access_token
    free_busy_response = service.query_freebusy(free_busy_request)
    free_busy_response.calendars[calendar_id].busy
  end
end
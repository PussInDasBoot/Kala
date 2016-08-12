class KalasController < ApplicationController

  def show
  end

  def landing_page
  end

  def get_user_events
    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = session[:access_token]
    current_user_calendar_id = current_user.email

    Time.zone = "America/Vancouver"
    time_min = Time.zone.now
    time_max = time_min + 1.week
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
end
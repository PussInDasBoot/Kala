module ApplicationHelper
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    return true if current_user
  end

  def show_free_busy
    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = session[:access_token]

    # calendar_id = "bdiuqssu2iudobsr579mtb3uu4@group.calendar.google.com"
    calendar_id = current_user.email
    response = service.list_events(calendar_id,
                                   max_results: 3,
                                   single_events: true,
                                   order_by: 'startTime',
                                   time_min: DateTime.new(2016,8,3,0,0,0,Rational(-7,24)).to_s,
                                   time_max: DateTime.new(2016,8,7,0,0,0,Rational(-7,24)).to_s)
    response.items.each do |event|
      start = event.start.date || event.start.date_time
      puts "- #{event.summary} (#{start}) #{event.location}"
      puts JSON.parse(event.to_json)
      puts "\n\n"
    end

    free_busy_request = Google::Apis::CalendarV3::FreeBusyRequest.new
    free_busy_request_item = Google::Apis::CalendarV3::FreeBusyRequestItem.new

    free_busy_request_item.id = calendar_id
    free_busy_request.items = [free_busy_request_item]
    pst_offset = Rational(-7, 24)
    free_busy_request.time_min = DateTime.new(2016, 8, 6, 12, 0, 0, pst_offset)
    free_busy_request.time_max = DateTime.new(2016, 8, 11, 23, 0, 0, pst_offset) 
    free_busy_request.time_zone = "America/Vancouver"

    free_busy_response = service.query_freebusy(free_busy_request)
    puts "JACKIE'S BUSY TIMES"
    # An Array of TimePeriod objects which indicate when Jackie is busy
    jackies_busy_times = free_busy_response.calendars[calendar_id].busy
    jackies_busy_times.each do |busy_time|
      puts busy_time.start.class
      puts busy_time.end.class
    end

    "Called show_free_busy successfully"
  end
end

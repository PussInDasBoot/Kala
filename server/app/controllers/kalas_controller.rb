class KalasController < ApplicationController
  def show
  end

  def get_user_events
    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = session[:access_token]
    current_user_calendar_id = current_user.email
    ## GET CURRENT USER'S EVENTS ###
    response = service.list_events(current_user_calendar_id,
                                   max_results: 3,
                                   single_events: true,
                                   order_by: 'startTime',
                                   time_min: DateTime.new(2016,8,3,0,0,0,Rational(-7,24)).to_s,
                                   time_max: DateTime.new(2016,8,7,0,0,0,Rational(-7,24)).to_s)
    # response.items.each do |event|
    #   start = event.start.date || event.start.date_time
    #   puts "- #{event.summary} (#{start}) #{event.location}"
    #   puts "\n\n"
    # end
    render json: response.items
  end
end
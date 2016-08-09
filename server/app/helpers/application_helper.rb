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
    p service
    calendar_id = current_user.email
    response = service.list_events(calendar_id,
                                   max_results: 3,
                                   single_events: true,
                                   order_by: 'startTime',
                                   time_min: Time.now.iso8601)
    "Calendar ID is #{calendar_id}"
  end
end

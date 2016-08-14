class YogaClassesController < ApplicationController

  def add_class_to_calendar
    yoga_class = YogaClass.find(params[:id])
    event = yoga_class.convert_to_calendar_event
    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = session[:access_token]
    response = service.insert_event(current_user.email, event)
    render json: yoga_class
  end

  def show
    yoga_class = YogaClass.find(params[:id])
    render json: [yoga_class, yoga_class.studio]
  end

end
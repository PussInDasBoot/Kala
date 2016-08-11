class StudiosController < ApplicationController
  def index
    if request.xhr?
        render json: studios = [
        {
            title: 'event1',
            start: '2010-01-01'
        },
        {
            title: 'event2',
            start: '2010-01-05',
            end: '2010-01-07'
        },
        {
            title: 'event3',
            start: '2010-01-09T12:30:00',
            allDay: 'false'
        }
    ]
    end
  end

end

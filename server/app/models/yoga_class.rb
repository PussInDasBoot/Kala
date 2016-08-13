class YogaClass < ApplicationRecord
  belongs_to :studio


  def self.search(commitment=nil, rating=nil, pricemax=nil, name=nil, studioname=nil, location=nil)
    classes = self.where('name like ?', name) if name   
    classes = self.joins(:studio).where('studios.name like ?', studioname) if studioname
    classes = self.joins(:studio).where('studios.rating > ?', rating) if rating
    classes = self.joins(:studio).where('studios.location like ?', location) if location
    if commitment && pricemax
      case commitment
      when "single"
        classes = self.joins(:studio).where('studios.drop_in_price < ?', pricemax)
      when "pass"
        classes = self.joins(:studio).where('studios.pass_average < ?', pricemax)
      when "membership"
        classes = self.joins(:studio).where('studios.membership_average < ?', pricemax)
      end
    end
  end

  def convert_to_calendar_event
    Time.zone = "America/Vancouver"
    event = Google::Apis::CalendarV3::Event.new
    event.summary = "#{name} @ #{studio.name}"
    event.description = get_description
    event.location = studio.address
    event.start = { time_zone: "America/Vancouver", date_time: start_time.to_datetime.rfc3339 }
    event.end = { time_zone: "America/Vancouver", date_time: end_time.to_datetime.rfc3339 }
    event
  end

  private

  def get_description
    "Instructor: #{instructor_name} \
    \nDrop In Price: $#{'%.02f' % studio.drop_in_price} \
    \nPass Average: $#{'%.02f' % studio.pass_average} \
    \nMembership Average: $#{'%.02f' % studio.membership_average}"
  end
end



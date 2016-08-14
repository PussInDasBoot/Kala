class YogaClass < ApplicationRecord
  belongs_to :studio

  def self.filter(commitment, max_price, rating, class_name, studio_name, location)
    Time.zone = "America/Vancouver"
    start_time = Time.zone.now
    end_time = (start_time + 1.week).beginning_of_day
    yoga_classes = self.where('start_time >= ? AND end_time <= ?', start_time, end_time)

    yoga_classes = yoga_classes.where('name ILIKE ?', "%#{class_name}%") unless class_name.empty?   
    yoga_classes = yoga_classes.joins(:studio).where('studios.name = ?', studio_name) unless studio_name.empty?
    yoga_classes = yoga_classes.joins(:studio).where('studios.rating > ?', rating.to_f) unless rating.empty?
    yoga_classes = yoga_classes.joins(:studio).where('studios.location = ?', location) unless location.empty?
    unless commitment.empty? || max_price.empty?
      case commitment
      when "single"
        yoga_classes = yoga_classes.joins(:studio).where('studios.drop_in_price <= ?', max_price.to_f)
      when "pass"
        yoga_classes = yoga_classes.joins(:studio).where('studios.pass_average <= ?', max_price.to_f)
      when "membership"
        yoga_classes = yoga_classes.joins(:studio).where('studios.membership_average <= ?', max_price.to_f)
      end
    end

    yoga_classes.order(:start_time)
  end

  def convert_to_calendar_event
    Time.zone = "America/Vancouver"
    event = Google::Apis::CalendarV3::Event.new
    event.summary = "#{name} @ #{studio.name}"
    event.description = get_description
    event.location = studio.address
    event.start = { time_zone: "America/Vancouver", date_time: start_time.to_datetime.rfc3339 }
    event.end = { time_zone: "America/Vancouver", date_time: end_time.to_datetime.rfc3339 }
    event.reminders = { use_default: false, overrides: [{ reminder_method: 'email', minutes: 60 }] }
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



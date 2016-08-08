require 'capybara'
require 'capybara/dsl'
require 'pry'
require 'nokogiri'

Capybara.run_server = false
Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end
Capybara.current_driver = :chrome

module MindBodyScraper
  class YogaStudio
    include Capybara::DSL
    CHOPRA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=18712'
    WEST_COAST_HOT_YOGA_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=474'

    # Returns an Array of Hashes which contain a month's worth of classes from the studio's site 'url' 
    def scrape(url)
      visit(url)
      classes = []
      within_frame("mainFrame") do
        if(url == CHOPRA_STUDIO_URL)
          page.find("#week-tog-c").click
        elsif(url == WEST_COAST_HOT_YOGA_URL)
          page.all(".selectBox").first.click
          page.all(".selectBox-dropdown-menu").first.find('li', text: 'Yaletown').click
        end
        page.find("#tabA7").click
        4.times do
          # Grab the HTML from the classes page
          doc = Nokogiri::HTML(page.html)
          (1..7).each do |i|
            an_css_id = "#an#{i}"
            class_date = doc.css(an_css_id).first
            current_class_row = class_date.parent.next_element
            # Get the classes on each day
            until current_class_row.nil? || current_class_row.attr('class').nil?
              yoga_class_info = current_class_row.children
              # Handle the case where a day has no classes
              if yoga_class_info.length > 1 
                # Only get class information if it is available for sign up, this also filters out past classes
                unless yoga_class_info[1].inner_html.empty?
                  classes << create_yoga_class(yoga_class_info, class_date.inner_text)
                end
              end
              current_class_row = current_class_row.next_element
            end
          end
          # Go to next week
          page.find("#week-arrow-r").click
        end
      end
      classes
    end

    # Prints the details of a single yoga class to console
    def print_yoga_class(yoga_class_info, yoga_class_date)
      nbsp = "\u00A0"
      start_time = yoga_class_info[0].inner_text.gsub(nbsp, "")
      has_signup = !(yoga_class_info[1].inner_html.empty?)
      class_name = yoga_class_info[2].inner_text.gsub(nbsp, "")
      instructor = yoga_class_info[3].inner_text.gsub(nbsp, "").sub(/\(\d+\)/, "") # Moksha Yoga has weird numbering next to the instructor name
      duration = yoga_class_info.last.inner_text

      class_time = get_class_time(yoga_class_date, start_time, duration)

      puts "START TIME:           #{class_time[:start]}"
      puts "END TIME:             #{class_time[:end]}"
      puts "SIGN UP AVAILABLE:    #{has_signup}"
      puts "CLASS NAME:           #{class_name}"
      puts "INSTRUCTOR:           #{instructor}"
      puts "DURATION:             #{duration}\n\n"
    end

    # Returns a Hash containing the yoga class's name, instructor name, start time, and end time
    def create_yoga_class(yoga_class_info, yoga_class_date)
      nbsp = "\u00A0"
      start_time = yoga_class_info[0].inner_text.gsub(nbsp, "")
      class_name = yoga_class_info[2].inner_text.gsub(nbsp, "")
      instructor_name = yoga_class_info[3].inner_text.gsub(nbsp, "").sub(/\(\d+\)/, "") # Moksha Yoga has weird numbering next to the instructor name
      duration = yoga_class_info.last.inner_text

      class_time = get_class_time(yoga_class_date, start_time, duration)
      { name: class_name, 
        instructor_name: instructor_name, 
        start_time: class_time[:start], 
        end_time: class_time[:end] }
    end

    # Returns a hash containing a class's start and end times. Both are DateTime objects
    def get_class_time(yoga_class_date, start_time, duration)
      class_time = Hash.new
      month = 0
      year = 0
      day = 0

      if yoga_class_date.include?("-")
        # Ex. August-07-16
        yoga_class_date = yoga_class_date.scan(/\b\w+-\d+-\d+/).first.split("-")
        month = Date::MONTHNAMES.index(yoga_class_date[0])
        day = yoga_class_date[1].to_i
        year = ("20" + yoga_class_date[2]).to_i
      else
        # Ex. August 07, 2016
        yoga_class_date = yoga_class_date.scan(/\b\w+\s\d+,\s\d+/).first.split(",")
        month_and_day = yoga_class_date[0].split(" ")
        month = Date::MONTHNAMES.index(month_and_day[0])
        day = month_and_day[1].to_i
        year = yoga_class_date[1].to_i
      end
      
      duration = convert_duration_to_nums(duration)

      start_time = DateTime.parse(start_time)
      end_time = start_time + (duration[:hour]/24.0) + (duration[:minutes]/1440.0)
      pst_offset = Rational(-7, 24)
      class_time[:start] = DateTime.new(year, month, day, start_time.hour, start_time.minute, 0, pst_offset)
      class_time[:end] = DateTime.new(year, month, day, end_time.hour, end_time.minute, 0, pst_offset)
      class_time
    end

    # Converts the duration string into actual numbers
    def convert_duration_to_nums(duration)
      duration_values = duration.scan(/\d+/)
      duration_hash = { hour: 0, minutes: 0 }
      if duration.include?("&")
        duration_hash[:hour] = duration_values[0].to_i
        duration_hash[:minutes] = duration_values[1].to_i
      elsif duration.include?("hour")
        duration_hash[:hour] = duration_values[0].to_i
      else
        duration_hash[:minutes] = duration_values[0].to_i
      end
      duration_hash
    end

  end
end

# COMMAND LINE TOOL
# url = ARGV[0]
# if url.nil?
#   puts "Please enter the URL for the MindBody studio"
# else
#   yoga_classes = MindBodyScraper::YogaStudio.new.scrape(url)
#   yoga_classes.each do |yoga_class|
#     puts "CLASS NAME:   #{yoga_class[:name]}"
#     puts "INSTRUCTOR:   #{yoga_class[:instructor_name]}"
#     puts "START_TIME:   #{yoga_class[:start_time].to_s}"
#     puts "END_TIME:     #{yoga_class[:end_time].to_s}"
#     puts "\n\n"
#   end
# end
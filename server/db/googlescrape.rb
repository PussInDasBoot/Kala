require 'capybara'
require 'capybara/dsl'
require 'pry'
require 'nokogiri'
require 'active_support/all'

Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.run_server = false
Capybara.current_driver = :chrome

module MyCapybaraTest
  class Test
    include Capybara::DSL
    def studio(url)
      visit(url)
      doc = Nokogiri::HTML(page.html)
      sleep(2)
      name = page.find('.widget-pane-section-header-title').text.titleize
      # puts page.all(:css,'span.widget-pane-section-star-display').first
      if page.all(:css,'span.widget-pane-section-star-display').first
        rating = page.all(:css,'span.widget-pane-section-star-display').first.text
      end
      address = page.all(:css,'span.widget-pane-section-info-text').first.text
      results = {name: name, address: address, rating: rating}
      results
    end
  end
end




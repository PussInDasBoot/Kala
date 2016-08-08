require 'google/apis/calendar_v3'
require 'googleauth'
require 'googleauth/stores/file_token_store'

require 'fileutils'

# Added open-uri and json to retrieve Jackie's Google information
require 'open-uri'
require 'json'
require 'pry'

module GoogleOauth
  class CalendarAPI
    OOB_URI = 'urn:ietf:wg:oauth:2.0:oob'
    APPLICATION_NAME = 'Google Calendar API Ruby Quickstart'
    CLIENT_SECRETS_PATH = 'client_secret.json'
    # Creates ~/.credentials/calendar-ruby-quickstart.yaml, stores the access_token, access_token_refresh_token, client_id etc..
    CREDENTIALS_PATH = File.join(Dir.home, '.credentials',
                                 "calendar-ruby-quickstart.yaml")


    # https://www.googleapis.com/auth/userinfo.email -> obtained from bookmarked website
    # Specify multiple OAUTH scopes in an array
    # The scopes show up on the OAUTH popup as "Kala would like access to email, calendar, etc..."

    # SCOPE = Google::Apis::CalendarV3::AUTH_CALENDAR_READONLY
    # AUTH_CALENDAR provides READ AND WRITE capability
    SCOPES = ["https://www.googleapis.com/auth/userinfo.email", Google::Apis::CalendarV3::AUTH_CALENDAR]

    ##
    # Ensure valid credentials, either by restoring from the saved credentials
    # files or intitiating an OAuth2 authorization. If authorization is required,
    # the user's default browser will be launched to approve the request.
    #
    # @return [Google::Auth::UserRefreshCredentials] OAuth2 credentials
    def authorize
      FileUtils.mkdir_p(File.dirname(CREDENTIALS_PATH))

      client_id = Google::Auth::ClientId.from_file(CLIENT_SECRETS_PATH)
      token_store = Google::Auth::Stores::FileTokenStore.new(file: CREDENTIALS_PATH)

      # changed SCOPE to SCOPES to pass in multiple OAUTH scopes
      authorizer = Google::Auth::UserAuthorizer.new(
        client_id, SCOPES, token_store)

      user_id = 'default'
      credentials = authorizer.get_credentials(user_id)
      if credentials.nil?
        url = authorizer.get_authorization_url(
          base_url: OOB_URI)
        puts "Open the following URL in the browser and enter the " +
             "resulting code after authorization"
        puts url
        code = gets
        credentials = authorizer.get_and_store_credentials_from_code(
          user_id: user_id, code: code, base_url: OOB_URI)
      end
      credentials
    end

    #### OAUTH AUTHENTICATION ######

    # Initialize the API, check to see if we need to request for Jackie's permission to user her Google account
    service = Google::Apis::CalendarV3::CalendarService.new
    service.client_options.application_name = APPLICATION_NAME
    service.authorization = authorize
    # p service.authorization


    #### GET USER INFO ######

    # Now that we have the Jackie's permission, we can now use our access token to retrieve her user information
    access_token = service.authorization.access_token
    user_info_url = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=#{access_token}"
    get_jackies_info = open(user_info_url).read
    puts "JACKIE'S GOOGLE USER INFORMATION"
    jackies_info = JSON.parse(get_jackies_info) # also includes my profile picture, name, family name, etc...
    puts jackies_info
    puts jackies_info["email"]
    puts "\n\n"



    #### RETRIEVING EVENTS ####

    # Fetch the next 3 events from Jackie's calendar
    # changed calendar_id = primary to calendar_id = jbarlang@gmail.com
    calendar_id = jackies_info["email"]
    puts "calendar_id = #{calendar_id}"
    response = service.list_events(calendar_id,
                                   max_results: 3,
                                   single_events: true,
                                   order_by: 'startTime',
                                   time_min: Time.now.iso8601) ### used to be time_min = instead of time_min:
    puts response

    puts "Upcoming events:"
    puts "No upcoming events found" if response.items.empty?
    response.items.each do |event|
      # This showed the next three events on Jackie's calendar
      start = event.start.date || event.start.date_time
      puts "- #{event.summary} (#{start}) #{event.location}"
      puts JSON.parse(event.to_json)
      puts "\n\n"
    end
    puts "\n\n"



    ### GET BUSY TIMES FROM USER ####

    # Create a new FreeBusyRequest
    free_busy_request = Google::Apis::CalendarV3::FreeBusyRequest.new
    # DEBUG
    # p free_busy_request.methods - Object.methods 


    # Specify which calendar we are interested in for the FreeBusy request, in this case it is "jbarlang@gmail.com"
    free_busy_request_item = Google::Apis::CalendarV3::FreeBusyRequestItem.new
    free_busy_request_item.id = calendar_id
    # free_busy_request_item.update!  -> doesn't seem to matter whether update is called, leaving in just in case this comes to haunt later

    # DEBUG -> Shows what methods are available on free_busy_request_item
    # p free_busy_request_item.methods - Object.methods
    # p free_busy_request_item.id


    # Put the free_busy_request_item into free_busy_request.items (Array of FreeBusyRequestItems)
    free_busy_request.items = [free_busy_request_item]
    # The START of the time interval we are interested in
    # free_busy_request.time_min = DateTime.new(2016,8,6,19) # NO OFFSET CONVERTED 12:00PST AUG 6th to 19:00PST AUG 6th(UTC Conversion)
    # The END of the time interval we are intereseted in
    # free_busy_request.time_max = DateTime.new(2016, 8, 7, 6) # NO OFFSET CONVERTED 23:00PST AUG 7th to 06:00PST AUG 7th(UTC Conversion)
    pst_offset = Rational(-7, 24)
    free_busy_request.time_min = DateTime.new(2016, 8, 6, 12, 0, 0, pst_offset)
    free_busy_request.time_max = DateTime.new(2016, 8, 11, 23, 0, 0, pst_offset) 
    free_busy_request.time_zone = "America/Vancouver"
    # free_busy_request.update! -> doesn't seem to matter whether update is called, leaving in just in case this comes to haunt later
    puts "FREE BUSY REQUEST"
    puts free_busy_request.to_json
    puts "\n\n"
    # Make the FreeBusy API request
    puts "FREE BUSY RESPONSE"
    free_busy_response = service.query_freebusy(free_busy_request)
    puts free_busy_response.to_json
    puts "\n\n"
    # Show the busy times in Jackie's calendar, empty if she's completely free from time_min to time_max
    puts "JACKIE'S BUSY TIMES"
    # An Array of TimePeriod objects which indicate when Jackie is busy
    jackies_busy_times = free_busy_response.calendars[jackies_info["email"]].busy
    jackies_busy_times.each { |busy_time| puts busy_time.to_json }
    puts "\n\n"

end
end

### FREE BUSY REQUEST THAT GETS CORRECT TIMEZONE IN FREE BUSY RESPONSE!
# POST https://www.googleapis.com/calendar/v3/freeBusy?key={YOUR_API_KEY}
# {
#  "timeZone": "America/Vancouver",           -> Got this from looking at Jackie's timeZone in her events
#  "timeMin": "2016-08-06T12:00:00-07:00",    -> Still need to provide offset in request from UTC -7H b/c of Daylight savings
#  "timeMax": "2016-08-11T13:00:00-07:00",
#  "items": [
#   {
#    "id": "jbarlang@gmail.com"
#   }
#  ]
# }

# 200
# - SHOW HEADERS -
# {
#  "kind": "calendar#freeBusy",
#  "timeMin": "2016-08-06T19:00:00.000Z",
#  "timeMax": "2016-08-11T20:00:00.000Z",
#  "calendars": {
#   "jbarlang@gmail.com": {
#    "busy": [
#     {
#      "start": "2016-08-06T20:00:00-07:00",         -> Jon Pardi Concert
#      "end": "2016-08-06T22:00:00-07:00"
#     },
#     {
#      "start": "2016-08-11T11:45:00-07:00",         -> Follow Up App
#      "end": "2016-08-11T12:45:00-07:00"
#     }
#    ]
#   }
#  }
# }



#  FREE BUSY REQUEST FIRST ATTEMPT
# {
#  "timeZone": "UTC", 
#  "timeMin": "2016-08-06T12:00:00-07:00", INCLUDES OFFSET
#  "timeMax": "2016-08-06T23:00:00-07:00", INCLUDES OFFSET, 7H due to DAYLIGHT SAVINGS
#  "items": [
#   {
#    "id": "jbarlang@gmail.com"
#   }
#  ]
# }

# Google seemed to disregard timeZone, just convert the timeMin and timeMax to UTC since that's what the response gives back
# anyways

# POST https://www.googleapis.com/calendar/v3/freeBusy?key={YOUR_API_KEY}
# {
#  "timeZone": "UTC",
#  "timeMin": "2016-08-06T19:00:00-00:00",   NO OFFSET CONVERTED 12:00PST AUG 6th to 19:00PST AUG 6th(UTC Conversion)
#  "timeMax": "2016-08-07T06:00:00-00:00",   NO OFFSET CONVERTED 23:00PST AUG 7th to 06:00PST AUG 7th(UTC Conversion)
#  "items": [
#   {
#    "id": "jbarlang@gmail.com"
#   }
#  ]
# }




# FREE BUSY RESPONSE, always returns times in UTC

# 200
# - SHOW HEADERS -
# {
#  "kind": "calendar#freeBusy",
#  "timeMin": "2016-08-06T19:00:00.000Z",
#  "timeMax": "2016-08-07T06:00:00.000Z",
#  "calendars": {
#   "jbarlang@gmail.com": {
#    "busy": [
#     {
#      "start": "2016-08-07T03:00:00Z",
#      "end": "2016-08-07T05:00:00Z"
#     }
#    ]
#   }
#  }
# }


# RESPONSE AFTER INCREASING TIME RANGE
# 200
# - SHOW HEADERS -
# {
#  "kind": "calendar#freeBusy",
#  "timeMin": "2016-08-06T19:00:00.000Z",
#  "timeMax": "2016-08-13T06:00:00.000Z",
#  "calendars": {
#   "jbarlang@gmail.com": {
#    "busy": [
#     {
#      "start": "2016-08-07T03:00:00Z",
#      "end": "2016-08-07T05:00:00Z"
#     },
#     {
#      "start": "2016-08-11T18:45:00Z",
#      "end": "2016-08-11T19:45:00Z"
#     }
#    ]
#   }
#  }
# }
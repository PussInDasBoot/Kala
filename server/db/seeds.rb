# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Studios
require_relative 'googlescrape'
require_relative 'mind-body-scraper'
require 'pry'

STRETCH_GOOGLE_URL = "https://www.google.ca/maps/place/STRETCH/@49.2815951,-123.1106868,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xea26241ef714b4b1!8m2!3d49.2803152!4d-123.1006506"
ONE_YOGA_GOOGLE_URL = "https://www.google.ca/maps/place/One+Yoga+for+the+People/@49.2825421,-123.1108251,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xf9cbcc9287a71c52!8m2!3d49.2822688!4d-123.1086369"
ONE_HOUR_HOT_YOGA_GOOGLE_URL = "https://www.google.ca/maps/place/One+hour+hot+yoga/@49.2765517,-123.1296538,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x30146048e3582e8e!8m2!3d49.2754392!4d-123.1243828"
OXYGEN_GOOGLE_URL = "https://www.google.ca/maps/place/Oxygen+Yoga+%26+Fitness+Yaletown/@49.2793259,-123.1217297,17z/data=!3m1!4b1!4m5!3m4!1s0x5486717e17ef059b:0x5c576536f8bcabf3!8m2!3d49.2793259!4d-123.1195357"
FORM_BODY_LAB_GOOGLE_URL = "https://www.google.ca/maps/place/Form+Body+Lab/@49.2770202,-123.1222619,17z/data=!3m1!4b1!4m5!3m4!1s0x548673d60d062a7b:0xc3572a07d6b861f!8m2!3d49.2770202!4d-123.1200679"
DHARMA_GOOGLE_URL = "https://www.google.ca/maps/place/Dharma+Yoga+Vancouver/@49.2756366,-123.121394,17z/data=!3m1!4b1!4m5!3m4!1s0x548673d64eb346b1:0x39e24611aac17acb!8m2!3d49.2756366!4d-123.1192"
WESTCOAST_HOT_YOGA_GOOGLE_URL = "https://www.google.ca/maps/place/WestCoast+hot+Yoga/@49.2751926,-123.1230927,17z/data=!3m1!4b1!4m5!3m4!1s0x410b7dd4fa396797:0x2c8ed35e2b3e1328!8m2!3d49.2751926!4d-123.1208987"
CHOPRA_GOOGLE_URL = "https://www.google.ca/maps/place/Chopra+Yoga+Center/@49.2824722,-123.1185499,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x9d64dca4be18a9d0!8m2!3d49.2850026!4d-123.1146571"
YOGA_WEST_GOOGLE_URL = "https://www.google.ca/maps/place/Yoga+West/@49.2676104,-123.1683701,17z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xd15af8ee9d8e7fbe!8m2!3d49.268201!4d-123.1652758"
MOKSHA_YOGA_GOOGLE_URL = "https://www.google.ca/maps/place/Moksha+Yoga/@49.2617199,-123.1946486,15z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xc44a138e733925cd!8m2!3d49.2680198!4d-123.1863901"
JUST_YOGA_GOOGLE_URL = "https://www.google.ca/maps/place/just+yoga/@49.2631249,-123.1057471,17z/data=!3m1!4b1!4m5!3m4!1s0x548673e1ac60683f:0x4200573ccd7ffe40!8m2!3d49.2631249!4d-123.1035531"
MOKSHA_EAST_GOOGLE_URL = "https://www.google.ca/maps/place/Moksha+Yoga+East+Vancouver/@49.2624452,-123.1093269,15z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x85906c99ca87f176!8m2!3d49.2571867!4d-123.0925423"
YOGACARA_GOOGLE_URL = "https://www.google.ca/maps/place/Yogacara+Studios+%7C+Mount+Pleasant+Yoga/@49.2624172,-123.0934053,15z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x2c5cf301870c22c8!8m2!3d49.2547918!4d-123.0901685"
BIKRAM_GOOGLE_URL = "https://www.google.ca/maps/place/Bikram's+Yoga+College-India/@49.2777333,-123.0741363,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x9b805c913dbb2f5c!8m2!3d49.2746308!4d-123.0697663"


STRETCH_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=197938'
ONE_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=31718'
ONE_HOUR_HOT_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=177288'
OXYGEN_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=230418'
FORM_BODY_LAB_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=33473'
DHARMA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=201653'
WESTCOAST_HOT_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=474'
CHOPRA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=18712'
YOGA_WEST_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=14330'
MOKSHA_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=5925'
JUST_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=26705'
MOKSHA_EAST_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=22597'
YOGACARA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=184178'
BIKRAM_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=617'


## HELPER METHODS ##
# Creates a yoga studio, and its classes
# Returns Studio studio
def build_studio(google_url, studio_url, drop_in_price, pass_average, membership_average)
  google_info = GoogleScraper::YogaStudio.new.scrape(google_url)
  studio = Studio.new(google_info)
  studio.location = get_location(studio.address)
  studio.lat = get_lat(google_url)
  studio.lng = get_lng(google_url)
  studio.drop_in_price = drop_in_price
  studio.pass_average = pass_average
  studio.membership_average = membership_average
  studio.save

  studio_classes = MindBodyScraper::YogaStudio.new.scrape(studio_url)
  studio_classes.each do |studio_class|
    yoga_class = YogaClass.new(studio_class)
    yoga_class.studio = studio
    yoga_class.save
  end

  studio
end

# Determines a studio's general location based on its postal code
# Returns String location
def get_location(address)
  if /V6[A-J]/.match(address)
    location = "Downtown Vancouver"
  elsif /V6[K-Z]/.match(address)
    location = "Kitsilano"
  elsif /V5[T-Z]/.match(address)
    location = "Mount Pleasant"
  elsif /V5[A-S]/.match(address)
    location = "East Vancouver"
  end
  location
end

def get_lat(google_url)
  google_url.scan(/49.2\d{6}/).first
end

def get_lng(google_url)
  google_url.scan(/-123.\d{6,7}/).first
end
## END OF HELPER METHODS ##

# Stretch Yoga Studio
stretch = build_studio(STRETCH_GOOGLE_URL, STRETCH_STUDIO_URL, 18.00, 15.50, 13.13)

Pass.create(studio: stretch, num_classes: 5, price: 80.00)
Pass.create(studio: stretch, num_classes: 10, price: 150.00)
Membership.create(studio: stretch, num_classes: 50, price: 500.00)
Membership.create(studio: stretch, duration: 30, num_classes: 8, price: 130.00)

# One Yoga Studio
one_yoga = build_studio(ONE_YOGA_GOOGLE_URL, ONE_YOGA_STUDIO_URL, 17.00, 13.00, 12.25)

Pass.create(studio: one_yoga, num_classes: 10, price: 130.00)
Membership.create(studio: one_yoga, duration: 30, num_classes: 8, price: 98.00)


# Chopra Studio
chopra = build_studio(CHOPRA_GOOGLE_URL, CHOPRA_STUDIO_URL, 20.00, 15.00, 12.50)

Pass.create(studio: chopra, num_classes: 10, price: 150.00)
Membership.create(studio: chopra, duration: 30, num_classes: 8, price: 100.00)


# One Hour Yoga Studio
one_hour = build_studio(ONE_HOUR_HOT_YOGA_GOOGLE_URL, ONE_HOUR_HOT_YOGA_STUDIO_URL, 15.00, 8.95, 6.99)

Pass.create(studio: one_hour, num_classes: 20, price: 179.00)
Membership.create(studio: one_hour, num_classes: 100, price: 699.00)


# Oxygen Yoga Studio
oxygen = build_studio(OXYGEN_GOOGLE_URL, OXYGEN_STUDIO_URL, 15.00, 9.17, 14.15)

Pass.create(studio: oxygen, num_classes: 10, price: 125.00)
Pass.create(studio: oxygen, num_classes: 20, price: 200.00)
Membership.create(studio: oxygen, num_classes: 8, duration: 30, price: 132.00)
Membership.create(studio: oxygen, num_classes: 24, duration: 90, price: 330.00)
Membership.create(studio: oxygen, num_classes: 48, duration: 180, price: 585.00)


# Form Body Yoga Studio
form_body = build_studio(FORM_BODY_LAB_GOOGLE_URL, FORM_BODY_LAB_STUDIO_URL, 23.00, 18.25, 18.75)

Pass.create(studio: form_body, num_classes: 5, price: 95.00)
Pass.create(studio: form_body, num_classes: 10, price: 175.00)
Membership.create(studio: form_body, num_classes: 8, duration: 30, price: 150.00)


# Dharma Yoga Studio
dharma = build_studio(DHARMA_GOOGLE_URL, DHARMA_STUDIO_URL, 20.00, 10.50, 15.00)

Pass.create(studio: dharma, num_classes: 10, price: 110.00)
Pass.create(studio: dharma, num_classes: 25, price: 250.00)
Membership.create(studio: dharma, num_classes: 8, duration: 30, price: 120.00)


# West Coast Yoga Studio
westcoast = build_studio(WESTCOAST_HOT_YOGA_GOOGLE_URL, WESTCOAST_HOT_YOGA_STUDIO_URL, 18.00, 14.50, 12.58)

Pass.create(studio: westcoast, num_classes: 10, price: 160.00)
Pass.create(studio: westcoast, num_classes: 20, price: 260.00)
Membership.create(studio: westcoast, num_classes: 50, price: 500.00)
Membership.create(studio: westcoast, num_classes: 8, duration: 30, price: 150.00)
Membership.create(studio: westcoast, num_classes: 100, price: 900)


# Yoga West Studio
yoga_west = build_studio(YOGA_WEST_GOOGLE_URL, YOGA_WEST_STUDIO_URL, 18.00, 13.25, 17.50)

Pass.create(studio: yoga_west, num_classes: 10, price: 145.00)
Pass.create(studio: yoga_west, num_classes: 20, price: 240.00)
Membership.create(studio: yoga_west, num_classes: 8, duration: 30, price: 140.00)

# Moksha Yoga Studio
moksha = build_studio(MOKSHA_YOGA_GOOGLE_URL, MOKSHA_YOGA_STUDIO_URL, 20.00, 15.28, 21.00)

Pass.create(studio: moksha, num_classes: 10, price: 168.00)
Pass.create(studio: moksha, num_classes: 20, price: 275.00)
Membership.create(studio: moksha, num_classes: 8, duration: 30, price: 168.00)


# Just Yoga Studio
just_yoga = build_studio(JUST_YOGA_GOOGLE_URL, JUST_YOGA_STUDIO_URL, 20.00, 16.25, 15.63)

Pass.create(studio: just_yoga, num_classes: 5, price: 85.00)
Pass.create(studio: just_yoga, num_classes: 10, price: 155.00)
Membership.create(studio: just_yoga, num_classes: 8, duration: 30, price: 130.00)
Membership.create(studio: just_yoga, num_classes: 16, duration: 60, price: 240.00)


# Moksha Hot Yoga Studio
moksha_east = build_studio(MOKSHA_EAST_GOOGLE_URL, MOKSHA_EAST_STUDIO_URL, 20.00, 14.25, 20.00)

Pass.create(studio: moksha_east, num_classes: 10, price: 150.00)
Pass.create(studio: moksha_east, num_classes: 20, price: 270.00)
Membership.create(studio: moksha_east, num_classes: 8, duration: 30, price: 160.00)


# Yogacara Studio
yogacara = build_studio(YOGACARA_GOOGLE_URL, YOGACARA_STUDIO_URL, 15.00, 12.93, 11.25)

Pass.create(studio: yogacara, num_classes: 10, price: 139.00)
Pass.create(studio: yogacara, num_classes: 20, price: 239.00)
Membership.create(studio: yogacara, num_classes: 48, duration: 180, price: 540.00)


# Bikram Yoga Studio
bikram = build_studio(BIKRAM_GOOGLE_URL, BIKRAM_YOGA_STUDIO_URL, 22.00, 13.50, 12.67)

Pass.create(studio: bikram, num_classes: 5, price: 75.00)
Pass.create(studio: bikram, num_classes: 20, price: 240.00)
Membership.create(studio: bikram, num_classes: 50, price: 500)
Membership.create(studio: bikram, num_classes: 8, duration: 30, price: 134.00)
Membership.create(studio: bikram, num_classes: 48, duration: 180, price: 540.00)

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



karmaurl = "https://www.google.ca/maps/place/Karma+Teachers%E2%84%A2+Centre+for+Yoga+and+Meditation/@49.2815951,-123.1106868,16z/data=!4m12!1m6!3m5!1s0x0:0xea26241ef714b4b1!2sSTRETCH!8m2!3d49.2803152!4d-123.1006506!3m4!1s0x0:0x12226ceb016e9904!8m2!3d49.2821017!4d-123.1061143"
yogacara = "https://www.google.ca/maps/place/Yogacara+Studios+%7C+Mount+Pleasant+Yoga/@49.2624172,-123.0934053,15z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x2c5cf301870c22c8!8m2!3d49.2547918!4d-123.0901685"


urlarray = ["https://www.google.ca/maps/place/STRETCH/@49.2815951,-123.1106868,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xea26241ef714b4b1!8m2!3d49.2803152!4d-123.1006506", 
  karmaurl, 
  "https://www.google.ca/maps/place/One+Yoga+for+the+People/@49.2825421,-123.1108251,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xf9cbcc9287a71c52!8m2!3d49.2822688!4d-123.1086369", 
  "https://www.google.ca/maps/place/Chopra+Yoga+Center/@49.2824722,-123.1185499,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x9d64dca4be18a9d0!8m2!3d49.2850026!4d-123.1146571", 
"https://www.google.ca/maps/place/One+hour+hot+yoga/@49.2765517,-123.1296538,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x30146048e3582e8e!8m2!3d49.2754392!4d-123.1243828", 
"https://www.google.ca/maps/place/Oxygen+Yoga+%26+Fitness+Yaletown/@49.2782314,-123.1243967,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x5c576536f8bcabf3!8m2!3d49.2793257!4d-123.119536", 
"https://www.google.ca/maps/place/Form+Body+Lab/@49.2782314,-123.1243967,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xc3572a07d6b861f!8m2!3d49.2770203!4d-123.1200685", 
"https://www.google.ca/maps/place/Dharma+Yoga+Vancouver/@49.2782314,-123.1243967,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x39e24611aac17acb!8m2!3d49.275637!4d-123.1191994", 
"https://www.google.ca/maps/place/WestCoast+hot+Yoga/@49.2782314,-123.1243967,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x2c8ed35e2b3e1328!8m2!3d49.2751934!4d-123.1208986", 
"https://www.google.ca/maps/place/Yoga+West/@49.2676104,-123.1683701,17z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xd15af8ee9d8e7fbe!8m2!3d49.268201!4d-123.1652758", 
"https://www.google.ca/maps/place/Moksha+Yoga/@49.2617199,-123.1946486,15z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0xc44a138e733925cd!8m2!3d49.2680198!4d-123.1863901",
"https://www.google.ca/maps/place/just+yoga/@49.2624452,-123.1093269,15z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x4200573ccd7ffe40!8m2!3d49.2631243!4d-123.1035528", 
"https://www.google.ca/maps/place/Moksha+Yoga+East+Vancouver/@49.2624452,-123.1093269,15z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x85906c99ca87f176!8m2!3d49.2571867!4d-123.0925423", 
yogacara, 
"https://www.google.ca/maps/place/Bikram's+Yoga+College-India/@49.2777333,-123.0741363,16z/data=!4m8!1m2!2m1!1syoga!3m4!1s0x0:0x9b805c913dbb2f5c!8m2!3d49.2746308!4d-123.0697663"]

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
MOKSHA_HOT_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=22597'
YOGACARA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=184178'
BIKRAM_YOGA_STUDIO_URL = 'https://clients.mindbodyonline.com/classic/home?studioid=617'

t = MyCapybaraTest::Test.new
urlarray.each do |url|
  results = t.studio(url)
  puts results
  Studio.create(
    name: results[:name],
    address: results[:address],
    rating: results[:rating]
    )
end

# Prices
stretch = Studio.find_by(name: 'Stretch')
stretchprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 18},
  {category: 'pass', num_classes: 5, price: 80},
  {category: 'pass', num_classes: 10, price: 150},
  {category: 'membership', num_classes: 50, price: 500},
  {category: 'membership', num_classes: 8, duration: 30, price: 130}
  ]

stretchprices.each do |stretchprice|
  price = ClassPackage.new(stretchprice)
  price.studio_id = stretch.id
  price.save
end

stretch_yoga_classes = MindBodyScraper::YogaStudio.new.scrape(STRETCH_STUDIO_URL)
stretch_yoga_classes.each do |stretch_yoga_class|
  yoga_class = YogaClass.new(stretch_yoga_class)
  yoga_class.studio = stretch
  yoga_class.save
end

oneyoga = Studio.find_by(name: 'One Yoga For The People')
oneyogaprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 17},
  {category: 'pass', num_classes: 10, price: 130},
  {category: 'membership', num_classes: 8, duration: 30, price: 98}
  ]

oneyogaprices.each do |oneyogaprice|
  price = ClassPackage.new(oneyogaprice)
  price.studio_id = oneyoga.id
  price.save
end

one_yoga_classes = MindBodyScraper::YogaStudio.new.scrape(ONE_YOGA_STUDIO_URL)
one_yoga_classes.each do |one_yoga_class|
  yoga_class = YogaClass.new(one_yoga_class)
  yoga_class.studio = oneyoga
  yoga_class.save
end

chopra = Studio.find_by(name: 'Chopra Yoga Center')
chopraprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 20},
  {category: 'pass', num_classes: 10, price: 150},
  {category: 'membership', num_classes: 8, duration: 30, price: 100}
  ]

chopraprices.each do |chopraprice|
  price = ClassPackage.new(chopraprice)
  price.studio_id = chopra.id
  price.save
end

chopra_yoga_classes = MindBodyScraper::YogaStudio.new.scrape(CHOPRA_STUDIO_URL)
chopra_yoga_classes.each do |chopra_yoga_class|
  yoga_class = YogaClass.new(chopra_yoga_class)
  yoga_class.studio = chopra
  yoga_class.save
end

onehour = Studio.find_by(name: 'One Hour Hot Yoga')
onehourprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 15},
  {category: 'pass', num_classes: 20, price: 179},
  {category: 'membership', num_classes: 100, price: 699}
  ]

onehourprices.each do |onehourprice|
  price = ClassPackage.new(onehourprice)
  price.studio_id = onehour.id
  price.save
end

one_hour_classes = MindBodyScraper::YogaStudio.new.scrape(ONE_HOUR_HOT_YOGA_STUDIO_URL)
one_hour_classes.each do |one_hour_class|
  yoga_class = YogaClass.new(one_hour_class)
  yoga_class.studio = onehour
  yoga_class.save
end

oxygen = Studio.find_by(name: 'Oxygen Yoga & Fitness Yaletown')
oxygenprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 15},
  {category: 'pass', num_classes: 10, price: 125},
  {category: 'pass', num_classes: 20, price: 200},
  {category: 'membership', num_classes: 8, duration: 30, price: 132},
  {category: 'membership', num_classes: 24, duration: 90, price: 330},
  {category: 'membership', num_classes: 48, duration: 180, price: 585}
  ]

oxygenprices.each do |oxygenprice|
  price = ClassPackage.new(oxygenprice)
  price.studio_id = oxygen.id
  price.save
end

oxygen_classes = MindBodyScraper::YogaStudio.new.scrape(OXYGEN_STUDIO_URL)
oxygen_classes.each do |oxygen_class|
  yoga_class = YogaClass.new(oxygen_class)
  yoga_class.studio = oxygen
  yoga_class.save
end

formbody = Studio.find_by(name: 'Form Body Lab')
formbodyprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 23},
  {category: 'pass', num_classes: 5, price: 95},
  {category: 'pass', num_classes: 10, price: 175},
  {category: 'membership', num_classes: 8, duration: 30, price: 150}
  ]

formbodyprices.each do |formbodyprice|
  price = ClassPackage.new(formbodyprice)
  price.studio_id = formbody.id
  price.save
end

form_body_classes = MindBodyScraper::YogaStudio.new.scrape(FORM_BODY_LAB_STUDIO_URL)
form_body_classes.each do |form_body_class|
  yoga_class = YogaClass.new(form_body_class)
  yoga_class.studio = formbody
  yoga_class.save
end

dharma = Studio.find_by(name: 'Dharma Yoga Vancouver')
dharmaprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 20},
  {category: 'pass', num_classes: 10, price: 110},
  {category: 'pass', num_classes: 25, price: 250},
  {category: 'membership', num_classes: 8, duration: 30, price: 120}
  ]

dharmaprices.each do |dharmaprice|
  price = ClassPackage.new(dharmaprice)
  price.studio_id = dharma.id
  price.save
end

dharma_classes = MindBodyScraper::YogaStudio.new.scrape(DHARMA_STUDIO_URL)
dharma_classes.each do |dharma_class|
  yoga_class = YogaClass.new(dharma_class)
  yoga_class.studio = dharma
  yoga_class.save
end

westcoast = Studio.find_by(name: 'West Coast Hot Yoga')
westcoastprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 18},
  {category: 'pass', num_classes: 10, price: 160},
  {category: 'pass', num_classes: 20, price: 260},
  {category: 'membership', num_classes: 8, duration: 30, price: 150},
  {category: 'membership', num_classes: 100, price: 900}
  ]

westcoastprices.each do |westcoastprice|
  price = ClassPackage.new(westcoastprice)
  price.studio_id = westcoast.id
  price.save
end

west_coast_classes = MindBodyScraper::YogaStudio.new.scrape(WESTCOAST_HOT_YOGA_STUDIO_URL)
west_coast_classes.each do |west_coast_class|
  yoga_class = YogaClass.new(west_coast_class)
  yoga_class.studio = westcoast 
  yoga_class.save
end

yogawest = Studio.find_by(name: 'Yoga West')
yogawestprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 18},
  {category: 'pass', num_classes: 10, price: 145},
  {category: 'pass', num_classes: 20, price: 240},
  {category: 'membership', num_classes: 8, duration: 30, price: 140}
  ]

yogawestprices.each do |yogawestprice|
  price = ClassPackage.new(yogawestprice)
  price.studio_id = yogawest.id
  price.save
end

yoga_west_classes = MindBodyScraper::YogaStudio.new.scrape(YOGA_WEST_STUDIO_URL)
yoga_west_classes.each do |yoga_west_class|
  yoga_class = YogaClass.new(yoga_west_class)
  yoga_class.studio = yogawest
  yoga_class.save
end

moksha = Studio.find_by(name: 'Moksha Yoga')
mokshaprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 20},
  {category: 'pass', num_classes: 10, price: 168},
  {category: 'pass', num_classes: 20, price: 275},
  {category: 'membership', num_classes: 8, duration: 30, price: 168}
  ]

mokshaprices.each do |mokshaprice|
  price = ClassPackage.new(mokshaprice)
  price.studio_id = moksha.id
  price.save
end

moksha_classes = MindBodyScraper::YogaStudio.new.scrape(MOKSHA_YOGA_STUDIO_URL)
moksha_classes.each do |moksha_class|
  yoga_class = YogaClass.new(moksha_class)
  yoga_class.studio = moksha
  yoga_class.save
end

just = Studio.find_by(name: 'Just Yoga')
justprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 20},
  {category: 'pass', num_classes: 5, price: 85},
  {category: 'pass', num_classes: 10, price: 155},
  {category: 'membership', num_classes: 8, duration: 30, price: 130},
  {category: 'membership', num_classes: 16, duration: 60, price: 240}
  ]

justprices.each do |justprice|
  price = ClassPackage.new(justprice)
  price.studio_id = just.id
  price.save
end

just_yoga_classes = MindBodyScraper::YogaStudio.new.scrape(JUST_YOGA_STUDIO_URL)
just_yoga_classes.each do |just_yoga_class|
  yoga_class = YogaClass.new(just_yoga_class)
  yoga_class.studio = just
  yoga_class.save
end

mokshaeast = Studio.find_by(name: 'Moksha Yoga East Vancouver')
mokshaeastprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 20},
  {category: 'pass', num_classes: 20, price: 270},
  {category: 'pass', num_classes: 10, price: 150},
  {category: 'membership', num_classes: 8, duration: 30, price: 160}
  ]

mokshaeastprices.each do |mokshaeastprice|
  price = ClassPackage.new(mokshaeastprice)
  price.studio_id = mokshaeast.id
  price.save
end

moksha_east_classes = MindBodyScraper::YogaStudio.new.scrape(MOKSHA_HOT_YOGA_STUDIO_URL)
moksha_east_classes.each do |moksha_east_class|
  yoga_class = YogaClass.new(moksha_east_class)
  yoga_class.studio = mokshaeast
  yoga_class.save
end

yogacara = Studio.find_by(name: 'Yogacara Studios | Mount Pleasant Yoga')
yogacaraprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 15},
  {category: 'pass', num_classes: 20, price: 239},
  {category: 'pass', num_classes: 10, price: 139},
  {category: 'membership', num_classes: 48, duration: 180, price: 540}
  ]

yogacaraprices.each do |yogacaraprice|
  price = ClassPackage.new(yogacaraprice)
  price.studio_id = yogacara.id
  price.save
end

yogacara_classes = MindBodyScraper::YogaStudio.new.scrape(YOGACARA_STUDIO_URL)
yogacara_classes.each do |yogacara_class|
  yoga_class = YogaClass.new(yogacara_class)
  yoga_class.studio = yogacara
  yoga_class.save
end

bikram = Studio.find_by(name: "Bikram's Yoga College India")
bikramprices = [
  {category: 'single', num_classes: 1, duration: 1, price: 22},
  {category: 'pass', num_classes: 5, price: 75},
  {category: 'pass', num_classes: 20, price: 240},
  {category: 'membership', num_classes: 8, duration: 30, price: 134},
  {category: 'membership', num_classes: 48, duration: 180, price: 540}
  ]

bikramprices.each do |bikramprice|
  price = ClassPackage.new(bikramprice)
  price.studio_id = bikram.id
  price.save
end

bikram_classes = MindBodyScraper::YogaStudio.new.scrape(BIKRAM_YOGA_STUDIO_URL)
bikram_classes.each do |bikram_class|
  yoga_class = YogaClass.new(bikram_class)
  yoga_class.studio = bikram
  yoga_class.save
end
class Studio < ApplicationRecord
  has_many :class_packages
  has_many :yoga_classes
end

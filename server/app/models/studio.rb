class Studio < ApplicationRecord
  has_many :passes
  has_many :memberships
  has_many :yoga_classes
end

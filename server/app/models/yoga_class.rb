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
end



class Event < ApplicationRecord
	belongs_to :animal
	reverse_geocoded_by :latitude, :longitude
	before_validation :reverse_geocode  # auto-fetch address
	geocoded_by :address
	before_validation :geocode, :if => :address_changed?

	
	def same_region()
		@all_nearbys = self.nearbys(1)
		
		@all_nearbys.select { |a| a.status == "perdido" }
	end

end

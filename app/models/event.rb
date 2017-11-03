class Event < ApplicationRecord
	belongs_to :animal
	has_many :comments
	reverse_geocoded_by :latitude, :longitude
	before_validation :reverse_geocode  # auto-fetch address
	geocoded_by :address
	before_validation :geocode, :if => :address_changed?

	
	def same_region()	
		@all_nearbys = self.nearbys(5)
		
		return [] if @all_nearbys.nil?
		@all_nearbys.select { |a| a.status == "perdido" }
		
	end

end

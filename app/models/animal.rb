class Animal < ApplicationRecord
	validates :name, presence: true
	validates :color, presence: true
	validates :race, presence: true
	validates :sex, presence: true
	validates :age, presence: true
	validates :size, presence: true
	validates :animal_type, presence: true
	belongs_to :user
	has_many :images, dependent: :destroy
	has_many :events, dependent: :destroy

	def self.where(tipo_animal, sex, size)
	  where('animal_type LIKE :tipo_animal OR sex LIKE :sex OR size LIKE :size', tipo_animal: "%#{tipo_animal}%", sex: "%#{sex}%", size: "%#{size}%")
	end
end

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

	def self.search(search)
	  scope = self

	  scope = scope.where(animal_type: search[:animal_type]) if search[:animal_type].present?
	  scope = scope.where(sex: search[:sex]) if search[:sex].present?
	  scope = scope.where(size: search[:size]) if search[:size].present?
	  
	  scope
	end
end

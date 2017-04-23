class Animal < ApplicationRecord
	validates :name, presence: true
	validates :color, presence: true
	validates :race, presence: true
	validates :animal_type, presence: true
	belongs_to :user
	has_many :images, dependent: :destroy
	has_many :events
end

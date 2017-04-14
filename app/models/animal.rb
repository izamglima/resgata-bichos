class Animal < ApplicationRecord
	validates :name, presence: true
	validates :color, presence: true
	belongs_to :user
	has_many :images, dependent: :destroy
end

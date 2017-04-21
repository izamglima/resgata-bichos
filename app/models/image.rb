class Image < ApplicationRecord
	belongs_to :animal
	has_attached_file :image,
					  :storage => :s3,
					  :s3_region => "us-west-1",
					  :bucket => "resgataimgs",
					  :s3_host_name => "s3-us-west-1.amazonaws.com", 
					  :s3_credentials => {  :access_key_id  => ENV['AWS_KEY'],
											:secret_access_key => ENV['AWS_SECRET']
										}
	validates_attachment :image,
  		content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
  	validates :image, presence: true
end


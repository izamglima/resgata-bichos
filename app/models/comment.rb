class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :event, optional: true
  belongs_to :adoption, optional: true
end

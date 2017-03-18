json.extract! animal, :id, :name, :race, :color, :status, :created_at, :updated_at
json.url animal_url(animal, format: :json)
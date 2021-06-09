class Product < ApplicationRecord
    validates :name, :description, :price, presence: true
    validates :store_id, presence: true

    belongs_to :store,
        primary_key: :id,
        foreign_key: :store_id,
        class_name: :Store

    
end

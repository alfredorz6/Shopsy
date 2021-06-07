class Store < ApplicationRecord
    validates :owner_id, uniqueness: true
 
    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User;

    has_many :products,
        primary_key: :id,
        foreign_key: :store_id,
        class_name: :Product


end

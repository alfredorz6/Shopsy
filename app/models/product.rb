class Product < ApplicationRecord
    include PgSearch
    validates :name, :description, :price, presence: true
    validates :store_id, presence: true

    belongs_to :store,
        primary_key: :id,
        foreign_key: :store_id,
        class_name: :Store;

    has_many :cart_item,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :CartItem
    
    has_many :reviews,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Review
        

    has_one_attached :photo

    pg_search_scope :search_by_name, :against => :name,
    :using => {
        :tsearch => {:prefix => true}
    }

    pg_search_scope :search_by_store, associated_against: {
        store: :name},
    :using => {
        :tsearch => {:prefix => true}
    }   

end

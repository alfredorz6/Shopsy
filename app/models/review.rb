class Review < ApplicationRecord
    validates :rating, :body, :product_id, :user_id, presence: true
    validates :rating, numericality: { greater_than_or_equal_to: 0, less_than: 6 }

    belongs_to :product,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end

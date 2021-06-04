class Store < ApplicationRecord
    
 
    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User;


end

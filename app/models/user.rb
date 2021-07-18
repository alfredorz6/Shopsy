class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :name, :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true

    validates :password, length: {minimum: 6}, allow_nil:true
    after_initialize :ensure_session_token

    has_one :store,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Store;

    has_many :cartitems,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :CartItem
    
    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Review

    attr_reader :password


    def self.find_by_credentials(email, password)
        user= User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            nil
        end
    end

    def password=(password)
        self.password_digest= BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        password_obj = BCrypt::Password.new(self.password_digest)
        password_obj.is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = ensure_session_token

        self.save!
        self.session_token
    end
end

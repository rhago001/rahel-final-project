class User < ApplicationRecord
  
  has_many :appointments
  has_many :trainers, through: :appointments
  has_many :reviews
  has_many :comments
  has_many :posts, dependent: :destroy
  
  has_secure_password

end 
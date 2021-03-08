class Trainer < ApplicationRecord
  has_many :appointments
  has_many :users, through: :appointments
  has_many :reviews
  has_many :posts, dependent: :destroy
  has_many :comments




  


end 
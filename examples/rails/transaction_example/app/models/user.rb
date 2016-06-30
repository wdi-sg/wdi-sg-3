class User < ApplicationRecord
  has_many :addresses, dependent: :destroy
end

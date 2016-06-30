class User < ApplicationRecord
  has_secure_password

  # Note, this isn't a great email format checker. but if we really care we
  # should just try sending them a message, not validating the format. Email
  # validation with RegExps is notoriously frought with peril. You probably
  # want to send a confirmation email they can click on to activate their
  # account as a way to verify email address validity.
  validates :email, format: { with: /@/ }, uniqueness: true

  validates :password, length: { minimum: 8 }, on: :create

  has_many :posts
end

class Order < ApplicationRecord
  belongs_to :customer

  # def customer
  #   Customer.find(customer_id)
  # end
end

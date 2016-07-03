class Order < ApplicationRecord
  belongs_to :customer
  has_many :order_items, dependent: :destroy
  has_many :pizzas, through: :order_items

  # def customer
  #   Customer.find(customer_id)
  # end

  def name
    "#{customer.name}'s order at #{created_at.to_formatted_s(:short)}"
  end
end

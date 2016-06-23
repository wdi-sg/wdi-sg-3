class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :pizza

  def name
    pizza.name
  end
end

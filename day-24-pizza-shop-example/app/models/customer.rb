class Customer < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_many :order_items, through: :orders
    has_many :pizzas, through: :order_items
    has_many :toppings, through: :pizzas

    def orders
      Order.where(customer_id: id)
    end

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true,
    format: { with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }

    def full_name
        "Mr/Mrs. " + name
        # first_name + " " + last_name
    end

    def premium_member?
      name == "Gab"
    end
end

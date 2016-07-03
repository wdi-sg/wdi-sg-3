class RemoveCheeseFromPizzas < ActiveRecord::Migration[5.0]
  def change
    remove_column :pizzas, :cheese, :boolean
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Customer.destroy_all

# add new customer with add
customer = Customer.new({
  name: "Jon",
  address: "1 KS Rd, b",
  email: "jon@gmail.com"  })

customer.save!
# add new customer with create
Customer.create!({
    name: "Gab",
    address: "1 KS Rd, b",
    email: "gab@gmail.com" })

puts "DB Seeded!"

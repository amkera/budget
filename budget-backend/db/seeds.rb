# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Or, can do something like users_array.each {|userHash| User.create(userHash)}
User.create(name: 'Dean Winchester')
Expense.create(user_id: 1, name: "Rent", amount: 0)

User.create(name: 'Sam Winchester')
Expense.create(user_id: 2, name: "Meal Delivery Subscription", amount: 300)

User.create(name: 'Ruby the Demon')
Expense.create(user_id: 3, name: "Traveling from Hell", amount: 0)

User.create(name: 'Crowley')
Expense.create(user_id: 4, name: "Hell Payroll", amount: 10000)

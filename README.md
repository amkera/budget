README
Description
Budget App is an app with a Javascript frontend and Ruby on Rails API backend to track a user's expenses.

Installation Instructions
Fork and clone the repo to your local machine.

Change directory into budget-backend and run:

$bundle install

Setting up the database:

rake db:create
rake db:migrate
rake db:seed
Start up the rails server:

rails s

Navigate to budget-frontend

Open the index.html file in a browser (preferably Google Chrome) by typing
$open index.html

Usage
Click on Add New User to add a user to the app.
Click on Create Expense to create an expense for the user.
Click on Delete Expense to remove the event.

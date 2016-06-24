# Project 2a: Mini-blogging platform

Build a Mini-blogging CRUD app in Rails.

There's lots of opportunity for you to then turn this into twitter, feedback, medium etc.

### Required features to pass the tests
##### Session with bcrypt & has_secure_password
[ ] sign in    
[ ] sign up    
[ ] user model validations (email uniqueness, email validity, password length)    
[ ] sign out    

##### Blogs scoped to a user
[ ] create    
[ ] index    
[ ] show    
[ ] update   
[ ] delete    

##### Public
[ ] home: show everyone's posts sorted reverse chronological order    
[ ] view any user's posts    

### Instructions
0. Replace the spec folder that rails generated for you with the spec folder in this repo
0. To your Gemfile:, delete the existing `group :development, :test do` chunk and add this:

  ```
  group :development, :test do
    # Call 'byebug' anywhere in the code to stop execution and get a debugger console
    gem 'byebug', platform: :mri
    gem "rspec-rails", "3.5.0.beta4"
  end

  group :test do
    gem 'capybara'
    gem 'shoulda-matchers', '~> 3.1'
    gem 'selenium-webdriver'
    gem 'database_cleaner'
  end
  ```
0. run `bundle install`



### How to run tests
in terminal, run `rspec spec`

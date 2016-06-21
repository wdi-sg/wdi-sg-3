# Part 1 - Building a Rails app with relationships

## Exercise

#### Requirements

- Create a Rails app
- Create a model `Recipe` that has these attributes:
	- name (string)
	- instructions (text)
	- servings (integer)
- Create a model `Course` with one attribute: `name` as a string
- Link `Recipe` and `Course` so that a Course has many recipes and a Recipe belongs to a Course
- Be sure to create the RESTful controller actions and the corresponding routes
- Test if the associations work in the console - instead of typing ```tux``` from the command line, use `rails c` for a Rails app
- Finally, set up the appropriate views

**Bonus:**

- Create a model `Ingredient` with a has_and_belongs_to_many relation between Recipe and Ingredient
- Give the option to add Ingredients to Recipes in the views

#### Deliverable

If you include the bonus, and add a few ingredients and courses, your `recipes/new` endpoint should look like this:

<p align="center">
<img src="http://s10.postimg.org/ifjhdgi6x/Screen_Shot_2015_07_18_at_8_53_11_PM.png">
</p>

## Additional Resources

- [ActiveRecord docs](http://guides.rubyonrails.org/association_basics.html)

# Part 2 - Relationships with Multiple Controllers

For part two of our Cookbook app, we're going to set up our app to allow users to perform CRUD operations on recipes, courses, and ingredients from a web interface.  Create the controllers with RESTful resources as well as the corresponding views, so users can CRUD.


## Exercise

#### Requirements

- Create recipes, courses, and ingredients controllers, each with seven RESTful routes and the appropriate functionality. Specifically:

  - The edit, show, index, and new actions should render the corresponding views
  - The update, post, and destroy actions should redirect appropriately
  - Look to your Tunr application for inspiration

- Create an edit, index, new, and a show page for each of the models you created in the previous section.
- Your navigation should include a link to all of the index pages as well as the `/new` actions for each model
- Your index page should allow a user to delete each record
- Your show page should link to the edit page

**Bonus**: Make your Cookbook pretty!

#### Starter code

Grab the [starter-code](starter-code) to get started.

#### Deliverable

From a functionality standpoint, your `recipes/new` page should look like this, if you don't “prettify” it:

<p align="center">
  <img src="http://s29.postimg.org/szn16lg1j/Screen_Shot_2015_07_17_at_5_31_25_PM.png">
</p>

## Additional Resources

- A link to the official [associations docs](http://guides.rubyonrails.org/association_basics.html)

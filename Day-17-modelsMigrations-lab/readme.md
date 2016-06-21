# Models and migrations

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Make a new rails App for a Record Label to keep track of their Managers, songs and artists.

## Exercise

#### Requirements

- Create a Manager Model

  - For this Model, create a table in your database and the corresponding forms that collect and display information about the manager's name, email, and office number.

- Create a Song Model

  - For this Model, create a table in your database and the corresponding forms that collect and display information about the song title, duration, year of release, and album title.

- Then:

  - Add a phone_number column to the managers table as an integer
  - Change the phone_number column to a string
  - Add a downloads column to the songs table
  - Rename the phone_number column to cell_phone_number in the managers table
  - Remove the downloads column from the songs table
  - Add a column to the songs table called artist_last_name

- Finally, to make sure all is working well, add one artist, manager, and song using the information below:

  - **Artist**:  

    - Name: Kevin Rox
    - Photo URL: "http://png.clipart.me/graphics/thumbs/144/anime-manga-rock-star-guitar-player_144647441.jpg"
    - Nationality: Italian
    - Instrument: Guitar, Home Address: 100 Rocks Lane

  - **Manager**:  

    - Name: Ricky Bobby
    - Email: rbobby@gmail.com
    - Office Number: 516-877-0304  
    - Cell Phone Number: 718-989-1231

  - **Song**:  

    - Title: The Best Song Ever
    - Duration: 3:31
    - Date of Release: 7/13/2015
    - Album Title: Best Album Ever
    - Artist Last Name: Rox

#### Deliverable

A whole bunch of migrations

## Additional Resources

- [ActiveRecord Official Docs](http://edgeguides.rubyonrails.org/active_record_migrations.html)

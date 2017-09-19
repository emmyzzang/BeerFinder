# BeerExplorer

Beer Explorer is a beer finder application utilizing NodeJS, an Express Web Server & Router, Sequelize ORM, MySQL, and deployed using Heroku. 

The full list of technologies are as follows:

* Axios
* Bcrypt-nodejs
* Body-parser
* BreweryDB API
* Brewerydb-node
* Browserify
* Chai
* CSS3
* Dotenv
* ExpressJS
* Font Awesome
* Heroku
* HTML5
* Karma
* Mocha
* MySQL
* NodeJS
* Passport
* Sequelize
* Sinon
* Supertest
* W3 Schools
* Watchify


USER LOGIN

![](misc_extras/bf1.png)

Beer Explorer is wrapped -- from every REST endpoint in the UI to the DB -- in a secure user authentication provided by the NodeJS packages, BCrypt and Passport. User is prompted to sign up if they cannot sign-in. 

![](misc_extras/bf2.png)

As the dashboard demonstrates, Beer Explorer allows user to search for beer in both a catalogue and a randomized wheel. User can also create reviews on beer, as well as reference, revise, and delete previous beer ratings.

![](misc_extras/bf3.png)

The following features are included.

I.  CATALOGUE

On pageload, a dropdown list appears and forces user input. 

![](misc_extras/bf4.png)

The user selects from a list of popular beer types and submits their selection. 

![](misc_extras/bf5.png)

After receiving response from the BreweryDB API, the user sees an appended list of buttons with brewery name and beer name on them. Each button is given a unique ID that corresponds with its ID in the BreweryDB API. 

![](misc_extras/bf6.png)

On the click of the button, another call is made to the db, with the search parameter being that unique ID. The response is shown in a modal, and the user sees an image for the brewery that makes the beer, as well as a description of the beer. 

![](misc_extras/bf7.png)


II. FEELING LUCKY

On pageload, a colorful wheel appears with a different popular beer types in each of the 8 different fractions of the wheel. On the left side of the wheel, a button allows the user to hit "SPIN" for the wheel. 

![](misc_extras/bf8.png)

Once the wheel stops, there is an alert that suggests a beer type for a user to input into the catalogue.

![](misc_extras/bf9.png)


III. REVIEWS

On pageload, a form appears asking the user to input 7 different parameters:

* Beer Name
* Type
* Clarity
* Hue
* International Bitterness Units
* Bubble Size
* Head

![](misc_extras/bf10.png)

The 8th parameter is the user_rating.

![](misc_extras/bf11.png)

Both of these parameter groups write into the same database, beer_db, however, they write to separate parts of the db. Params 1-7 write to the Beers table whereas the user_rating writes to the Ratings table.

The user is forced to fill out all the parameter fields. On submit, both the beer info and the user rating populate to the List page, and are stored in the MySQL join table, Ratings.


IV. LIST

On pageload, the List has the full CRUD capabilities for user to: Create, Read, Update, and Delete their own beer ratings.

![](misc_extras/bf12.png)

This list is permanently stored to the mysql db for each individual user until the user decides to do a CRUD action to the data.

![](misc_extras/bf13.png)


User may select to logout.

![](misc_extras/bf14.png)



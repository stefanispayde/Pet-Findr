# Pet-Findr
MEAN stack app utilizing 3rd party API

OVERVIEW: This app was originally a group project. It is a full MEAN stack utilizing API from Pet-Finder, an organization that has databases of adoptable animals and their the shelters that house them. We loved the idea of being able to search by zipcode and several different filters to find the perfect pet for the user and their family.

USER STORIES: A user can go to the home page and accress the databases, even before commiting to registering and creating a profile. The user simply uses the search form by inputting their area's zipcode and type of animal. Further optional filters include, breed and gender. Once the user clicks submit, a list of available animals up for adoption are listed along with their picture (if applicable),and a mini bio so the user can see and get to know them. If there is one that the user is particularly interested in, they can click the heart glyphicon next to their choice. This essentially creates their "wishlist," and is saved on the users showpage, accessed simply by clicking their user name above.  Another option available on the home page is a search by zipcode for the closest participating shelters and their contact information. A user can also click on other registered members profiles in a READ ONLY status to see what their wishlists contain. The user, once signed in, can edit or delete their profile as well.

FEATURES: Use Mongo DB for storing data. Gave the backend functionality by using Node.js and Express.js as server side web app framework and Angular for the front end. App has three models; Members, Pets, and Sessions, used for user authorization. EJS was used as a templating engine. The app relies on RESTful routing to render and redirect user to specific pages. 

APP WISHLIST: Due to this being a group project, we were each responsible for building certain parts of the app and had a very short timeline in which to do so. With this being said, there are components I would have liked to incorporate, and will continue to work on. There are some kinks in the app as it is that need to be fixed. The app was created to allow those who visit the site to utilize the search function even if they are not registered users. They can access the search by zipcode and search for shelters directly from the homepage. This is in hopes that once they see the available animals and become more interested, they will register with the site and create a profile. The developer that wrote this code added the ability to create a wishlist by clicking the glyphicon next to the pet of users choice. As of now the code breaks if a user is not signed in with a user id and password. Currently there is a disclaimer asking that you do not click the heart glyphicon unless you are signed in. I am still researching why this happenes in hopes of fixing it quickly. One of the routes is also not particularly user friendly, and there is issues with getting to the members showpage after logging in. In addition to these small flaws, I will add google maps to the app so the user can drop a pin once they locate a shelter they would like to visit. 

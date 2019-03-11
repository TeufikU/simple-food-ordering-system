# Simple Food Ordering System
This is web app that is made by using React.
With this app You can register new user, logg in existing user, to add new restaurants to database and to make orders and delete them at any time.
On page load It automatically loads every restauraunt that have any orders.
Every logged in user can make his own food order, and can't delete other people orders.

## What components have been used in this project?
* Landing page (Where there are buttons that leads to Log in and Register pages
* Log in
* Register
* Dashboard (Dashboard has other components integrated in):
  1. Navbar
  2. Add new restaurants (Component for adding new restaurants to the list and DB)
  3. Restaurants list (positioned on left sidebar)
  4. Restaurants panels (Where we can order new foods)
  5. Must be logged in (Checking if user is actually logged in)
  6. Global Message (this stands for a message bar that prompts every time if user type in bad values to inputs)
  
## What have been used to build this?
For this we have been using a MongoDB, express, axios, jwt-decode, and material ui as well as our personal CSS

## What more can be done in the future?
* Make this more responsive and adaptable to mobile phones
* Add more icons instead of texts in some parts of this app
* Make autocomplete inputs
* Maybe add the ability of real time tracking data

# Here's some screenshots of working page

![Landing Page](https://raw.githubusercontent.com/TeufikU/simple-food-ordering-system/master/ScreenShots/Screenshot_61.png)
![Log in Page](https://raw.githubusercontent.com/TeufikU/simple-food-ordering-system/master/ScreenShots/Screenshot_63.png)
![Register Page](https://raw.githubusercontent.com/TeufikU/simple-food-ordering-system/master/ScreenShots/Screenshot_62.png)
![Dashboard Page](https://raw.githubusercontent.com/TeufikU/simple-food-ordering-system/master/ScreenShots/Screenshot_59.png)
![New Restaurant Page](https://raw.githubusercontent.com/TeufikU/simple-food-ordering-system/master/ScreenShots/Screenshot_60.png)
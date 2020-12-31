# What's in our Fridge? A Recipe Cook Book

**Author**: Alan Hung, Nick Abramowicz, Seid Mohamed, Wondwosen Tsige
**Version**: 1.0.0

## Overview
This program is a basic full-stack application that allows you to search for Food Recipes based on ingredients and/or food names.  The app will let users personalize a cook book by allowing them to save recipes to their accounts, modify recipes, and share recipes for ratings if they so choose.

## Getting Started
  1. [Clone Github Repository](https://github.com/AlanYHung/Recipe_Book)
  1. Navigate to Recipe Book Directory in git terminal
  1. npm install (install dependencies)
  1. start PG SQL (pg_ctl -D /home/linuxbrew/.linuxbrew/var/postgres start)
  1. create a recipe book database in PG SQL (CREATE DATABASE \<name\>)
  1. run schema.sql (psql -f schema.sql -d \<database name\>)
  1. enter VS Code (code .) or if not using vs code through your own commands
  1. create .env <br>
    - PORT=3004 <br>
    - [Get spoonacular API Key](https://spoonacular.com/food-api/pricing) <br>
    - DATABASE_URL=...user_recipes
  1. in terminal start nodemon
  1. http://localhost:3004

## Architecture
CSS Stylesheets for the front end display pages rendered by ejs. Back end server to make api calls and run the entire application.  Javascript and JQuery to add additional functionality.

## Change Log
* Server Initial Setup Completed (12/26/20 Driver:WT Nav:SM Nav:AYH)
* SQL Database Setup (12/26/20 D:SM Nav:WT)
* Header Partial Setup - h1 tag and nav tag id attribute (12/26/20 AYH)
* Header Partial CSS setup (12/26/20 AYH)
* Login Page with Animated Refridgerator designed (12/26/20 AYH)
* Search Page Setup and Styling (12/26/20 D:WT Nav:AYH)
* Login Page Styled Background - Animated Gif + Kitchen Tile (12/27/20 AYH)
* Navigation Bar CSS styling (12/27/20 AYH)
* User Login and Logout functionality (12/27/20 D:SM Nav:AYH)
* Dish API Search and Object Storage (12/27/20 SM)
* Ingredients API Search and Object Storage (WIP) (12/27/20 D:SM Nav:WT)
* Added Drop Down to search page to select searching method (12/27/20 AYH)
* Added and Styled Dish Search Form (12/27/20 AYH)
* Added and Styled Ingredient Search Form (12/27/20 AYH)
* Added Ingredients Object Constructor (12/27/20 D:NA Nav:SM Nav:AYH)
* Ingredients Object API Pull (12/27/20 D:NA Nav:SM Nav:AYH)
* Results Page Designed HTML/CSS (12/27/20 AYH)
* Results List Partial Added (12/27/20 AYH)
* Successfully attached search forms to server (12/27/20 D:NA Nav:AYH,SM,WT)
* Completed retrieved data and completed objects (12/27/20 D:NA Nav:AYH,SM,WT)
* Search Forms Front End attached to Server Backend (12/28/20 D:NA Nav:AYH,WT,SM)
* Details Page Server Backend Functionality (12/28/20 D:AYH Nav:SM)
* Details Page Front-end Functionality (12/29/20 AYH)
* About US Page Design and Style (12/29/20 D:NA Nav:SM,WT)
* CSS Redesign of Login and Search Page (12/29/20 D:NA Nav:AYH)
* Save Recipe and Favorites Page (12/30/20 D:WT Nav:AYH)
* About Us Page retouch up (12/30/20 D:NA Nav:Seid)

## Postgress SQL Database
### Database Name: recipe_book
  1. __Table Name:__ user_recipes <br>
    * __Purpose:__ Store user favorite recipes <br>
    * __Column Names:__
      1. user - stores user_name
      1. recipe_id - spoonacular API recipe id
      1. title - recipe name
      1. image - dish image
      1. cooking_time - how long dish takes to prepare and cook
      1. servings - how many servings recipe makes
      1. ingredients - ingredients needed for making dish
      1. instructions - cooking instructions

## Resources
  * [Recipe Book Domain Model](./images/Recipe_Book_Domain.PNG)
  * [Recipe Book Wireframe](./images/Wireframe.PNG)
  * [w3schools.com](https://www.w3schools.com/)
  * [GIPHY](https://giphy.com/)
  * [Refrigerator Picture from vectorstock.com](https://www.vectorstock.com/)

### Features
#### Template
  * Estimate of time needed to complete: <u></u>
  * Start Date: <u></u>
  * Start time: <u></u>
  * Finish Date: <u></u>
  * Finish time: <u></u>
  * Actual time needed to complete: <u></u>

#### Server Setup
  * Estimate of time needed to complete: <u>30 Min</u>
  * Start Date: <u>12/26/20</u>
  * Start time: <u>10:00 am</u>
  * Finish Date: <u>12/26/20</u>
  * Finish time: <u>11:00 am</u>
  * Actual time needed to complete: <u>1 Hour</u>

#### Header Partial - h1 and nav tag id
  * Estimate of time needed to complete: <u>10 min</u>
  * Start Date: <u>12/26/20</u>
  * Start time: <u>10:00 am</u>
  * Finish Date: <u>12/26/20</u>
  * Finish time: <u>10:10 am</u>
  * Actual time needed to complete: <u>10 minutes</u>

#### Login Page with Animated Fridge
  * Estimate of time needed to complete: <u>1 Hour</u>
  * Start Date: <u>12/26/20</u>
  * Start time: <u>10:10 am</u>
  * Finish Date: <u>12/26/20</u>
  * Finish time: <u>2:45 pm</u>
  * Actual time needed to complete: <u>4 hours 35 minutes</u>

#### User Login/Logout Functionality - Server
  * Estimate of time needed to complete: <u>30 Minutes</u>
  * Start Date: <u>12/27/20</u>
  * Start time: <u>11:00 am</u>
  * Finish Date: <u>12/27/20</u>
  * Finish time: <u>11:44 pm</u>
  * Actual time needed to complete: <u>44 minutes</u>

#### API Search Functionality - Server
  * Estimate of time needed to complete: <u>2 Hours</u>
  * Start Date: <u>12/27/20</u>
  * Start time: <u>11:45 am</u>
  * Lunch stop: <u>1:33 pm</u>
  * Work Continuation: <u>2:45pm</u>
  * Day End: <u>3:30 pm</u>
  * Start time: <u>9:00 am</u>
  * Lunch Break: <u>12:00 pm </u>
  * Finish Date: <u>12/28/20</u>
  * Finish time: <u>12:00 pm</u>
  * Actual time needed to complete: <u>1 Day</u>

#### API Search Functionality - Frontend
  * Estimate of time needed to complete: <u>2 Hours</u>
  * Start Date: <u>12/27/20</u>
  * Start time: <u>11:00 am</u>
  * Finish Date: <u>12/27/20</u>
  * Finish time: <u>6:11 pm</u>
  * Actual time needed to complete: <u>7 Hours</u>

#### Results Page Design
  * Estimate of time needed to complete: <u>1 Hours</u>
  * Start Date: <u>12/27/20</u>
  * Start time: <u>1:00 pm</u>
  * Finish Date: <u>12/27/20</u>
  * Finish time: <u>2:07 pm</u>
  * Actual time needed to complete: <u>1 Hour 7 Min</u>

#### Heroku Deployment + Domain Name
  * Estimate of time needed to complete: <u>1 Hour</u>
  * Start Date: <u>12/27/20</u>
  * Start time: <u>10:00 am</u>
  * Finish Date: <u>12/27/20</u>
  * Finish time: <u>3:30 pm</u>
  * Actual time needed to complete: <u>5 Hours 30 Min</u>

#### About Us Page
  * Estimate of time needed to complete: <u>4 Hours</u>
  * Start Date: <u>12/27/20</u>
  * Start time: <u>10:00 am</u>
  * Finish Date: <u>12/30/20</u>
  * Finish time: <u>4:00 pm</u>
  * Actual time needed to complete: <u>3 days</u>

#### Details Page Server + Front End
  * Estimate of time needed to complete: <u>4 Hours</u>
  * Start Date: <u>12/29/20</u>
  * Start time: <u>9:00 am</u>
  * Finish Date: <u>12/29/20</u>
  * Finish time: <u>2:00 pm</u>
  * Actual time needed to complete: <u>5 Hours</u>

#### Favorites Page Server + Front End
  * Estimate of time needed to complete: <u>3 Hours</u>
  * Start Date: <u>12/30/20</u>
  * Start time: <u>9:00 am</u>
  * Finish Date: <u>12/30/20</u>
  * Finish time: <u>1:37 pm</u>
  * Actual time needed to complete: <u>4 Hours 37 Minutes</u>


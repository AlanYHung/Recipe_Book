# What's in our Fridge? A Recipe Cook Book

**Author**: Alan Hung, Nick Abramowicz, Seid Mohamed, Wondwosen Tsige
**Version**: 0.4.7

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
  * Start time: <u>11:45 pm</u>
  * Lunch stop: <u>1:33 pm</u>
  * Work Continuation: <u>2:45pm</u>
  * Day End: <u>3:30 pm</u>
  * Finish Date: <u></u>
  * Finish time: <u></u>
  * Actual time needed to complete: <u></u>

#### API Search Functionality - Frontend
  * Estimate of time needed to complete: <u>2 Hours</u>
  * Start Date: <u>12/27/20</u>
  * Start time: <u>11:00 am</u>
  * Finish Date: <u>12/27/20</u>
  * Finish time: <u>6:11 pm</u>
  * Actual time needed to complete: <u>7 Hours</u>

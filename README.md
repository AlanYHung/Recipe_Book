# What's in our Fridge? A Recipe Cook Book

**Author**: Alan Hung, Nick Abramowicz, Seid Mohamed, Wondwosen Tsige
**Version**: 0.0.0

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

### Features
#### Server Setup
  * Estimate of time needed to complete: <u></u>
  * Start time: <u></u>
  * Finish time: <u></u>
  * Actual time needed to complete: <u></u>

#### Header Partial
  * Estimate of time needed to complete: <u></u>
  * Start time: <u></u>
  * Finish time: <u></u>
  * Actual time needed to complete: <u></u>

#### Navigation Partial
  * Estimate of time needed to complete: <u></u>
  * Start time: <u></u>
  * Finish time: <u></u>
  * Actual time needed to complete: <u></u>

#### Footer Partial
  * Estimate of time needed to complete: <u></u>
  * Start time: <u></u>
  * Finish time: <u></u>
  * Actual time needed to complete: <u></u>


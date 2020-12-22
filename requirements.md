
# Recipe Book

## Summary of Idea:  
We want to create an App that allows a user to search for recipes by ingredients and/or food name, save it, and edit it.

## Problem Pain Point
The primary pain point is that there are not many recipe book apps out there that allow users to save and/or modify their recipes at this time.

## Scope
### IN
* Search for Recipes
* Save Recipes
* Edit Recipes
* User Tracking

### OUT
* No Passwords
* Search Using Selectable Pictures

## Product Description
Recipe Book is the app that you've been waiting for.  Cooks from all over the world can look up recipes, edit them, and save them in their own personal cookbook all in one place.

## MVP
The MVP would be a form that can take in user search criteria, and use it to query the Recipe Puppy API.  The app will then return a list of recipes which you can save and edit the recipes.

## Stretch Goals
* Share Recipes
* User Recipe Ratings
* SQL Database Normalization
* Force User to Login if saving without logging in

## Functional Requirements
* User Name needs to be entered
* Needs to have a working Search Form
* User needs to be able to Save Recipe
* User can retrieve Saved Recipes
* User can Edit Saved Recipes

## Data Flow
The user will arrive on the home page.  User needs to enter in their user id.  User will be taken to their personal Saved Recipe page.  We will seed 2 default starting recipes into their Saved Database.  User can then go and choose to search for new recipes, edit recipes, or remove recipes at their leisure.
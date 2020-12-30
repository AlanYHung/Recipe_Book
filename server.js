'use strict';




////// ---- Server dependency setup -------////

const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const cors = require('cors');
require('dotenv').config();

///// ----- Server constant variables ----- ////

const PORT = process.env.PORT  || 9999;
const DATABASE_URL = process.env.DATABASE_URL;
const RECIPE_API_KEY = process.env.RECIPE_API_KEY;

///// ----- global variable ------ //////

var userName = '';

///// ---- Dependency variables setup ----- ////
const client = new pg.Client(DATABASE_URL);

const app = express();


//// ----  ejs setup ----- /////

app.set('view engine', 'ejs');
app.use(express.static("./public"));


///// ---- Middleware setup ---- ////
app.use(express.urlencoded({extended: true}));
app.use(cors());




//// ---- Server startup ---- ////


client.connect().then(() => {
  app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`)
  })
}).catch(error => console.error(error));


///// ---- Server routes ---- /////

app.get('/', getLoginPage);
app.get('/search', getSearch);
app.get('/recipes', getRecipe);
app.get('/about-us', getTeamInfo);
app.post('/login', loginInfo);
app.post('/details', getRecipeDetails);
app.post('/save-recipe', storeRecipe);

//// ---- Object constructors ----- ////

function RecipeObject(jsonObject, imageURL, ingredientsList){
  this.user_id = userName;
  this.recipe_id = jsonObject.id;
  this.title = jsonObject.title; 
  this.image = imageURL;
  this.cooking_time = jsonObject.readyInMinutes;
  this.servings = jsonObject.servings;
  this.ingredients = ingredientsList;
  this.instructions = jsonObject.instructions.split('\n');
  this.summary = jsonObject.summary;
}

function DishObject(data){
  this.id = data.id;
  this.title = data.title;
  this.image = data.image
}

function IngredientObj(data, missedIngredients, usedIngredients){
  this.id = data.id;
  this.title = data.title;
  this.image = data.image;
  this.missedIngredients = missedIngredients;
  this.usedIngredients = usedIngredients;
}


//// ----- callback functions ----- //////

function getLoginPage(request, response){
  userName = '';
  response.render('login.ejs');
}

function loginInfo(request, response){  
  userName = request.body.user_login_id.toLowerCase();
  console.log(userName);
  response.redirect('/search');
}

function getSearch(request, response){
  response.render('search.ejs');
}

function getTeamInfo(request, response){
  response.render('aboutus.ejs');
}

// This Function Gets and Renders a specific Recipe Detail
function getRecipeDetails(request, response){
  const recipeID = request.body.id;
  const recipeImg = request.body.image
  const url = `https://api.spoonacular.com/recipes/${recipeID}/information`
  console.log(recipeID);
  superagent.get(url)
    .query({
      apiKey: RECIPE_API_KEY
    })
    .then(incomingDetails =>{
      const detailsObj = incomingDetails.body;
      let ingredStrArr = detailsObj.extendedIngredients.map(ingredObj => ingredObj.original);
      let recipeDetail = new RecipeObject(detailsObj, recipeImg, ingredStrArr);
      console.log(recipeDetail);
      response.render('details.ejs', {recipeDetailObj: recipeDetail});
    })
    .catch(error => console.error(error));
}

// This Function Goes to the API and performs the user designated Dish/Ingredient Search
function getRecipe(request, response){
  const searchQuery = request.query.searchType;
 if(searchQuery==='dishsearch'){
    const url = 'https://api.spoonacular.com/recipes/complexSearch'
    superagent.get(url)
      .query({
        apiKey: RECIPE_API_KEY,
        query: request.query.query,
        number: 6,
        instructionsRequired: true
      })
      .then(incomingRecipe =>{
        const recipeObj = incomingRecipe.body.results;
        const recipeData = recipeObj.map(recipeToShow => new DishObject(recipeToShow));
        console.log(recipeData);
        response.render('./results.ejs', {dishObjArray: recipeData});
      })
      .catch(error => console.error(error));
  }
  else if(searchQuery==='ingredientsearch'){
    console.log('enter ingredient search');
    let numOfIngredients = request.query.numOfIngredients;
    let ingredientSearchStr = '';
    const url = 'https://api.spoonacular.com/recipes/findByIngredients'

    for (let i=1; i<=numOfIngredients; i++){
      let currentIngredientStr = request.query[`ingredient_${i}`];
      if (i<numOfIngredients){
        ingredientSearchStr+=`${currentIngredientStr},`;
      }else {
        ingredientSearchStr+=currentIngredientStr;
      }
    }
      superagent.get(url)
      .query({
        apiKey: RECIPE_API_KEY,
        ingredients: ingredientSearchStr,
        number: 6
      })
      .then(incomingIngredients =>{
        const ingredientsObj = incomingIngredients.body;
        const ingredientsResults = ingredientsObj.map(ingredientsResultsObj => {
          let missed = [];
          let used = [];
          missed = ingredientsResultsObj.missedIngredients.map(missedIngredientsObj => missedIngredientsObj.name);
          used = ingredientsResultsObj.usedIngredients.map(usedIngredientsObj => usedIngredientsObj.name);
          return new IngredientObj(ingredientsResultsObj, missed, used);
        });
        console.log(ingredientsResults);
        response.render('./results.ejs', {dishObjArray: ingredientsResults});
      })
      .catch(error => console.error(error));
  }
  else{
    // Do nothing
  }
}

// This Function saves user favorite recipes
function storeRecipe(request, response){
  console.log("body ", request.body);
  saveRecipeSQL(request.body).then(results => {
    response.redirect('/search');
  }).catch(error => console.error(error));
}

//// ---- SQL query functions ----/////

function saveRecipeSQL(saveFavoriteRecipeObj){
  const sqlSaveQuery = "INSERT INTO user_recipes (user_id, recipe_id, title, image, cooking_time, servings, ingredients, instructions) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
  let ingredientList = [];
  let instructionList = [];
  let sqlValues = [];

  for(let i = 0; i<saveFavoriteRecipeObj.numOfIngred; i++){
    ingredientList.push(saveFavoriteRecipeObj[`ingred_${i}`]);
  }

  for(let i = 0; i<saveFavoriteRecipeObj.numOfInstructions; i++){
    instructionList.push(saveFavoriteRecipeObj[`instr_${i}`]);
  }
  
  sqlValues = [userName, saveFavoriteRecipeObj.recipe_id, saveFavoriteRecipeObj.title, saveFavoriteRecipeObj.image, saveFavoriteRecipeObj.cooking_time, saveFavoriteRecipeObj.servings, ingredientList, instructionList];
  return client.query(sqlSaveQuery, sqlValues);
}

//// ---- Error catching - server ---- ////


client.on('error', error => console.error(error));
app.use('*', (request, response)=>{
  response.status(404).send('Sorry something went wrong')
})



































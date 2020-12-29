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
app.post('/login', loginInfo);
app.get('/about-us', getTeamInfo);
app.get('/details', getRecipeDetails);



//// ---- Object constructors ----- ////

// function RecipeObject(){
//   this.user_id =
//   this.recipe_id =
//   this.title =
//   this.image =
//   this.cooking_time =
//   this.servings =
//   this.ingredients =
//   this.instructions =
// }

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

function getTeamInfo(request, response){
  response.render('about-us.ejs');
}

function loginInfo(request, response){  
  userName = request.body.user_login_id.toLowerCase();
  response.redirect('/search');
}

function getSearch(request, response){
  response.render('search.ejs');
}

function getRecipeDetails(request, response){
  const url = 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false'
  superagent.get(url)
       .query({
        apiKey: RECIPE_API_KEY,
       })
       .then(incomingDetails =>{
         const detailsObj = incomingDetails.body;
         console.log(detailsObj);
       })
}
 
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
          console.log(missed);
          console.log('used', used);
          return new IngredientObj(ingredientsResultsObj, missed, used);
        });
        
        response.render('./results.ejs', {dishObjArray: ingredientsResults});
      })
      .catch(error => console.error(error));
  }
  else{
    // Do nothing
  }
}

function getResults(request, response){
  response.render('results.ejs');
}

//// ---- SQL query functions ----/////


//// ---- Error catching - server ---- ////


client.on('error', error => console.error(error));
app.use('*', (request, response)=>{
  response.status(404).send('Sorry something went wrong')
})



































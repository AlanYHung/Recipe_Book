'use strict';




////// ---- Server dependency setup -------////

const express = require('express');
const superagent = require('superagent');
const pg =require('pg');
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
app.get('/search', getSearchResults);
app.get('/recipes', getRecipe);
app.post('/login', loginInfo);



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

function getSearchResults(request, response){
  response.render('search.ejs');
}
 
function loginInfo(request, response){  
  userName = request.body.user_login_id.toLowerCase();
  response.redirect('/search');
}

function getRecipe(request, response){
  let switching = false;

  if(switching){
    const url = 'https://api.spoonacular.com/recipes/complexSearch'
    superagent.get(url)
      .query({
        apiKey: RECIPE_API_KEY,
        query: 'omelette'
      })
      .then(incomingRecipe =>{
        const recipeObj = incomingRecipe.body.results;
        const recipeData = recipeObj.map(recipeToShow => new DishObject(recipeToShow));
        console.log(recipeData);
      })
      .catch(error => console.error(error));
  }
  else{
    const missed = [];
    const url = 'https://api.spoonacular.com/recipes/findByIngredients'
    superagent.get(url)
      .query({
        apiKey: RECIPE_API_KEY,
        ingredients: 'apples,sugar,flour' 
      })
      .then(incomingIngredients =>{
        const ingredientsObj = incomingIngredients.body;
        const ingredientsResults = ingredientsObj.map(ingredientsResultsObj => new IngredientObj(ingredientsResultsObj));
        console.log(ingredientsResults);
        
      })
      .catch(error => console.error(error));
  }
  
}

//// ---- SQL query functions ----/////

//// ---- Error catching - server ---- ////


client.on('error', error => console.error(error));
app.use('*', (request, response)=>{
  response.status(404).send('Sorry something went wrong')
})



































'use strict';




////// ---- Server dependency setup -------////

const express = require('express');
const superagent = require('superagent');
const pg =require('pg');
require('dotenv').config();

///// ----- Server constant variables ----- ////

const PORT = process.env.PORT  || 9999;
const DATABASE_URL = process.env.DATABASE_URL;
const RECIPE_API_KEY = process.env.RECIPE_API_KEY;


///// ---- Dependency variables setup ----- ////
const client = new pg.Client(DATABASE_URL);

const app = express();


//// ----  ejs setup ----- /////

app.set('view engine', 'ejs');
app.use(express.static("./public"));


///// ---- Middleware setup ---- ////


// const cors = require('cors');
// app.use(cors());


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


// callback functions

function getLoginPage(request, response){
  response.render('login.ejs');
}

function getSearchResults(request, response){
  response.render('search.ejs');
}


function getRecipe(request, response){
  const query = request.query;
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${RECIPE_API_KEY}`
  superagent.get(url).then(incomingRecipe =>{
    
  })
}

//// ---- SQL query functions ----/////

//// ---- Error catching - server ---- ////


client.on('error', error => console.error(error));
app.use('*', (request, response)=>{
  response.status(404).send('Sorry something went wrong')
})



































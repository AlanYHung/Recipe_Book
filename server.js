'use strict';

// Server dependency setup

const express = require('express');
const superagent = require('superagent');
require('dotenv').config();

// Server constant variables

const PORT = process.env.PORT  || 9999;

// Dependency variables setup

const app = express();

//ejs setup

app.set('view engine', 'ejs');
app.use(express.static("./public"));

// Middleware setup
// const cors = require('cors');
// app.use(cors());


// Server startup

app.listen(PORT, ()=>{
  console.log(`App is listening at ${PORT}`)
})

// Server routes

app.get('/', getLoginPage);

// Object constructors

// callback functions

function getLoginPage(request, response){
  response.render('login.ejs');
}

// SQL query functions

// Error catching - server

app.use('*', (request, response)=>{
  response.status(404).send('Sorry something went wrong')
})

// error catching - routes

//const pg =require('pg');
//app.use(express.urlencoded({extended: true}));



























// Object Constructor

// function RecipeObject(){
//   this.user =
//   this.recipe_id =
//   this.title =
//   this.image =
//   this.cooking_time =
//   this.servings =
//   this.ingredients =
//   this.instructions =
// }
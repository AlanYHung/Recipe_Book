'use strict';

/* ======================================================================= */
/* ====================== Drop Down Event Listener ======================= */
/* ======================================================================= */

const $dropdownElement = $('#search_page_dropdown');
const $dishSearchForm = $('#search_form_dish');
const $ingredientsSearchForm = $('#search_form_ingredients');

$dropdownElement.on('change', changeForm);

function changeForm(chgFormEvent){
  if(String(chgFormEvent.target.value).toLowerCase() === 'dish'){
    $dishSearchForm.show();
    $ingredientsSearchForm.hide();
  }else{
    $dishSearchForm.hide();
    $ingredientsSearchForm.show();
  }
}

/* ======================================================================= */
/* ================== Ingredients Search Event Listener ================== */
/* ======================================================================= */

const $addIngredients = $('#add_ingredients_button');
const $removeIngredients = $('#remove_ingredients_button');
const $ingredientSearchForm = $('#search_form_ingredients');
let numOfIngred = 1;

$addIngredients.on('click', addIngredInput);
$removeIngredients.on('click', removeIngredInput);

function addIngredInput(addIngredEvent){
  const $ingredientsFormButton = $('#ingredients_form_button');

  addIngredEvent.preventDefault();
  numOfIngred++;
  let newIngredSearch = `<div id="ingredient_div_${numOfIngred}" class="search_form_ingred_section">
                           <label id='ingredient_${numOfIngred}_label' class="ingredients_search_elements ingredients_search_label">Ingredient ${numOfIngred}:</label>
                           <input id="ingredient_${numOfIngred}" class="ingredients_search_elements ingredients_search_input" type="text" name="ingredient_${numOfIngred}">
                         </div>
                         
                         <button id="ingredients_form_button" class="ingredients_search_elements">Search For Recipes</button>`;
  $ingredientsFormButton.remove();
  $ingredientSearchForm.append(newIngredSearch);
}

function removeIngredInput(removeIngredEvent){
  removeIngredEvent.preventDefault();

  if(numOfIngred > 1){
    let $removeIngredDiv = $(`#ingredient_div_${numOfIngred}`);
    let $removeIngredLabel = $(`#ingredient_${numOfIngred}_label`);
    let $removeIngredInput = $(`#ingredient_${numOfIngred}`);
    $removeIngredDiv.remove();
    $removeIngredLabel.remove();
    $removeIngredInput.remove();
    numOfIngred--;
  }else{
    //do nothing
  }
}
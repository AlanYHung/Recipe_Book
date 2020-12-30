DROP TABLE IF EXISTS user_recipes;

CREATE TABLE user_recipes(
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255),
  recipe_id NUMERIC(9,0),
  title VARCHAR(255),
  image VARCHAR(255),
  cooking_time NUMERIC(3,0), /* readyInMinutes for API */
  servings NUMERIC(2,0),
  ingredients VARCHAR(500), /* extendedIngredients for API */
  instructions TEXT,
  summary TEXT
);
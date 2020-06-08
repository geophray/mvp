const pool = require('./config.js');

module.exports = {
  recipes: {
    getAllSavedRecipes(cb) {
      // retrieve all my saved recipes
      const text = 'SELECT * FROM recipes';
      pool.query(text, (err, res) => {
        cb(err, res);
      })
    },

    getRecipeById(id, cb) {
      const text = 'SELECT * FROM recipes WHERE id = $1';
      const values = [id];
      pool.query(text, values, (err, res) => {
        cb(err, res);
      })
    },

    addNewRecipe(recipe, cb) {
      // add a new recipe to the database
      const { name, thumbnail_url, description, backstory, instructions, ingredients } = recipe;
      const text = 'INSERT INTO recipes (name, thumbnail_url, description, backstory, instructions, ingredients) VALUES ($1, $2, $3, $4, $5, $6)';
      const values = [name, thumbnail_url, description, backstory, instructions, ingredients];
      pool.query(text, values, (err, res) => {
        cb(err, res);
      });
    },

    updateRecipe(id, updated, cb) {
      // Update a recipe by id.
      const { name, thumbnail_url, description, backstory, instructions, ingredients } = updated;
      const text = 'UPDATE recipes SET name = $1, thumbnail_url = $2, description = $3, backstory = $4, instructions = $5, ingredients = $6)';
      const values = [name, thumbnail_url, description, backstory, instructions, ingredients];
      pool.query(text, values, (err, res) => {
        cb(err, res);
      })
    },

    deleteRecipe(id, cb) {
      // Deletes a recipe by id
      const text = 'DELETE FROM recipes WHERE id = $1';
      const values = [id];
      pool.query(text, values, (err, res) => {
        cb(err, res);
      })
    },
  },
  users: {

  },
  reviews: {

  },
}
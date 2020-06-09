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

    checkIfRecipeInDb(recipe, cb) {
      const { external_id, name } = recipe;
      const text = 'SELECT * FROM recipes WHERE external_id = $1 AND name = $2';
      const values = [external_id, name];
      pool.query(text, values, (err, res) => {
        cb(err, res);
      })
    },

    addNewRecipe(recipe, cb) {
      console.log(recipe);
      // add a new recipe to the database
      const { name, thumbnail_url, description, backstory, instructions, components, external_id = null } = recipe;
      const text = 'INSERT INTO recipes (name, thumbnail_url, description, backstory, instructions, components, external_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
      const values = [name, thumbnail_url, description, backstory, instructions, components, external_id];
      pool.query(text, values, (err, res) => {
        cb(err, res);
      });
    },

    updateRecipe(id, updated, cb) {
      // Update a recipe by id.
      const { name, thumbnail_url, description, backstory, instructions, components } = updated;
      const text = 'UPDATE recipes SET name = $1, thumbnail_url = $2, description = $3, backstory = $4, instructions = $5, components = $6)';
      const values = [name, thumbnail_url, description, backstory, instructions, components];
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
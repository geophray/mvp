import React from 'react';
import axios from 'axios';

import RecipeList from './RecipeList.jsx';

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myRecipes: [],
    };

  };

  componentDidMount() {
    // Load my recipes from the database
    axios
      .get('/api/recipes')
      .then((results) => {
        this.setState({
          myRecipes: results.data.rows
        });
      })
      .catch((err) => {
        console.error('Could not retrieve recipes. Please try again later.');
      });
  };

  render() {
    const { viewRecipe } = this.props;
    const { myRecipes } = this.state;
    return (
      <div>
        <h2>My Recipe Book</h2>
        {myRecipes.length > 0 &&
          <RecipeList title="Saved Recipes" recipes={myRecipes} view={viewRecipe} />
        }
      </div>
    );
  };
};

export default MyRecipes;
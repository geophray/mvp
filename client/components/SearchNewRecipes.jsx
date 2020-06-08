import React from 'react';
import axios from 'axios';

import FindNewRecipesForm from './FindNewRecipesForm.jsx';
import RecipeList from './RecipeList.jsx';

import dummyData from '../dummyData.js';

const massagedData = dummyData.map(recipe => {
  return {
    id: recipe.id,
    name: recipe.name,
    thumbnail_url: recipe.thumbnail_url,
    description: recipe.description,
    backstory: 'This is the story about why you love this recipe that nobody cares about. Just skip to the recipe.',
    instructions: recipe.instructions,
    components: recipe.sections
  }
});

class SearchNewRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      qresults: massagedData,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleQuery(e) {
    e.preventDefault();
    axios
      .get(`/api/rapidapi/recipes/${this.state.q}`)
      .then((response) => {
        const data = response.data.body.results.map(recipe => {
          return {
            id: recipe.id,
            name: recipe.name,
            thumbnail_url: recipe.thumbnail_url,
            description: recipe.description,
            backstory: '',
            instructions: recipe.instructions,
            components: recipe.sections
          }
        });
        this.setState({
          qresults: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    const { qresults } = this.state;
    return (
      <div>
        <h2>Discover Something New!</h2>
        <FindNewRecipesForm handleQuery={this.handleQuery} handleChange={this.handleChange} value={this.state.q} />
        {qresults.length > 0 &&
          <RecipeList title="Search Results" recipes={this.state.qresults} />
        }
      </div>
    );
  }
}



export default SearchNewRecipes;
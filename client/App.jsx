import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import dummyData from './dummyData.js';

import FindNewRecipesForm from './components/FindNewRecipesForm.jsx';

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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      qresults: [],
      myrecipes: [],
    };
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
    this.state
    return (
      <FindNewRecipesForm handleQuery={this.handleQuery} handleChange={this.handleChange} value={this.state.q} />
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));

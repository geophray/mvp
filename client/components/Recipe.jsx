import React from 'react';
import axios from 'axios';

import Step from './Step.jsx';
import IngredientsList from './IngredientsList.jsx';

import styles from '../css/recipe.css';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false
    };
    this.addRecipe = this.addRecipe.bind(this);
  };

  addRecipe(recipe) {
    axios
      .post('/api/recipe', recipe)
      .then((response) => {
        this.setState({
          isSaved: response
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  checkSaved() {
    if (!this.state.isSaved) {

    }
  }

  componentDidMount() {

  }

  render() {
    const { recipe, close } = this.props;
    const { components, instructions } = recipe;
    var stepCounter = 0;
    const instructionSteps = instructions.map((instruction) => {
      stepCounter++;
      return <Step key={instruction.position} step={instruction} stepNum={stepCounter} />
    });
    const ingredientsList = components.map((component) => {
      return <IngredientsList key={component.position} component={component} />;
    });
    const addButton = this.state.isSaved ? <span className={styles['saved']}>Saved</span> : <span className={styles['unsaved']} onClick={() => this.addRecipe(recipe)}>Save</span>;
    return (
      <>
        <div className={styles['lightbox-bg']}>
          <div className={styles['lightbox-content-wrapper']}>
            {addButton}
            <span className={styles['close-lightbox']} onClick={close} >&#10008;</span>
            <div className={styles['recipe-photo']} style={{background: `url(${recipe.thumbnail_url})`}}>
            </div>
            <div className={styles['recipe-content']}>
              <h2>{recipe.name}</h2>
              {recipe.backstory === '' ? null :
                <>
                  <h3>About This Recipe</h3>
                  <p>{recipe.backstory}</p>
                </>
              }
              {recipe.description === '' ? null :
                <>
                  <h3>Description</h3>
                  <p>{recipe.description}</p>
                </>
              }
              <h3>Ingredients</h3>
              {ingredientsList}
              <h3>Instructions</h3>
              {instructionSteps}
            </div>
          </div>
        </div>
      </>
    );
  };
};


export default Recipe;

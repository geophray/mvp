import React from 'react';

import Step from './Step.jsx';
import IngredientsList from './IngredientsList.jsx';

import styles from '../css/recipe.css';

const Recipe = ({ recipe, close }) => {
  const { components, instructions } = recipe;
  var stepCounter = 0;
  const instructionSteps = instructions.map((instruction) => {
    stepCounter++;
    return <Step key={instruction.position} step={instruction} stepNum={stepCounter} />
  });
  const ingredientsList = components.map((component) => {
    return <IngredientsList key={component.position} component={component} />;
  });
  return (
    <>
      <div className={styles['lightbox-bg']}>
        <div className={styles['lightbox-content-wrapper']}>

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
  )
};

export default Recipe;

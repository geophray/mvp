import React from 'react';

import styles from '../css/recipecard.css';

const RecipeCard = ({ recipe, view }) => {
  return(
    <div className="recipe-card" onClick={() => view(recipe)}>
      <div className={styles['recipe-thumbnail']} style={{background: `url(${recipe.thumbnail_url})`}}></div>
      <div className={styles['recipe-card-text']}>
        <h3>{recipe.name}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;

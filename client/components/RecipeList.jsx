import React from 'react';

import RecipeCard from './RecipeCard.jsx';
import styles from '../css/recipelist.css';

const RecipeList = ({ title, recipes }) => {
  const recipeList = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  })
  return (
    <section>
      <h3>{title}</h3>
      <div className={styles['recipe-list']}>
        {recipeList}
      </div>
    </section>
  )
};

export default RecipeList;

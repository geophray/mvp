import React from 'react';

import RecipeCard from './RecipeCard.jsx';
import styles from '../css/recipelist.css';

const RecipeList = ({ title, recipes, view }) => {
  const recipeList = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id || recipe.external_id} recipe={recipe} view={view} />;
  });
  return (
    <section>
      <h3>{title}</h3>
      <div className={styles['recipe-list']}>
        {recipeList}
      </div>
    </section>
  );
};

export default RecipeList;

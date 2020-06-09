import React from 'react';

import styles from '../css/ingredientlist.css';

const IngredientsList = ({ component }) => {
  const ingredients = component.components.map((item) => {
    return <li key={item.id}>{item.raw_text}</li>;
  })
  return (
    <>
      <h4>{component.name}</h4>
      <ul className={styles['ingredient-list']}>
        {ingredients}
      </ul>
    </>
  )

};

export default IngredientsList;

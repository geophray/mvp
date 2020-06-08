import React from 'react';

const FindNewRecipesForm = ({ handleQuery, handleChange, value }) => (
  <form onSubmit={handleQuery}>
    <label>
      Search for new recipes:
      <input type="text" name="q" value={value} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default FindNewRecipesForm;

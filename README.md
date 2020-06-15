# meal-planning-made-easy

> Recipe cataloguing app for easily tracking dietary preferences/restrictions for multiple people. A must have for any parent of picky eaters.

![Recipes saved to account.](https://geophray.s3-us-west-2.amazonaws.com/public/mpme/my-recipes.png "My Saved Recipes")
![A recipe card with ingredients and instructions for a single recipe.](https://geophray.s3-us-west-2.amazonaws.com/public/mpme/recipe-card.png "Single Recipe Card with Instructions")
![Search form for loading recipes from tasty api.](https://geophray.s3-us-west-2.amazonaws.com/public/mpme/explore.png "Searc for recipes from tasty api.")

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Technologies Used](#technologies-used)
1. [Development](#development)

## Usage

> This app uses PostgreSQL for a DBMS. Instructions for preparing the database will be added soon.

- `npm run build` Runs webpack in production mode
- `npm start` Starts server listening on port 3000

Visit http://localhost:3000/

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.20.1

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Axios
- React
- Webpack / Babel
- CSS Modules
- Jest

## Development

- `npm run build-dev` Runs webpack in dev mode with watch flag
- `npm run server-dev` Starts nodemon listening on port 3000
- `npm run test` Runs jest tests

### Installing Dependencies

From within the root directory:

```sh
npm install
```


const path = require('path');
require('dotenv').config(path.join(__dirname, '../.env'));
const express = require('express');
const unirest = require('unirest');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.status(200).send('Get request made to "/".');
});

app.get('/api/rapidapi/recipes/:id', (req, res) => {
  unirest
    .get("https://tasty.p.rapidapi.com/recipes/list")
    .headers({
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "Content-Type": 'application/json',
	    "useQueryString": true
    })
    .send({
      "q": req.params.id,
      "from": "0",
      "sizes": "20"
    })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error('Error retrieving recipes from tasty api.\n', err);
      res.status(500).send('Something went wrong!');
    })
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

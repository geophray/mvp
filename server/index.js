const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});
const express = require('express');
const unirest = require('unirest');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.status(200).send('Get request made to "/".');
});

app.get('/api/rapidapi/recipes/:queryString', (req, res) => {
    const request = unirest("GET", "https://tasty.p.rapidapi.com/recipes/list");

    request.query({
      "q": req.params.queryString,
      "from": "0",
      "sizes": "20"
    });

    request.headers({
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "useQueryString": true
    });

    request.end((response) => {
      if (response.error) {
        res.status(500).send('Server error.');
      } else {
        res.status(200).send(response);
      }
    });
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

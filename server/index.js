const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.status(200).send('Get request made to "/".');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

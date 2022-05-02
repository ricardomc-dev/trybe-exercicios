const express = require('express');

const authors = require('./models/Author');

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.status(200).json(authors);
})

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
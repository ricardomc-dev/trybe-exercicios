const express = require("express");

const router = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

router.get('/recipes', (req, res) => {
  return res.status(200).json(recipes);
})

router.get('/drinks', (req, res) => {
  return res.status(200).json(drinks);
})

router.post('/recipes/', (req, res) => {
  const { id, name, price, waitTime} = req.body;
  console.log(`${id}, ${name}, ${price}, ${waitTime}`)
  recipes.push({id, name, price, waitTime });
  console.log(recipes);
  return res.status(201).json({ message: "Recipe created successfully!" })
})

module.exports = router;
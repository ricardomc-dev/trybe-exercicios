const express = require('express');

const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/hello', (req, res) => {
  res.status(200).send('hello World3!');
});


app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));

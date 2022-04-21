const fs = require("fs").promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map((person) => `${person.id} - ${person.name}`);
  })
  .then(strings => strings.forEach(string => console.log(string)))
  .catch(err => console.log(`erro: ${err.message}`));


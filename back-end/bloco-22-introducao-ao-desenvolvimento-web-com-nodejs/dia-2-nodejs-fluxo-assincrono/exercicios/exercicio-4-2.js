const fs = require("fs").promises;

async function getSimpsonsById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));

  const selectedSimpson = simpsons.find((person) => person.id === id);

  console.log(selectedSimpson.name);
  // return new Promise((resolve, reject) => {
  //   if (!selectedSimpson) {
  //     reject(new Error('id não encontrado'));
  //   }

  //   resolve(selectedSimpson.name)
  // })

}

getSimpsonsById('1');
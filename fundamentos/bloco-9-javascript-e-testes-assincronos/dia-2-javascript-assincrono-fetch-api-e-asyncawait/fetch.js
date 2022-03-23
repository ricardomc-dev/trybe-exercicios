const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'http://api.chucknorris.io/jokes/random?category=dev';

  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  }
  catch(error){
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported
// githubApi.test.js

const fetch = require('node-fetch');
const { describe } = require('yargs');

const url = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => {
  const result = fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))

  return result
};

console.log(getRepos('https://api.github.com/orgs/tryber/repos'));

// describe('Descreve o primeiro teste', () => {
  



// })
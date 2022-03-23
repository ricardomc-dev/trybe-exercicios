const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames() {
  return books.map((book) => 
    `${book.name.split(" ").join('_').toUpperCase()} - ${book.genre.split(" ").join('_').toUpperCase()} - ${book.author.name.split(" ").join('_').toUpperCase()}`
  );
};
//console.log(formatedBookNames());

// const stringsArray = books.map((book) => {
//   let nomeDoLivro = book.name.split(" ").join('_').toUpperCase();
//   let generoDoLivro = book.genre.split(" ").join('_').toUpperCase();
//   let nomeDaPessoaAutora = book.author.name.split(" ").join('_').toUpperCase();
//   return `${nomeDoLivro} - ${generoDoLivro} - ${nomeDaPessoaAutora}`
// });

//console.log(stringsArray);

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge() {
  return books.map((book) => (
    {
      author: book.author.name, 
      age: book.releaseYear - book.author.birthYear,
    }
  )).sort((a, b) => a.age - b.age);
}
//console.log(nameAndAge());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
  return books.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}
//console.log(fantasyOrScienceFiction());

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered() {
  return books.filter(book => (2021 - book.releaseYear) > 60).sort((bookA, bookB) => 
  bookA.releaseYear - bookB.releaseYear);
};
// console.log(oldBooksOrdered());

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  const arrayFC = books.filter((book) => {
    return book.genre === 'Ficção Científica' || book.genre === 'Fantasia';
  })
  return arrayFC.map((book) => book.author.name).sort()
}

// console.log(fantasyOrScienceFictionAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  const arrayOldBooks = books.filter((book) => (2021 - book.releaseYear) > 60);
  return arrayOldBooks.map((oldBook) => oldBook.name);
}

//console.log(oldBooks());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName() {
  return books.find((book) => {
    return book.author.name.split(' ')[0].endsWith('.') &&
    book.author.name.split(' ')[1].endsWith('.') &&
    book.author.name.split(' ')[2].endsWith('.')
  }).name;
  
}

console.log(authorWith3DotsOnName());
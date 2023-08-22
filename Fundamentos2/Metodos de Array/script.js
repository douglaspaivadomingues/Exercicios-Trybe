// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

const fah = temperaturesCelsius.map(tempC => (tempC * 9/5) +32);

//console.log(fah);

//exercicio 2
//Dado um array de números, crie uma função que retorne um novo array 
//com as raízes quadradas dos números. No entanto, se um número for negativo, a 
//função deve substituí-lo por NaN (Não é um Número).

const numbers = [4, 9, -1, 16, -5, 25];

const nums = numbers.map((num) => {
  return Math.sqrt(num);
});

//console.log(nums);

const eBooks = {
  books: [
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
    ],
  };

//Exercício 3
//Implemente a função formatedBookNames que deve retornar um array de strings no 
//formato: 
//Nome do livro - Gênero - Nome da pessoa autora.

const informationBook = eBooks.books.map((info) => ({
    book:info.name,
    genre:info.genre,
    author:info.author.name,
}));

//console.log(informationBook);



//Exercício 4
//Implemente a função nameAndAge que deve retornar um array de objetos, cada objeto deve conter:
//A chave author, e o valor deve ser o nome da pessoa autora;
//A chave age, e o valor deve ser a idade da pessoa autora quando lançou o livro.

const estrutura = {
  Object,
  Array,
  Object: {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
          name: 'Stephen King',
          birthYear: 1947,
        },
        releaseYear: 1986,
  }
};


const authorBook = eBooks.books.map((infoAuthor) => {
  const age = infoAuthor.releaseYear - infoAuthor.author.birthYear;
  return {
    author:infoAuthor.author.name,
    age: age,
  }
});

console.log(authorBook);

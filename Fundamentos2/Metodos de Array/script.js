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

//console.log(authorBook);

const person = {
  name: 'João',
  lastName: 'Cavernoso',
  age: 22,
  nationality: 'Angolan',
};

const { nationality = 'Zimbabwean' } = person;
//console.log(nationality);

const heroes = ['Shrek', 'Princess Fiona'];
const [hero1, hero2, hero3 = 'Puss in Boots'] = heroes;

//console.log(hero1); // Shrek
//console.log(hero2); // Princess Fiona
//console.log(hero3); // Puss in Boots

//estrutura de um filter().
//array.filter(() => {});
//array.filter((item) => {});

const data = ['Andre', 998812789, 'Gabriel', 995794897, 'Carol', 955589216];

const result = data.filter((item) => typeof item === 'string');
const numberPhone = data.filter((item) => typeof item === 'number');

//console.log(result); // ['Andre', 'Gabriel', 'Carol']
//console.log(numberPhone);

// Array de produtos no mercado
const products = [
  { name: 'Maçã', category: 'Frutas', price: 2.5 },
  { name: 'Leite', category: 'Laticínios', price: 3.0 },
  { name: 'Pão', category: 'Padaria', price: 1.5 },
  { name: 'Cenoura', category: 'Legumes', price: 1.0 },
  { name: 'Queijo', category: 'Laticínios', price: 5.0 },
  { name: 'Banana', category: 'Frutas', price: 2.0 },
];

// Filtrar apenas os produtos da categoria "Frutas"
const fruits = products.filter((product) => product.category === 'Frutas');
const vegetables = products.filter((product) => product.category === 'Legumes');

//console.log(fruits);
//console.log(vegetables);

//Exercício 1
//O array de objetos people, contêm elementos que representam pessoas com as propriedades name e age.
// Utilize o método filter para filtrar as pessoas que têm a idade igual ou superior a 30.

const people1 = [
  { name: 'João', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 20 },
  { name: 'Ana', age: 35 },
];

//const namesAndAge = people.filter((person) => person.age >= 30 );

//console.log(namesAndAge);

//Utilizando o método filter e array destructuring, crie uma função filterHighPlayers
//que retorna um novo array contendo apenas os jogadores com altura igual ou superior a 200 centímetros.

const players = [
  { name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
  { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
  { name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
  { name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
  { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
];

const players200 = (minHeight) => players.filter(({ height }) => height >= minHeight);
const players200c = players200(200);

//console.log(players200c);

//const filterHighPlayers = (minHeight) => players.filter(({ height }) => height >= minHeight);

//const players200c = filterHighPlayers(200);
//console.log(players200c);

//array.sort(`função de comparação` (opcional));

//Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
people.sort((a, b) => a.age - b.age);

//console.log(people);

const pokemons = [
  { name: 'Pikachu', type: 'Elétrico', level: 25 },
  { name: 'Charizard', type: 'Fogo', level: 50 },
  { name: 'Bulbasaur', type: 'Planta', level: 10 },
  { name: 'Gyarados', type: 'Água', level: 40 },
  { name: 'Alakazam', type: 'Psíquico', level: 35 },
  { name: 'Snorlax', type: 'Normal', level: 50 },
  { name: 'Mewtwo', type: 'Psíquico', level: 70 },
  { name: 'Dragonite', type: 'Dragão', level: 55 },
  { name: 'Mew', type: 'Psíquico', level: 30 },
  { name: 'Articuno', type: 'Gelo', level: 60 },
  { name: 'Zapdos', type: 'Elétrico', level: 60 },
  { name: 'Moltres', type: 'Fogo', level: 60 },
  { name: 'Gengar', type: 'Fantasma', level: 45 },
  { name: 'Machamp', type: 'Lutador', level: 50 },
  { name: 'Lapras', type: 'Água', level: 35 },
  { name: 'Venusaur', type: 'Planta', level: 45 },
  { name: 'Blastoise', type: 'Água', level: 55 },
  { name: 'Golem', type: 'Pedra', level: 40 },
  { name: 'Arcanine', type: 'Fogo', level: 55 },
  { name: 'Jolteon', type: 'Elétrico', level: 40 },
];

//Exercício 1
//Utilizando o método filter e object destructuring, crie uma função filterStrongPokemons
//que retorna um novo array contendo apenas os Pokémons com nível superior a 30.

const filterStrongPokemons = (minLevel) => pokemons.filter(( { level } ) => level > minLevel);
const sortFilterStrongPokemons = filterStrongPokemons(30);
sortFilterStrongPokemons.sort((a, b) => a.level - b.level);

//console.log(sortFilterStrongPokemons);

//Exercício 2
//Utilizando os métodos filter e map encadeados, crie uma função getStrongPokemonNames
//que retorna um novo array contendo apenas os nomes dos Pokémons com nível superior a 50.
//Exercício 3
//Utilize o método sort para ordenar o array de Pokémons em ordem crescente com base no nível
//de cada Pokémon.

const getStrongPokemonNames = (minLevel) => {
  const strongPokemons = pokemons.filter((pokemon) => pokemon.level > minLevel);
  const strongPokemonsName = strongPokemons.map((pokemon) => pokemon.name);
  const sortStrongPokemonsName = strongPokemonsName.sort((a, b) => a.level - b.level);
  return sortStrongPokemonsName;
  };

  //console.log(getStrongPokemonNames(50));

//Exercício 4
//Utilizando o método sort e default destructuring, crie uma função chamada sortPokemons
//que retorna o array de Pokémons ordenado por nível em ordem decrescente. 
//Caso dois Pokémons tenham o mesmo nível, a ordenação deve ser feita pelo nome 
//em ordem alfabética crescente.

 const sortPokemons = (pokemonArray) => {
  return pokemonArray.sort((a, b) => {
    if (a.level !== b.level) {
      return b.level - a.level;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
};
  
const sortedPokemons = sortPokemons(pokemons);
console.log(sortedPokemons);
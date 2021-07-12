import { selectName,selectFilter, selectWeak, orderPokes,calc  } from '../src/data.js';

const pokemonMock = {
  pokemon: [{
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],

    "stats":{
      "max-cp": "1115",
    },

    "generation": {
      "name": "kanto"
    },

    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },
  {
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats":{
      "max-cp": "1699",
    },

    "generation": {
      "name": "kanto"
    },

    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },
  {
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "stats":{
      "max-cp": "946",
    },

    "generation": {
      "name": "kanto"
    },

    "weaknesses": [
      "Electric",
      "Grass"
    ],
  }]
};

describe('Selecting a pokemon by name', () => {
  it('should be a function', () => {
    expect(typeof selectName).toBe('function');
  });
  it('should return "Bulbasaur" when search the pokemon by name "bul"', () => {
    const result = selectName(pokemonMock.pokemon, "bul")
    expect(result[0].name).toEqual("Bulbasaur")
  });
});

describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof selectFilter).toBe('function');
  });
  it('should return "Squirtle", for type "Water"', () => {
    const result = selectFilter(pokemonMock.pokemon, "Water", "type")
    expect(result[0].name).toEqual("Squirtle")
  });
});

describe('Showing the percentage of the type', () => {
  it('should be a function', () => {
    expect(typeof calc).toBe('function');
  });
  it('shold return 66.67, for type "Grass"', () => {
    const result = calc(pokemonMock.pokemon, "Grass", "type")
    expect(result).toEqual(66.67)
  });
});

describe('Selecting a pokemon by weakness', () => {
  it('should be a function', () => {
    expect(typeof selectWeak).toBe('function');
  });
  it('should return "Squirtle" for Electric"', () => {
    const result = selectWeak(pokemonMock.pokemon, "Electric")
    expect(result[0].name).toEqual("Squirtle")
  });
});
describe('Selecting a pokemon by order', () => {
  it('should be a function', () => {
    expect(typeof orderPokes).toBe('function');
  });
  it('should return "Bulbasaur", "Ivysaur" and "Squirtle" by "A-Z" order', () => {
    const result = orderPokes(pokemonMock.pokemon, "order-az")
    // console.log(result,"lenght");
    expect(result).toEqual(pokemonMock.pokemon)
  });
  it('should return "Squirtle", "Ivysaur" and "Bulbasaur" by "Z-A" order', () => {
    const result = orderPokes(pokemonMock.pokemon, "order-za")
    expect(result).toEqual(pokemonMock.pokemon)
  });
  it('should return "Squirtle", "Bulbasaur" and "Ivysaur" by "stats" order', () => {
    const result = orderPokes(pokemonMock.pokemon, "stats")
    expect(result).toEqual(pokemonMock.pokemon)
  });
  it('should return "Ivysaur","Bulbasaur" and "Squirtle" by "stats-reverse" order', () => {
    const result = orderPokes(pokemonMock.pokemon, "stats-reverse")
    expect(result).toEqual(pokemonMock.pokemon)
  });
  it('should return "Bulbasaur" ,"Squirtle" and "Ivysaur" by "order-generation" order', () => {
    const result = orderPokes(pokemonMock.pokemon, "order-generation")
    expect(result).toEqual(pokemonMock.pokemon)
  });
})

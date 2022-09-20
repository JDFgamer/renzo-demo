'use strict';

var characters = [];

var families = [];


module.exports = {
  reset: function () {
    // No es necesario modificar esta función (Ya está completa)
    characters = [];
    families = [];
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listCharacter: function (family, pluckName) {
    // Devuelve un arreglo con todos los personajes
    // Si recibe un nombre de familia como parámetro debería filtrar solo los personajes de ella
    // Si recibe un segundo parámetro en true debe devolver únicamente los nombres de los personajes
    const familyId = families.indexOf(family) + 1;
    if (familyId) {
      const chars = characters.filter(f => f.familyId === familyId);
      if (pluckName) {
        return chars.map(char => char.name);
      };
      return chars;
    };
    return characters;
  },
  addFamily: function (name) {
    // Agrega el apellido de una nueva familia verificando que no exista
    // Debe retornar el nombre de la familia agregado o existente
    let familyFound = families.find(f => f === name);
    if (!familyFound) {
      families.push(name);
    }
    return name;
  },
  listFamilies: function() {
    // Devuelve un arreglo con todas las familias
    return families
  },
  addCharacter: function(name, age, family) {
    // Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
    // Adicionalmente va a ser necesario guardar el número de familia y no su nombre
    // El número de familia debe empezar desde 1 y no desde 0.
    // Debe retornar el personaje creado
    if (!typeof (age) === Number) throw new Error('Ingrese correctamente la edad del personaje');
    const familyId = families.indexOf(family) + 1;
    if (familyId === 0) return;
    const newChar = {
      name,
      age,
      familyId,
      quotes: []
    }
    characters.push(newChar);
    return newChar;
  },
  addQuote: function(name, quote) {
    // Agrega una nueva frase a un personaje en particular con el formato:
    // {text: "Este es el texto de la frase", season: 3}

    if (!quote.text || quote.text === '') return;

    const char = characters.find(c => c.name === name);

    if (char) {
      if (!quote.season) quote.season = false;
      return char.quotes.push(quote);
    }


  },
  showQuotes: function(name) {
    // Devuelve todas las frases de un personaje en particular
    let char = characters.find(c => c.name === name);
    if (char) {
      return char.quotes;
    }
    return [];
  },
};

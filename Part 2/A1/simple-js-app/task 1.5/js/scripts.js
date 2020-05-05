var pokemonRepository = (function () {
var repository = [
    {
      creatureName : 'Carnivine',
      creatureHeight : 4.07,
      creatureAbilities : ['Levitate'],
      creatureTypes : ['Grass']
    },
    {
      creatureName : 'Metapod',
      creatureHeight : 2.04,
      creatureAbilities : ['Shed-skin'],
      creatureTypes : ['Bug']
    },
    {
      creatureName : 'Charmander',
      creatureHeight : 2.00,
      creatureAbilities : ['Blaze', 'Solar-power'],
      creatureTypes : ['Fire']
    },
    {
      creatureName : 'Squirtle',
      creatureHeight : 0.5,
      creatureAbilities : ['Rain-dish', 'Torrent'],
      creatureTypes : ['Monster', 'Water  1']
    },
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add : add, 
    getAll : getAll
  };
})();

pokemonRepository.add({
  creatureName : 'Wartortle',
  creatureHeight : 3.03,
  creatureAbilities : ['Torrent'],
  creatureTypes: ['Water'],
});
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add());
Object.keys(pokemonRepository.getAll()).forEach(function(property) {
  document.write(pokemonRepository.getAll()[property].creatureName + " (height: " + pokemonRepository.getAll()[property].creatureHeight + ")" + "<br>"
  );
});

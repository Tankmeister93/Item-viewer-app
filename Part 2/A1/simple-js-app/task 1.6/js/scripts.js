var pokemonRepository = (function () {
  var repository = [
    {
      creatureName: "Carnivine",
      creatureHeight: 4.07,
      creatureAbilities: ["Levitate"],
      creatureTypes: ["Grass"]
    },
    {
      creatureName: "Metapod",
      creatureHeight: 2.04,
      creatureAbilities: ["Shed-skin"],
      creatureTypes: ["Bug"]
    },
    {
      creatureName: "Charmander",
      creatureHeight: 2.0,
      creatureAbilities: ["Blaze", "Solar-power"],
      creatureTypes: ["Fire"]
    },
    {
      creatureName: "Squirtle",
      creatureHeight: 0.5,
      creatureAbilities: ["Rain-dish", "Torrent"],
      creatureTypes: ["Monster", "Water  1"]
    }
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    var $newList = document.querySelector("ul");
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    addListItem.innerText = pokemonRepository.creatureName;
    button.classList.add("pokemonButton");
    listItem.appendChild(button);
    $newList.appendChild(listItem);
    button.addEventListener('click', function() {showDetails(pokemon)});
  }

  function showDetails(pokemon) {
    console.log(pokemon)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem : addListItem,
    showDetails : showDetails
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
Object.keys(pokemonRepository.getAll()).forEach((property) => pokemonRepository.addListItem(pokemonRepository.getAll()[property]));
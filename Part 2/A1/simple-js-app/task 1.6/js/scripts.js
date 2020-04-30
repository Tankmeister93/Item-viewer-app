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
  function addListItem(pokemon) {
    pokemonRepository.addListItem().forEach((element) => console.log(element));
    };
  function showDetails(pokemon) {
    console.log(pokemon)
  }
  function add(pokemon) {
    repository.push(pokemon);
  }
  function getAll() {
    return repository;
  }

  return {
    add : add, 
    getAll : getAll,
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

document.querySelector('ul')
var listItem = document.createElement('li');
var button = document.createElement('button');
button.addEventListener ('click',function showDetails(click){
  console.log(`${click}creatureName`);
});
button.innerText = 'creatureName';
console.log(listItem.innerText);
button.classList.add('pokemon-list')
listItem.appendChild(button);


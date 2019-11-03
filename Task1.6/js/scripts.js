//array created

var pokemonRepository = (function() {
  var repository = [
    { name: "Ivysaur", height: 1, weight: 13, type: ["Grass", "Poison"] },
    { name: "Nidoking", height: 1.4, weight: 62, type: ["Ground", "Poison"] },
    { name: "Butterfree", height: 1.1, weight: 32, type: ["Bug", "Flying"] },
    { name: "Smoochum", height: 0.4, weight: 6, type: ["Psychic", "Ice"] }
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }
  function addListItem(pokemon = {}) {
    var container = document.querySelector(".pokemon-list");
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("my-class");
    listItem.appendChild(button);
    container.appendChild(listItem);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemonlist) {
  pokemonRepository.addListItem(pokemonlist);
});

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

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemonlist) {
  if (pokemonlist.height > 1.1) {
    document.write(
      '<div class="pokemon">' +
        "Name: " +
        pokemonlist.name +
        "<br>" +
        "Weight: " +
        pokemonlist.weight +
        "<br>" +
        " Heigth: " +
        pokemonlist.height +
        " - Wow, that's big!" +
        "<br>" +
        "Type: " +
        pokemonlist.type +
        "<br/>" +
        "<br/>"
    );
  } else {
    document.write(
      '<div class="pokemon">' +
        "Name: " +
        pokemonlist.name +
        "<br>" +
        "Weight: " +
        pokemonlist.weight +
        "<br>" +
        " Heigth: " +
        pokemonlist.height +
        "<br>" +
        "Type: " +
        pokemonlist.type +
        "<br/>" +
        "<br/>"
    );
  }
});

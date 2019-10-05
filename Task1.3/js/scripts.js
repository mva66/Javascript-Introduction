//array created
var repository = [
  { name: "Ivysaur", height: 1, weight: 13, type: ["Grass", "Poison"] },
  { name: "Nidoking", height: 1.4, weight: 62, type: ["Ground", "Poison"] },
  { name: "Butterfree", height: 1.1, weight: 32, type: ["Bug", "Flying"] },
  { name: "Smoochum", height: 0.4, weight: 6, type: ["Psychic", "Ice"] }
];

for (var i = 0; i < repository.length; i++) {
  if (repository[i].height > 1.1) {
    document.write(
      '<div class="pokemon">' +
        repository[i].name +
        " (heigth:" +
        repository[i].height +
        ")" +
        " - Wow, that's big!" +
        "<br/>" +
        "<br/>"
    );
  } else {
    document.write(
      '<div class="pokemon">' +
        repository[i].name +
        " (heigth:" +
        repository[i].height +
        ")" +
        "<br/>" +
        "<br/>"
    );
  }
}

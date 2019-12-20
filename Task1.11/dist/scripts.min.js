(function() {
  //array created

  var pokemonRepository = (function() {
    var repository = [];
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    function add(pokemon) {
      repository.push(pokemon);
    }

    function getAll() {
      return repository;
    }

    function loadList() {
      return $.ajax(apiUrl)
        .then(function(json) {
          json.results.forEach(function(item) {
            var pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        })
        .catch(function(e) {
          console.error(e);
        });
    }

    function loadDetails(item) {
      var url = item.detailsUrl;
      return $.ajax(url)
        .then(function(details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.weight = details.weight;
        })
        .catch(function(e) {
          console.error(e);
        });
    }

    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      addListItem: addListItem,
      loadDetails: loadDetails
    };
  })();

  function addListItem(pokemon) {
    var $pokemonList = $(".pokemon-list");
    var listItem = $(
      '<button type="button" class="pokemon-list_item list-group-item list-group-item-action" data-toggle="modal" data-target="#pokemon-modal"></button>'
    );
    listItem.text(pokemon.name);
    $pokemonList.append(listItem);
    listItem.click(function() {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      // creates Modal
      var modal = $(".modal-body");
      var name = $(".modal-title").text(pokemon.name);
      var height = $('<p class="pokemon-height"></p>').text(
        "Height: " + pokemon.height
      );
      var weight = $('<p class="pokemon-weight"></p>').text(
        "Weight: " + pokemon.weight
      );
      var image = $('<img class="pokemon-pic">');
      image.attr("src", pokemon.imageUrl);
      if (modal.children().length) {
        modal.children().remove();
      }
      modal.append(image);
      modal.append(height);
      modal.append(weight);
      modal.append(type);
    });
  }

  $(document).ready(function() {
    $("#pokemon-search").on("keyup", function() {
      var value = $(this)
        .val()
        .toLowerCase();
      $(".pokemon-list_item").filter(function() {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
      });
    });
  });

  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
})();

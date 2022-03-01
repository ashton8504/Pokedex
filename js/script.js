//IIFE setup section

let pokemonRepository = (function() { //This is anonymous since there is nothing in the ()
  // let modalContainer = document.querySelector('#modal-container');
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) { //this function will add the value pokemon to the pokemonList with the push function
   pokemonList.push(pokemon);
  }
  //This returns all data from Pokemon List//
  function getAll() {
    return pokemonList;
  };

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() { //this function loads a list from the API
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) { //this is where we select what elements to return
        let pokemon = {
          name: item.name,
          height: item.height,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon)
    });
  }

//Bootstrap Modal?//
  function showModal(item) {
    let modalBody = $(".modal-body"); //modalBody
    let modalTitle = $(".modal-title");//modalTitle
    let modalHeader = $(".modal-header");//modalHeader

    modalTitle.empty();//clears the modalTitle after you click out
    modalBody.empty();//clears the modalBody after you click out

    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imgElementFront.attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    let heightElement =$("<p>" + "Height : " + item.height + "</p>");
    let weightElement = $("<p>" + "Weight : " + item.weight + "</p>");
    let typesElement = $("<p>" + "Types : " + item.types + "</p>");
    let abilitiesElement = $("<p>" + "Abilities : " + item.abilities + "</p>");




//Appending the let functions above//
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
    modal.append(imageElement);
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);;
    modalContainer.appendChild(modal);
    // modalContainer.classList.add('is-visible');
}
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
 

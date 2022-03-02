//IIFE setup section

let pokemonRepository = (function() { //This is anonymous since there is nothing in the ()
  // let modalContainer = document.querySelector('#modal-container');
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //API source where we get the pokemon info


  function add(pokemon) { //this function will add the value pokemon to the pokemonList with the push function
   pokemonList.push(pokemon);
  }

  //This returns all data from Pokemon List//
  function getAll() {
    return pokemonList;
  };

//Creates a buttons with Pokemon names
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

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
      pokemon.weight = details.weight;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon)
    });
  }



  //   function showDetails(pokemon) {
  //     loadDetails(pokemon).then(function () {
  //       showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
  //     });
  //   }
  //
  //   function showModal(name, height, image) {
  //   let modalContainer = document.querySelector('#modal-container');
  //   modalContainer.innerHTML = '';
  //   let modal = document.createElement('div');
  //   modal.classList.add('modal');
  //
  //
  //   let closeButtonElement = document.createElement('button');
  //   closeButtonElement.classList.add('modal-close');
  //   closeButtonElement.innerText = 'Close';
  //   closeButtonElement.addEventListener('click', hideModal);
  //
  //   let titleElement = document.createElement('name');
  //   titleElement.innerText = name;
  //
  //   let contentElement = document.createElement('height');
  //   contentElement.innerText = "Height: " + height;
  //
  //   let imageElement = document.createElement('img');
  //   imageElement.classList.add('pokemon-image-class');
  //   imageElement.src = image;
  //
  //
  //   modal.appendChild(closeButtonElement);
  //   modal.appendChild(titleElement);
  //   modal.appendChild(contentElement);
  //   modal.appendChild(imageElement);
  //   modalContainer.appendChild(modal);
  //   modalContainer.classList.add('is-visible');
  // }
  //
  //   function hideModal() {
  //     modalContainer.classList.remove('is-visible');
  //   }
  //
  //   document.querySelector('#show-modal').addEventListener('click', () => {
  //     showModal('Test');
  //   });
  //
  //   window.addEventListener('keydown', (e) => {
  //     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
  //       hideModal();
  //     }
  //   });
  //
  //   modalContainer.addEventListener('click', (e) => {
  //     let target = e.target;
  //     if (target === modalContainer) {
  //       hideModal();
  //     }
  //   });
  //
  //   return {
  //     add: add,
  //     getAll: getAll,
  //     addListItem: addListItem,
  //     loadList: loadList,
  //     loadDetails: loadDetails,
  //     showDetails: showDetails
  //   };
  // })();
  //
  // pokemonRepository.loadList().then(function () {
  //   pokemonRepository.getAll().forEach(function (pokemon) {
  //     pokemonRepository.addListItem(pokemon);
  //   });
  // });
  //
  //

// //Bootstrap Modal?//
  function showModal(pokemon) {
    let modalBody = $(".modal-body"); //modalBody calling bootstrap div class in html
    let modalTitle = $(".modal-title");//modalTitle calling bootstrap div class in html
    let modalHeader = $(".modal-header");//modalHeader calling bootstrap div class in html
    // let myModalInformation = $("#pokemonModal").modal('show');
    modalTitle.empty();//clears the modalTitle after you click out
    modalBody.empty();//clears the modalBody after you click out

    let nameElement = $("<h1>" + pokemon.name + "</h1>"); //pokemon name element
    console.log(pokemon, 'lol')

    let imageElementFront = $('<img class="modal-img" style="width:50%">'); //pokemon image element
    imageElementFront.attr("src", pokemon.imageUrlFront)

    let imageElementBack = $('<img class="modal-img" style="width:50%">');//pokemon image element
    imageElementBack.attr("src", pokemon.imageUrlBack)

    let heightElement =$("<p>" + "Height : " + pokemon.height + "</p>");//pokemon height element
    let weightElement = $("<p>" + "Weight : " + pokemon.weight + "</p>");//pokemon weight element
    // let typesElement = $("<p>" + "Types : " + pokemon.types + "</p>"); //pokemon type element
    // let abilitiesElement = $("<p>" + "Abilities : " + pokemon.abilities + "</p>");//pokemon abilities element
    let myModalInformation = $("#pokemonModal").modal('show');




//Appending the let functions above, this should display attributes of pokemon & image//
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    // modalBody.append(typesElement);
    // modalBody.append(abilitiesElement);
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

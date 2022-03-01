//IIFE setup section

let pokemonRepository = (function() {
  // let modalContainer = document.querySelector('#modal-container');
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150;

  function add(pokemon) {
   pokemonList.push(pokemon);

  }
  //This returns data from Pokemon List//
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

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
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
      showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
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
    // modal.appendChild(closeButtonElement);
    // modal.appendChild(titleElement);
    // modal.appendChild(contentElement);;
    // modalContainer.appendChild(modal);
    // modalContainer.classList.add('is-visible');



//PREVIOUS CODE BELOW//
  // let closeButtonElement = document.createElement('button');
  // closeButtonElement.classList.add('modal-close');
  // closeButtonElement.innerText = 'Close';
  // closeButtonElement.addEventListener('click', hideModal);
  //
  // let titleElement = document.createElement('name');
  // titleElement.innerText = name;
  //
  // let contentElement = document.createElement('height');
  // contentElement.innerText = "Height: " + height;
  //
  // let imageElement = document.createElement('img');
  // imageElement.classList.add('pokemon-image-class');
  // imageElement.src = image;
  //
  //
  // modal.appendChild(closeButtonElement);
  // modal.appendChild(titleElement);
  // modal.appendChild(contentElement);
  // modal.appendChild(imageElement);
  // modalContainer.appendChild(modal);
  // modalContainer.classList.add('is-visible');
}

  // function hideModal() {
  //   modalContainer.classList.remove('is-visible');
  // }
  //
  // document.querySelector('#show-modal').addEventListener('click', () => {
  //   showModal('Test');
  // });
  //
  // window.addEventListener('keydown', (e) => {
  //   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
  //     hideModal();
  //   }
  // });
  //
  // modalContainer.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });

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





















































// //Below is previous Code I am saving in case I messed up
// let pokemonRepository = (function () {
//   let pokemonList = [];
//   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
//
//   function add(pokemon) {
//     if (
//       typeof pokemon === "object" &&
//       "name" in pokemon
//     ) {
//       pokemonList.push(pokemon);
//     } else {
//       console.log("Pokemon is not correct");
//     }
//   }
//   function getAll() {
//     return pokemonList;
//   };
//
//   function addListItem(pokemon) {
//     let pokemonList = document.querySelector(".pokemon-list");
//     let listpokemon = document.createElement("li");
//     let button = document.createElement("button");
//     button.innerText = pokemon.name;
//     button.classList.add("button-class");
//     listpokemon.appendChild(button);
//     pokemonList.appendChild(listpokemon);
//     button.addEventListener("click", function(event) {
//       showDetails(pokemon);
//     });
//   }
//
//   function loadList() {
//     return fetch(apiUrl).then(function (response) {
//       return response.json();
//     }).then(function (json) {
//       json.results.forEach(function (item) {
//         let pokemon = {
//           name: item.name,
//           detailsUrl: item.url
//         };
//         add(pokemon);
//         console.log(pokemon);
//       });
//     }).catch(function (e) {
//       console.error(e);
//     })
//   }
//
//   function loadDetails(item) {
//     let url = item.detailsUrl;
//     return fetch(url).then(function (response) {
//       return response.json();
//     }).then(function (details) {
//       // Now we add the details to the item
//       item.imageUrl = details.sprites.front_default;
//       item.height = details.height;
//       item.types = details.types;
//     }).catch(function (e) {
//       console.error(e);
//     });
//   }
//
//   function showDetails(item) {
//     loadDetails(item).then(function () {
//       showModal(item);
//     });
//   }
//
//   function showModal() {
//     let modalContainer = document.querySelector('#modal-container');
//     modalContainer.classList.add('is-visible');
//   }
//
//   document.querySelector('#show-modal').addEventListener('click', () => {
//     showModal();
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
//
// pokemonRepository.loadList().then(function () {
//   pokemonRepository.getAll().forEach(function (pokemon) {
//     pokemonRepository.addListItem(pokemon);
//   });
// });

//IIFE//
let pokemonRepository = (function(){
  //Pokemon List Variables//
  let repository = [
    {
    name: "Venusaur",
    height: 2,
    weight: 100,
    types: ['grass','poison'],
    abilities:['chlorophyll','overgrow']
  },

  {
    name: "Pikachu",
    height: .4,
    weight: 6,
    types: ['field', 'fairy'],
    abilities:['static','lightingrod']
  },

  {
    name: "Blastoise",
    height: 1.6,
    weight: 85.5,
    types:['monster', 'water'],
    abilities:['rain-dish', 'torrent']
  },

  {
    name: "Charizard",
    height: 1.7,
    weight: 90.5,
    types:['monster', 'dragon'],
    abilities:['blaze', 'solar-power']
  }
];

function add(pokemon) {
   if (
     typeof pokemon === "object" &&
     "name" in pokemon &&
     "height" in pokemon &&
     "types" in pokemon
   ) {
     repository.push(pokemon);
   } else {
     console.log("pokemon is not correct");
   }
 }
 function getAll() {
   return repository;
 }
 function addListItem(pokemon){
   let pokemonList = document.querySelector(".pokemon-list");
   let listpokemon = document.createElement("li");
   let button = document.createElement("button");
   button.innerText = pokemon.name;
   button.classList.add("button-class");
   listpokemon.appendChild(button);
   pokemonList.appendChild(listpokemon);
   button.addEventListener ("click", function (showDetails){
     console.log(pokemon);
   })
 }
 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem
 };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon);
});

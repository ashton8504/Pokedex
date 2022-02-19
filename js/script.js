//IIFE//
let pokemonRepository = (function(){
  //Pokemon List Variables//
  let pokemonList = [
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

return {
    getAll:function() {
      return pokemonList;
    },
    add:function(pokemon){
      pokemonList.push(pokemon);
    }
    };
})();

// for(let i=0; i < pokemonRepository.length; i++){
//   if (pokemonList[i].height > 1){
//     document.write(pokemonList[i].name +  (' height: ' + pokemonList[i].height)  +  ( " Wow, that's a big Pokemon! " ))
  pokemonRepository.getAll().forEach(function(pokemon){
document.write( " " + pokemon.name + " " + pokemon.type + " " + pokemon.height)
});



console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());

// //Pokemon List Variables//
// let pokemonList = [
//   {
//   name: "Venusaur",
//   height: 2,
//   weight: 100,
//   types: ['grass','poison'],
//   abilities:['chlorophyll','overgrow']
// },
//
// {
//   name: "Pikachu",
//   height: .4,
//   weight: 6,
//   types: ['field', 'fairy'],
//   abilities:['static','lightingrod']
// },
//
// {
//   name: "Blastoise",
//   height: 1.6,
//   weight: 85.5,
//   types:['monster', 'water'],
//   abilities:['rain-dish', 'torrent']
// },
//
// {
//   name: "Charizard",
//   height: 1.7,
//   weight: 90.5,
//   types:['monster', 'dragon'],
//   abilities:['blaze', 'solar-power']
// }
// ]};

//for loop example//
// for(let i=0; i < pokemonList.length; i++){
//   if (pokemonList[i].height > 1){
//     document.write(pokemonList[i].name +  (' height: ' + pokemonList[i].height)  +  ( " Wow, that's a big Pokemon! " ))
//   }
// }

// //forEach()chlorophyll
//   pokemonList.forEach(function(user){
//     console.log(pokemon.name + pokemon.height);
//   })
//
//   pokemonList.forEach()

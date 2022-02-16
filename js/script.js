//Pokemon List//

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

for(let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 1){
    document.write(pokemonList[i].name +  (' height: ' + pokemonList[i].height)  +  ( " Wow, that's a big Pokemon! " ))
  }
}

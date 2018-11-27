// The purpose of the Adapter file
// is to make functions for fetch requests

function getTrainers(){
  return fetch(TRAINERS_URL) // First parameter in fetch is the URL
  .then(response => response.json()) // That gives us a JSON response
}

function addNewPokemon(trainerId){
  return fetch(POKEMONS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' // Tells our backend, we're sending JSON
    },
    body: JSON.stringify({
      trainer_id: trainerId
    })
  })
  .then(response => response.json())
}

function removePokemon(pokemonId){
  return fetch(`http://localhost:3000/pokemons/${pokemonId}`, {
    method: "DELETE"
  })
}

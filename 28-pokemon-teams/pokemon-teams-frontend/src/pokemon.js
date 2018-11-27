
function addPokemonHTML(event){
  const trainerId = parseInt(event.target.dataset.trainerId)
  // WE NEED TO FIND OUT WHAT TRAINER IS CALLING!
  addNewPokemon(trainerId)
  .then(json => {
    // Finding the div based upon the trainer id
    // debugger
    let ul = document.querySelector(`div[data-id="${json.trainer_id}"]`).children[2]
    // Going in and appending the content to the UL
    ul.innerHTML += generatePokemonLi(json)
  })
}

function deletePokemonHTML(event){
  // - Whenever a user hits `Release Pokemon` on a specific
  //   Pokemon team, that specific Pokemon should be released from
  //   the team.

  // I need to grab the information about this pokemon (its id)
  // REMOVE IT FROM THE DOM
  let pokemonId = event.target.dataset.pokemonId
  // debugger
  event.target.parentElement.remove()
  removePokemon(pokemonId)
  // I need to make some fetch request to remove it
}

function renderAllTrainers(json) {
  // Step three
  // Means where are we adding

  // And what should it look like
  json.forEach(trainer => {
    // make a div
    // add it to the main container
    const pokemonLists = trainer.pokemons.map(generatePokemonLi)
    const mainContainer = document.querySelector('main')
    mainContainer.innerHTML += `<div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
      <button class="add-pokemon" data-trainer-id="${trainer.id}">Add Pokemon</button>
      <ul>
        ${pokemonLists.join('')}
      </ul>
    </div>`
  })
}

function generatePokemonLi(pokemonJSON){
    // I want to generate a HTML string for a pokemon
    return `<li>${pokemonJSON.nickname} (${pokemonJSON.species}) <button class="release" data-pokemon-id="${pokemonJSON.id}">Release</button></li>`
}

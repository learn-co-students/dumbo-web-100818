const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// -***** When a user loads the page, they should see all
//   trainers, with their current team of Pokemon.

// 1. We want to listen for the DOM loading
// 2. In the DOM loading, we want to fetch all of our trainer data
// 3. Display it to the page
document.addEventListener('DOMContentLoaded', function(event){
  const mainContainer = document.querySelector('main')
  getTrainers().then(renderAllTrainers)

  // - Whenever a user hits `Add Pokemon` and they have
  //   space on their team, they should get a new Pokemon.
  // 1. I need to listen for a click on a specific button
  // 2. Whenever it is fired off, what should happen?
  // 3. fetch the pokemon we want to add
  // 4. Taking the result of fetch and adding it to the DOM
  mainContainer.addEventListener('click', function(event){

    // Specify when I'm click on an Add Pokemon Button
    if(event.target.className === "add-pokemon"){
      addPokemonHTML(event)
    } else if(event.target.className === "release"){
      deletePokemonHTML(event)
    }
  })
})

// GET 'http://localhost:3000/characters'
// List all of the characters

fetch('http://localhost:3000/characters')
.then(res => res.json())
.then(characters => {
  let characterList = document.getElementById("character-list")

  characters.forEach(character => {
    characterList.innerHTML += `<li data-id=${character.id} class="character">${character.name}</li>`
  })

  characterList.addEventListener('click', showCharacterDetail)

  function showCharacterDetail(event){
      if(event.target.className === "character") {
        let characterId = event.target.dataset.id

        // GET /character/:id
        fetch(`http://localhost:3000/characters/${characterId}`)
        .then(res => res.json())
        .then(character => {
          let characterDetail = document.getElementById("character-detail")

          characterDetail.innerHTML = `<h1>${character.name}</h1>
          <p>Their real name is: ${character.alias}</p>
          <p>Their power is: ${character.power}</p>
          `
        })
      }
  }
})

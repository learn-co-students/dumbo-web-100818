// On the page, there is a `div` with the id of `"dog-bar"`. On page load, make a fetch
// to get all of the pup objects. When you have this information, you'll need to add
// a `span` with the pup's name to the dog bar (ex: `<span>Mr. Bonkers</span>`).
document.addEventListener('DOMContentLoaded', function(){
  fetch("http://localhost:3000/pups")
  .then(res => res.json())
  .then(dogs => {
    // Now that I have the data, I want to display
    let dogBar = document.getElementById('dog-bar')

    // How to do this with createElement
    // dogs.forEach(function(dog){
    //   let dogSpan = document.createElement('span')
    //   dogSpan.innerText = dog.name // An array
    //   dogBar.appendChild(dogSpan)
    // })

    // How to do this with innerHTML
    dogs.forEach(function(dog){
      let dogSpan = `<span data-id=${dog.id}>${dog.name}</span>`
      dogBar.innerHTML += dogSpan
    })


    // Adding eventlistener on the dogBar
    dogBar.addEventListener('click', function(event){
      // Some way I must be selective, some way I must indicate this being a dog span
      // 1. data-id
      // 2. is it a span tag
      // 3. does it have an appropriate class
      if(event.target.tagName === "SPAN"){
        // http://localhost:3000/pups/3
        let dogId = event.target.dataset.id
        fetch(`http://localhost:3000/pups/${dogId}`)
        .then(res => res.json())
        .then(dog => {
          let dogInfo = document.getElementById('dog-info')
          dogInfo.innerHTML = `<img src=${dog.image}>
            <h2>${dog.name}</h2>
            <button>${dog.isGoodDog ? 'Good' : 'Bad'} Dog!</button>`



          dogInfo.addEventListener('click', event => {
            // If I am clicking the button, do this
            if(event.target.tagName === "BUTTON"){
              let currentText = event.target.innerText // Currently some text
              // Updates the DOM appropriately
              if(currentText === "Good Dog!"){
                event.target.innerText = "Bad Dog!"
              } else {
                event.target.innerText = "Good Dog!"
              }
            }
          })
        })
      }



      // debugger
      // If there is no innerText, it ain't no span
    })












  })
})

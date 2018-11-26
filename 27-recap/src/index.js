// - The dog should be put on the table as a table row. The HTML might look something like this `<tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>`


// - I will need to make a request to some route to get
// my data
// - From the request, turn it to json
// - Then fill the table
const someResponse = fetch("http://localhost:3000/dogs")


someResponse.then(response => response.json())
.then(function(json){
  console.log(json)
  // DOM - Document Object Model
  // Manipulating the user's view page

  // As far as manipulating the DOM
  // 1. Find what place to change the DOM
  const tableBody = document.getElementById('table-body')
  // 2. Then tell it what to look like or change
  // We want it to change so it shows all of the doggos

  json.forEach(dog => {
    // Go to the table body and add the data

    // innerHTML or document.createElement
    tableBody.innerHTML += `<tr><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button class="dog-edit" data-id="${dog.id}">Edit</button></td></tr>`
  })
})

// - Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.
// We need an event listener
// We can either add it on the Edit button
// Or on the table

document.addEventListener('DOMContentLoaded', (e) =>{
  let dogForm = document.getElementById('dog-form')
  const tableBody = document.getElementById('table-body')

  // When going through the approach of adding to the table
  // I need to know WHICH edit button I'm clicking
  // We can add a data-id
  tableBody.addEventListener('click', (e) => {
    // We need some conditional to check if we are clicking on an edit button
    if(e.target.className === "dog-edit"){
      fetch(`http://localhost:3000/dogs/${e.target.dataset.id}`)
      .then(res => res.json())
      .then(json => {
        // Finding the form
        // Filling in the values
        // **** This is where we ended ****
        // We are going to need to populate the form
        dogForm.elements[0].value = json.name
        dogForm.elements[1].value = json.breed
        dogForm.elements[2].value = json.sex
        dogForm.dataset.id = json.id // I want this for the patch
      })
    }
  })

  // *** Added this after lecture
  // Extrapolated the dogForm out of the event listener to reuse HTML
  dogForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    // ******** YOU CAN ASSUME YOUR CODE WORKS BUT I DID THIS TOTALLY AS
    // A WAY TO PREVENT PREEMPTIVE SUBMISSIONS
    // debugger
    if(e.target.dataset.id === undefined) { alert('select a dog');return }
    // ******* I AM ONLY ADDING THIS CONDITIONAL TO AVOID THE CODE TO EXECUTE BELOW



    // - On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).
    fetch(`http://localhost:3000/dogs/${e.target.dataset.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": dogForm.elements[0].value, // name
        "breed": dogForm.elements[1].value, // breed
        "sex": dogForm.elements[2].value // sex
      })
    })
    .then(res => res.json())
    .then(json => {
      // Now our form has submitted
      // Reset the form ** also not necessary **
      dogForm.reset()

      // How can we update the page???
      // 1. We either reload the entire table
      // Basically means we do exactly the same logic as we loaded the entire page
      fetch("http://localhost:3000/dogs").then(response => response.json())
      .then(function(dogs){
        const tableBody = document.getElementById('table-body')
        /// *** ONLY CHANGE BETWEEN WHAT IS ABOVE IN OUR INITIAL RENDER
        /// AND HERE is innerhtml being set back to "" before adding
        tableBody.innerHTML = ""
        dogs.forEach(dog => {
          tableBody.innerHTML += `<tr><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button class="dog-edit" data-id="${dog.id}">Edit</button></td></tr>`
        })
      })

      // 2. WE UPDATE THE DOM SPECIFICALLY TO THE ONE WE WANT
      // - We find the particular row (we could use the id of our JSON to find the button with the matching data-id)
      // - update each column appropriately
      // SINCE I PUT THE DATA-ID ON THE BUTTON, I HAVE TO SELECT THE GRANDPARENTELEMENT
      // let dogRow = document.querySelector(`button[data-id="${json.id}"]`).parentElement.parentElement
      //
      // dogRow.children[0].innerText = json.name
      // dogRow.children[1].innerText = json.breed
      // dogRow.children[2].innerText = json.sex
    })
  })

})




// How to debug: debugger
// How to make other requests than GET
// Briefly summarize Promises

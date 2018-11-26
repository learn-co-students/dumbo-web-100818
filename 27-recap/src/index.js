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
document.addEventListener('DOMContentLoaded', (e) =>{
  const tableBody = document.getElementById('table-body')

  tableBody.addEventListener('click', (e) => {
    // We need some conditional to check if we are clicking on an edit button
    if(e.target.className === "dog-edit"){
      fetch(`http://localhost:3000/dogs/${e.target.dataset.id}`)
      .then(res => res.json())
      .then(json => {
        // Finding the form
        // Filling in the values
        let dogForm = document.getElementById('dog-form')
        debugger
      })
    }
  })
  // console.log(tableBody)
})


// We need an event listener
// We can either add it on the Edit button
// Or on the table

// When going through the approach of adding to the table


// I need to know WHICH edit button I'm clicking
// We can add an id
















// - On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).
// - Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.


// How to debug: debugger
// How to make other requests than GET
// Briefly summarize Promises

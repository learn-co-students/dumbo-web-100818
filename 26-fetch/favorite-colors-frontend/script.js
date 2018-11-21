
fetch("http://localhost:3000/colors")
  .then(function(response){
    // console.log("request has been responded to")
    return response.json();
  }).then(function(json){
    makeColorsHappen(json)
  })  

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("colors").addEventListener("click", function(event) {
    
    fetch("http://localhost:3000/votes", 
      { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ color_id: 3 })
       }
      )
      .then(function(response){
        // console.log("request has been responded to")
        return response.json();
      }).then(function(json){
        // makeColorsHappen(json)
      }) 

  })
});

function makeColorsHappen(arrayOfColors) {
  const ul = document.getElementById("colors")
  arrayOfColors.forEach(function(color){
    const li = document.createElement("li");
    li.style = `background: #${ color.hex };`
    li.innerHTML = `id: ${ color.id} votes: ${ color.votes }`
    ul.appendChild(li)
  })
}




// console.log("before all the things")

// setInterval(getNewDog, 1000)


// function getNewDog(){
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(function(response){
//       // console.log("request has been responded to")
//       return response.json();
//     }).then(function(json){
//       makeDogHappen(json.message)
//     })  
// }


// function makeDogHappen(dogUrl) {
//   document.getElementById("pupper").src = dogUrl
// }



// console.log("after all the things (not really)")

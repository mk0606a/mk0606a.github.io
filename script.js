// var myName = "Mahdi"
//
// function sayHello(myName){
//   alert("Hello " + myName + "!")
// }
// sayHello(myName);


var animals = document.getElementsByClassName("animal")
var bestAnimal = document.getElementById("best animal")

function getBestAnimal(){
  // get the user's favorite animal
  // store the favorite animal as a variable
  var fave = prompt("What is your favorite animal?")
  console.log(fave)
  // change the best-animal to match the user's input
  var bestAnimal = document.getElementById("best animal")
  bestAnimal.textContent= fave;

// if the value of fave is empty
  if(fave ==''){
    // do something
    console.log("fave is not set")
    bestAnimal.textContent= "Dolphin"
    // if user does enter animal
  } else {
    // do something else
    console.log("fave is set")
    bestAnimal.textContent= fave;
  }
}
getBestAnimal()

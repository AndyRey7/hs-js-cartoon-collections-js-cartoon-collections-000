dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) {
  var string = '';
  var i = 0;
  for (i = dwarves.length/2; i < dwarves.length; i++) {
   string+=`${i+1}. ${dwarves[i]} ` 
  }
  return string;
}

function summonCaptainPlanet(planeteerCalls){
let array =[];
let i = 0;
for (i = 0; i < planeteerCalls.length; i++) {
 array.push(planeteerCalls[i].toUpperCase() + "!")
}
  return array
}

function longPlaneteerCalls(words) {
  if (words.length < 4) {
    return false
  } else if (words.length > 4) {
    return true
  }
}

function findTheCheese (foods) {
let TypesOfcheeses = ["cheddar", "gouda", "camembert", 'swiss'];
for (let i = 0; i < foods.length; i++) { for (let n = 0; n < TypesOfcheeses.length; n++) {
 if (foods[i] === cheeses[n]) {
    return TypesOfcheeses[n]
     }
   }
 } 
return 'no cheese!'
}
function wordsWithB(words) {
  let newArray = [];
  for (let i= 0; i > words.length; i++) {
    if(words[i][0] === 'b') {
      newArray.push(words[i])
    } 
  } return newArray;
}
myArray = [bob, jack]
myArray[0]
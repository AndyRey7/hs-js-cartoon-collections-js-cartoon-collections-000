dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) {
  var string = '';
  var i = 0;
  for (i = 0; i < dwarves.length; i++) {
   string+=`${i+1}. ${dwarves[i]} ` 
  }
  return string;
}

function summonCaptainPlanet(planeteerCalls){
let array =[];
let i = 0;
for (i = 0; i < planeteerCalls.length; i++) {
 array.push(planeteerCalls[i].toUpperCase()+"!")
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
let typesOfCheese = ['guoda', 'cheddar', 'camembert']  
for (let i = 0; i < foods.length; i++) {
  if (foods[i] === 'cheddar') {
    return 'cheddar'
  }
} 
return 'no cheese!'
}

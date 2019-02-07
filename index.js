var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here




function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}


function appendKitten(name, k2){
 k2 = kittens.slice() + name
 return k2
}
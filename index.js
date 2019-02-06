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


function appendKitten(name){
  return kittens.slice() + name
}
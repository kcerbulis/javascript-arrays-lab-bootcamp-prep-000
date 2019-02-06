var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here



var kit = new Array()

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

function removeFirstKitten(kit){
  kit = kittens.shift()
  kittens.unshift("Milo")
  return kit
}
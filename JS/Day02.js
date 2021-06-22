// Jun 22, 2021

// Objects
// Strings (Array of characters)
// - because it is an array, you can access each character by their indices

var personName = "juan delacruz "
var testValue = "test"

// String manipulation
// if you input anything within the double quotes ("") or single quotes (''), it's already a string.

// How to iterate over the characters of a string
console.log(personName.toLowerCase())
for(var i = 0; i < personName.length ; i++){
  console.log('char: ', personName[i])
}

// String concatenation (array addition)
console.log(personName + testValue)


// // An attempt to employ bubble sort algorithm in sorting the characters of a string.
// // This doesn't work in sorting the characters of a string because strings in JS are immutable.
// for(var i = 0; i < personName.length; i++) {
//   // This iterator can serve as the look ahead for comparison
//   for (var j = i + 1; i < personName ; j++) {
//     if(personName[i] > personName[j]) {
//       // they should swap values
//       var temp = personName[i]
//       personName[i] = personName[j] // swap the values
//       personName[j] = temp
//     }
//   }
// }

// literal array of characters
var personNameArray = []
for(var i = 0; i < personName.length; i++){
  personNameArray.push(personName[i])
}

// Bubble Sort
for(var i = 0; i < personNameArray.length; i++) {
  // This iterator can serve as the look ahead for comparison
  for (var j = i + 1; j < personNameArray.length - 1 ; j++) {
    console.log(personNameArray[i], ">", personNameArray[j])
    if(personNameArray[i] > personNameArray[j]) {
      console.log("true")
      // they should swap values
      var temp = personNameArray[i]
      personNameArray[i] = personNameArray[j] // swap the values
      personNameArray[j] = temp
      console.log(personNameArray[i], "==", personNameArray[j])
    }
  }
}

// console.log(personName)

console.log(personNameArray.join(''))

// [Extra] What will happen if you compare a string, integer, and decimal?
// [Extra] Even in python, strings are immutable.
// [Extra] What happens when an array index overflows in a loop? What happens when you access out-of-bounds value in an array?
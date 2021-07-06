// BRONZE 016: DTS; Submitted: Jul 06, 2021 07:36 PM; 100/100

// DTS
// Curls a roadside assistant from Facegram Ph will be launching their app next month and is need of a programmer that would help them with the said application.
// Task

// Your team is about to create a road assistant application and your task is to solve the distance ,time or speed of the user. You must create a versatile program that can automatically identify and solve the missing part of the equation of distance time and speed.
// For Languages aside from Python: return null otherwise: return None

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 


function dts (distance, time, speed){
  let answer = 0

  if (distance == 0) {
    answer = speed * time
    // +before a string converts it into a Number type
    return +answer.toFixed(2)
  } else if (time == 0) {
    answer = distance / speed
    return +answer.toFixed(2)
  } else if (speed == 0) {
    answer = distance / time
    return +answer.toFixed(2)
  } else return null
}

// https://javascript.info/number

console.log(dts(0,9,120))
console.log(dts(12,35,0))
console.log(dts(233,0,40))
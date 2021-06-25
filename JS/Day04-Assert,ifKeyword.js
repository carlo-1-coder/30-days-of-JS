// Assert function
// Truthy values: 1, true, {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity
// Falsy values: 0, false

// Inspecting Solution 2 from Day03-assignment.js using assert function

// Require assert
// const assert = require('assert')

// Using assert
timeConversion = (input) => {

  input = input.split(':')

  var hr = parseInt(input[0])
  var min = parseInt(input[1])
  var sec = parseInt(input[2].slice(0, 2))
  var period = input[2].slice(2,4)

  // Original if declaration
  // if (period == 'PM') {
  //   hr = hr + 12
  // }

  // if declaration using ternary operator
  // put null if you won't put anything in else statement
  period == 'PM' ? (hr = hr + 12) : null 

  // nested if declaration using ternary operator
  // if (hr == 12) {
  //   hr = 0
  // } else if (hr == 24) {
  //   hr = 12
  // }
  
  ; (hr == 12) ? (hr = 0) : ( (hr == 24) ? (hr = 12) : null )

// You can't assign if keyword to variables, but you can assign object, function, Boolean expression into a variable; you can assign if-ternary operation to a variable since it is a Boolean expression

  // if (hr < 10) {
  //   hr = '0' + hr
  // }

  hr = (hr < 10) ? ('0' + hr) : hr

  if (min < 10) {
    min = '0' + min
  }
  if (sec < 10) {
    sec = '0' + sec
  }
  var output = hr.toString() + ':' + min.toString() + ':' + sec.toString()  
  console.log(output)

  // Added this so that the assert function can compare 
  return output
}

timeConversion('12:24:24AM')
timeConversion('12:24:24PM')
timeConversion('11:24:00AM')
// assert(timeConversion('08:19:13PM') === '20:19:13')

// Output of assert after running it on nodeJS terminal: If true, it doesn't give any value; if it's wrong, it will throw up an error.

// Importing modules


// Do executes your statements first, before checking exit condition
// While checks exit condition before checking your condition
// Check difference between for, while, do while, do loops


// Day04 assignment 01:
// Apply Don't Repeat Yourself (DRY) principle to Day02-assignment.js

// Day04 assignment 02:
// 1. Create application that plays Rock-Paper-Scissors indefinitely (using while loop)
// 2. It should have a difficulty level based on user's winrate (e.g., if 90% winrate, 90% of the time, the user should win the game; involves manipulation of rng)
// 3. The user should be able to exit whenever he/she wants.
// 
// Flow: 
// Ask the user first his/her action
// Computer's action
// Record winner
// Ask if he/she wants to continue or exit
// If exit, it should show the results
// 
// Needs knowledge of inputting into JS
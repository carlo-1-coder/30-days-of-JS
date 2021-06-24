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
  
  (hr == 12) ? (hr = 0) : ( (hr == 24) ? (hr = 12) : null )

  if (hr < 10) {
    hr = '0' + hr
  }
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
// assert(timeConversion('08:19:13PM') === '20:19:13')

// Output of assert after running it on nodeJS terminal: If true, it doesn't give any value; if it's wrong, it will throw up an error.

// Importing modules
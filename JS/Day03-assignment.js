/**Day 03 assignment: Jun 24, 2021
 * Source of assignment: https://www.hackerrank.com/challenges/time-conversion/problem
 * Problem: Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * 
 * Note:
 * 1) 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * 2) 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * 
 * Example:
 * 1) s = '12:01:00PM'
 * Return '12:01:00'.
 * 2) s = '12:01:00AM'
 * Return '00:01:00'.
 * 
 * Function Description:
 * Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
 * It should return a new string representing the input time in 24 hour format.
 * timeConversion has the following parameter(s):
 * - string s: a time in 12 hour format
 * Returns
 * - string: the time in 24 hour format
 * 
 * Input Format:
 * A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
 * 
 * Constraints:
 * - All input times are valid.
 * 
 * Sample Input 0:
 * 07:05:45PM
 * Sample Output 0:
 * 19:05:45
 */

// // Solution 1: input time string is assigned to a variable
// // Input string here that represents time in 12-hour clock format (hh:mm:ssAM or hh:mm:ssPM)
// var input = '12:00:00AM'

// timeConversion = (output) => {
//   var hr = parseInt(input[0] + input[1])
//   var min = parseInt(input[3] + input[4])
//   var sec = parseInt(input[6] + input[7])
//   var period = input[8] + input[9]

//   if (period == 'PM') {
//     hr = hr + 12
//   }
//   if (hr == 12) {
//     hr = 0
//   } else if (hr == 24) {
//     hr = 12
//   }
//   if (hr < 10) {
//     hr = '0' + hr
//   }
//   if (min < 10) {
//     min = '0' + min
//   }
//   if (sec < 10) {
//     sec = '0' + sec
//   }
//   output = hr.toString() + ':' + min.toString() + ':' + sec.toString()  
//   console.log(output)
// }

// timeConversion()

// Solution 2: trying a more efficient solution, and place input inside a function
// Input string here that represents time in 12-hour clock format (hh:mm:ssAM or hh:mm:ssPM)

timeConversion = (input) => {

  input = input.split(':')

  var hr = parseInt(input[0])
  var min = parseInt(input[1])
  var sec = parseInt(input[2].slice(0, 2))
  var period = input[2].slice(2,4)

  if (period == 'PM') {
    hr = hr + 12
  }
  if (hr == 12) {
    hr = 0
  } else if (hr == 24) {
    hr = 12
  }
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
}

timeConversion('08:19:13PM')
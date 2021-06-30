// BRONZE 012: Agent 001; Submitted: Jun 30, 2021 08:20 AM; 100/100

// Agent 001
// They call him Bond, Jamie Bond, and right now Jamie needs your help. He's down to his last question in his big Computer Organization final but he's forgotten how to count in binary!
// Your task is to create a function that returns a list (or array) of binary numbers from 1 to n inclusive, where n is the decimal number that Jamie needs to convert.

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 


// First solution
// function binary(n) {
//   var binList = []

//   for (var i = 1 ; i < n + 1 ; i++) {
//     var bin = ''
//     var k = i

//     for (let j = 0; k != 0 ; j++) {
//       bin = (k % 2).toString() + bin
//       k = Math.floor(k / 2)
//     }  
//     binList.push(bin)
//   }
//   return binList
// }

// Second solution
function binary(n) {
  var binList = []
  for (let i = 1 ; i < n + 1 ; i++) {    
    binList.push(i.toString(2))
  }
  return binList
}

console.log(binary(10))
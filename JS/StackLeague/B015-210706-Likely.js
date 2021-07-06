// BRONZE 015: Likely; Submitted: Jul 06, 2021 07:14 PM; 100/100

// Likely
// Anna and her friends have devised a rating system where they score a person based on how likely they are to be friends with them.
// Given a list of integer ratings, determine whether Anna is likely to be friends with a certain group of people.
// Give your answer in the form of Likely if the sum is even, Unlikely if the sum is odd, and Inconclusive if it is neither.
// An empty list is considered as: [0]
// Examples
// Input: [0]
// Output: "Likely"

// Input: [2, -1]
// Output: "Unlikely"

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

// function likely (array) {
//   let sumArray = 0

//   if(array == []) {
//     return 'Likely'
//   }

//   array.filter( data => {
//     if (typeof data === 'number') {
//       sumArray += data
//     }
//   })

//   if (sumArray == 0 || sumArray % 2 == 0) {
//     return 'Likely'
//   } else if (sumArray % 2 == 1) {
//     return 'Unlikely'
//   } else return 'Inconclusive'

// }

// result is same with:

function likely (array) {
  let sumArray = 0

  array.filter( data => sumArray += data )

  if (sumArray % 2 == 0) {
    return 'Likely'
  } else if (sumArray % 2 == 1) {
    return 'Unlikely'
  } else return 'Inconclusive'
}



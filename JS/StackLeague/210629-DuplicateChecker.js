// BRONZE 008: Duplicate Checker; Submitted: Jun 29, 2021 1:51 PM; 100/100

// Duplicate Checker
// Problem

// (()((( )(((() (())
// (()((( )(((( )0 ))) (())
// A certain species of alien lifeforms can only understand english if it was encoded in their way of speaking. To do this the government hired you to make a system that would encode our basic characters. The goal is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Example
// abc ==> (((
// aaaa ==> ))))
// recede ==> ()()()

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function duplicateEncode(word){
  word = word.toLowerCase().split('')
  var output = []
  word.map(data => {
    if(word.indexOf(data) == word.lastIndexOf(data)) {
      output.push('(')
    } else output.push(')')
  })
  return output.join('')
}

console.log(duplicateEncode('ddDd'))
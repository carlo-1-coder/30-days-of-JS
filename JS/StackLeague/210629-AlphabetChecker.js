// BRONZE 006: Alphabet Checker; Submitted: Jun 29, 2021 12:20 PM; 100/100

// Alphabet Checker
// Write a function that returns the missing letter based on the alphabetical order.
// Rules:
// 	• The first letter can start from any point (e.g. ["e", "f", "g"])
// 	• The missing letter must be in between of the first and last element
// 	• If there is no missing letter, throw/raise the following errors/exception:
// 		○ C#(ArgumentException)
// 		○ Python(ValueError)
// 		○ JS/Java(Error)
// 		○ Php(Exception)
// The exception/error message should be "No missing letter"

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function check(letters) {
  var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
  var alphabetUpper = alphabetLower.split('').map(data => data.toUpperCase()).join('')
  
  var use
  if (letters[0] == letters[0].toLowerCase()) {
    use = alphabetLower
  } else {use = alphabetUpper}

  for (let i = 0; i < letters.length; i++) {
    var trueNextLetter = use.charAt(use.indexOf(letters[i]) + 1)

    if (letters[i + 1] == trueNextLetter) {
      continue
    } else if (i < letters.length - 1) {
      return trueNextLetter
    } else throw 'No missing letter'
  }
}
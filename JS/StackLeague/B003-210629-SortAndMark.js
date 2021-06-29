// BRONZE 003: Sort and Mark; Submitted: Jun 29, 2021 12:29 AM; 100/100

// Sort and Mark
// A new machine was invented to analyze handwriting, but it can only accept strings that have dashes in between the characters.
// You will be given an array of string(s). You must sort it alphabetically and then return the first value.
// The returned value must be a string, and have "---" between each of its letters.
// Remember to not remove or add anything to the array.
// Note: The strings should be Case Sensitive
// Expected Output: ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] ===> 'a---r---e'

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function sortAndMark(s) {
  let first = s.sort()[0]
  let output = first[0]
  for (let i = 1; i < first.length ; i++) {
    output += '---' + first[i]
  }
  return output
}
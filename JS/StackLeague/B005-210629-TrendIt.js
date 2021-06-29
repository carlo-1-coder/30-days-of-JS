// BRONZE 005: Trend It; Submitted: Jun 29, 2021 11:40 AM; 100/100
// Trend It
// Make the hashtag something good enough to trend.
// Here's the deal:
// 	• It must start with a hashtag (#).
// 	• All words must have their first letter capitalized.
// 	• If the final result is longer than 140 chars it must return false.
// 	• If the input or the result is an empty string it must return false.

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

// This function ignores test cases wherein the string only contains a symbol like #, because .toUpperCase() method throws an error at them.
function generateHashtag(str) {
  if(str == '') {
    return false
  } else {
    var output = str

    var words = output.split(' ')

    var newWords = words.map(data => {
      data = data.toLowerCase()
      data = data.replace(data[0],data[0].toUpperCase()) 
      return data
    })

    output = '#' + newWords.join('')

    if(output.length > 140) {
      return false
    } 

    return output
  }
}
// BRONZE 001: Make the Rabbit Hop; Submitted: Jun 28, 2021 11:34; 100/100
// Write a simple parser that will parse and hop the happy rabbit.
// Happy Rabbit has 4 commands, each 1 character long:
// 	• i makes the rabbit take one step forward or increments the value (initially 0)
// 	• d makes the rabbit take one step backward or decrements the value
// 	• s makes the rabbit take a long hop eqaul to the square of the total hops the rabbit made
// 	• o outputs the value into the return array
// 	• Invalid characters should be ignored.
// 	• Case insensitive
// happyRabbit.parse("iiisdoso") =- new int[] {8, 64};
// happyRabbit.parse(""ixxiisadofso") =- new int[] {8, 64};

// SOLUTIONSAMPLE TEST CASE

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function parse(data) {
  var value = 0
  var output = []
  for (var i = 0; i < data.length ; i++)
    switch (data[i]) {
      case 'i':
      case 'I':
        value++
        break
      case 'd':
      case 'D':
        value--
        break
      case 's':
      case 'S':
        value = value * value
        break
      case 'o':
      case 'O':
        output.push(value)
        break
      default:
        break
    }
  return output
}
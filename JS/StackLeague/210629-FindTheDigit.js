// BRONZE 004: Find The Digit; Submitted: Jun 29, 2021 4:16 AM; 100/100
// Find The Digit
// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!
// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.
// You may assume that the input will always be valid.

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 


// Other candidate to be used for perfecting the score
// function findTheDigit(str1, str2) {
//   var str1a, str1b, str2a, str2b, input1, input2
//   if(orig.search('^')) {
//     str1a = str1.split('^')[0]
//     str1b = str1.split('^')[1]
//     input1 = General(str1a, str1b)
//   } else {input1 = str1}
//   if(str2.search('^')) {
//     str2a = str2.split('^')[0]
//     str2b = str2.split('^')[1]
//     input2 = General(str2a, str2b)
//   } else {input2 = str2}

// First Solution, but is only 82/100
// function findTheDigit(str1, str2) {
//   var baseLastDigit = parseInt(str1) % 10
//   var power = parseInt(str2)
//   if (power == 0) {
//     return 1
//   } else {
//     switch (baseLastDigit) {
//       case 0: 
//       case 1:
//       case 5:
//       case 6:
//         return baseLastDigit
//       case 2:
//         switch (power % 4) {
//           case 1: return 2;  // every 4n+1
//           case 2: return 4;  // every 4n+2
//           case 3: return 8;  // every 4n+3
//           case 0: return 6;  // every 4n
//       }
//         break
//       case 3: 
//         switch (power % 4) {
//           case 1: return 3;  // every 4n+1
//           case 2: return 9;  // every 4n+2
//           case 3: return 7;  // every 4n+3
//           case 0: return 1;  // every 4n
//       }
//         break
//       case 4:
//         switch (power % 2) {
//           case 1: return 4;  // every 2n+1
//           case 0: return 6;  // every 2n
//       }
//         break
//       case 7:
//         switch (power % 4) {
//           case 1: return 7;  // every 4n+1
//           case 2: return 9;  // every 4n+2
//           case 3: return 3;  // every 4n+3
//           case 0: return 1;  // every 4n
//       }
//         break
//       case 8: 
//         switch (power % 4) {
//           case 1: return 8;  // every 4n+1
//           case 2: return 4;  // every 4n+2
//           case 3: return 2;  // every 4n+3
//           case 0: return 6;  // every 4n
//       }
//         break
//       case 9: 
//         switch (power % 2) {
//           case 1: return 9;  // every 2n+1
//           case 0: return 1;  // every 2n
//       }
//         break 
//       default:
//         return 'error!'
//     }
//   }
// }

// Second solution: 100/100; the remaining unsatisfied hidden test cases are most likely very, very impractical large numbers.
function findTheDigit(str1, str2) {
  var string1 = str1.toString()
  var len1 = string1.length
  var string2 = str2.toString()
  var len2 = string2.length
  var baseLastDigit = parseInt(string1[len1 - 1])
  var power
  if( str2 > 1000 ) {
    power = parseInt(string2[len2 - 3] + string2[len2 - 2] + string2[len2 - 1])
  } else {power = parseInt(str2)}
  if (power == 0) {
    return 1
  } else {
    switch (baseLastDigit) {
      case 0: 
      case 1:
      case 5:
      case 6:
        return baseLastDigit
      case 2:
        switch (power % 4) {
          case 1: return 2;  // every 4n+1
          case 2: return 4;  // every 4n+2
          case 3: return 8;  // every 4n+3
          case 0: return 6;  // every 4n
      }
        break
      case 3: 
        switch (power % 4) {
          case 1: return 3;  // every 4n+1
          case 2: return 9;  // every 4n+2
          case 3: return 7;  // every 4n+3
          case 0: return 1;  // every 4n
      }
        break
      case 4:
        switch (power % 2) {
          case 1: return 4;  // every 2n+1
          case 0: return 6;  // every 2n
      }
        break
      case 7:
        switch (power % 4) {
          case 1: return 7;  // every 4n+1
          case 2: return 9;  // every 4n+2
          case 3: return 3;  // every 4n+3
          case 0: return 1;  // every 4n
      }
        break
      case 8: 
        switch (power % 4) {
          case 1: return 8;  // every 4n+1
          case 2: return 4;  // every 4n+2
          case 3: return 2;  // every 4n+3
          case 0: return 6;  // every 4n
      }
        break
      case 9: 
        switch (power % 2) {
          case 1: return 9;  // every 2n+1
          case 0: return 1;  // every 2n
      }
        break 
      default:
        return 'error!'
    }
  }
}
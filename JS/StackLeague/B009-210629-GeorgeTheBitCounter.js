// BRONZE 009: George the Bit Counter; Submitted: Jun 29, 2021 12:20 PM; 100/100

// Submitted solution:
let countBits = function(n) {
  var binCount = 0
  for (i = 0; n != 0 ; i++) {
    (n % 2) == 1 ? binCount++ : binCount
    n = Math.floor(n / 2)
  }
  return binCount
};

// Alternative solution
// let countBits = function(n) {
//   var bin = []
//   for (i = 0; n != 0 ; i++) {
//     bin.unshift(n % 2)
//     n = Math.floor(n / 2)
//   }
  
//   let j = 0
//   bin.map(data => data == 1 ? j++ : null )
//   return j
// };
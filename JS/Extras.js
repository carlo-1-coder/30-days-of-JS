// Array method templates

// 1) Counting the number of index in an array that satisfies an if condition
// var winCount = 0
// var resultLog = ['WIN', 'TIE', 'WIN', 'LOSS']

// for (i = 0 ; i < resultLog.length ; i++) {
//   if (resultLog[i] == 'WIN')
//     winCount++
// }
// // output is 2

// 2) Finding a value from an array
// var playerInput = 'P'
// var winKey = ['PR', 'RS', 'SP']

// winKey.find( key => key[1] == playerInput) 
// // output is 'R' 



// Common Mistake Sources
// 1) Using return on a group of statements that spans multiple lines 
// Example:  
// var winKey = ['PR', 'RS', 'SP']
// var playerInput = 'P'
// return winKey.find( key => {
//   key[0] == playerInput
// })
// Answer: return keyword can't normally return something that spans multiple lines
// Correction:
// 1) put everything in one line
// var winKey = ['PR', 'RS', 'SP']
// var playerInput = 'P'
// return winKey.find( key => key[0] == playerInput)
// 2) use parentheses to wrap them all
// Justification:
// According to https://stackoverflow.com/questions/56065730/javascript-clean-way-to-have-a-return-statement-span-multiple-lines, you can do this by:
// 1) putting an object which you can then chain methods to
// 2) using parentheses to wrap around the lines that you will return

// Create a function template that does something when user makes an input outside of expectations of the computer
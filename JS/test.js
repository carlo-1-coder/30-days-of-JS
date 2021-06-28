// // var input = {
// //   cell1: {x: 20, y: 21},
// //   cell2: {x: 21, y: 21},
// //   cell3: {x: 22, y: 21}
// // }
// // var numInput = Object.keys(input).length
// // // console.log(input[window['cell' + 1]][x])
// // console.log(input['cell' + 1]['x'])

// var gridWidth = []

// var input = {
//   cell1: {x: 20, y: 21},
//   cell2: {x: 21, y: 21},
//   cell3: {x: 22, y: 21},
//   cell4: {x: 23, y: 21},
//   cell5: {x: 24, y: 21},
//   cell6: {x: 20, y: 22},
//   cell7: {x: 22, y: 22},
//   cell8: {x: 24, y: 22},
//   cell9: {x: 26, y: 22},
//   cell10: {x: 28, y: 22}
// }

//     var currentCell = {x: 20, y: 21}

//     switch (currentCell) {
//       case input.cell1:
//         gridWidth.push('0')
//         break
//       case input.cell2:
//         gridWidth.push('0')
//         break
//       case input.cell3:
//         gridWidth.push('0')
//         break
//       case input.cell4:
//         gridWidth.push('0')
//         break
//       case input.cell5:
//         gridWidth.push('0')
//         break
//       case input.cell6:
//         gridWidth.push('0')
//         break
//       case input.cell7:
//         gridWidth.push('0')
//         break
//       case input.cell8:
//         gridWidth.push('0')
//         break
//       case input.cell9:
//         gridWidth.push('0')
//         break
//       case input.cell10:
//         gridWidth.push('0')
//         break
//       default:
//         gridWidth.push('*')
//         break
//     }

// console.log(currentCell === input.cell1)

// var i = 1%4
// console.log(i)

// function findTheDigit(str1, str2) {
//   var str1a, str1b, str2a, str2b, input1, input2
//   if(str1.search('^')) {
//     str1a = str1.split('^')[0]
//     str1b = str1.split('^')[1]
//     // input1 = General(str1a, str1b)
//     console.log(str1a)
//     console.log(str1b)
//   } else {input1 = str1}
//   if(str2.search('^')) {
//     str2a = str2.split('^')[0]
//     str2b = str2.split('^')[1]
//     // input2 = General(str2a, str2b)
//     console.log(str2a)
//     console.log(str2b)
//   } else {input2 = str2}
// }

// findTheDigit(23^45,9^21,)

// console.log(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000% 10 )

str1 = 1234567890
string1 = str1.toString()
console.log('Length: ' + string1.length)
console.log(string1[string1.length-1])
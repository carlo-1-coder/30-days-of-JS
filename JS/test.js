// var input = {
//   cell1: {x: 20, y: 21},
//   cell2: {x: 21, y: 21},
//   cell3: {x: 22, y: 21}
// }
// var numInput = Object.keys(input).length
// // console.log(input[window['cell' + 1]][x])
// console.log(input['cell' + 1]['x'])

var gridWidth = []

var input = {
  cell1: {x: 20, y: 21},
  cell2: {x: 21, y: 21},
  cell3: {x: 22, y: 21},
  cell4: {x: 23, y: 21},
  cell5: {x: 24, y: 21},
  cell6: {x: 20, y: 22},
  cell7: {x: 22, y: 22},
  cell8: {x: 24, y: 22},
  cell9: {x: 26, y: 22},
  cell10: {x: 28, y: 22}
}

    var currentCell = {x: 20, y: 21}

    switch (currentCell) {
      case input.cell1:
        gridWidth.push('0')
        break
      case input.cell2:
        gridWidth.push('0')
        break
      case input.cell3:
        gridWidth.push('0')
        break
      case input.cell4:
        gridWidth.push('0')
        break
      case input.cell5:
        gridWidth.push('0')
        break
      case input.cell6:
        gridWidth.push('0')
        break
      case input.cell7:
        gridWidth.push('0')
        break
      case input.cell8:
        gridWidth.push('0')
        break
      case input.cell9:
        gridWidth.push('0')
        break
      case input.cell10:
        gridWidth.push('0')
        break
      default:
        gridWidth.push('*')
        break
    }

console.log(currentCell === input.cell1)
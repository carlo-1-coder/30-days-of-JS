console.log('Conway')
var initState 

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

var numInput = Object.keys(input).length
var numGen = 50
var width = 90
var length = 30

var gridWidth = []
var string = ''

// function inputSet () {
//   for(var i = 1; i < numInput + 1 ; i++) {
//     if(currentCell == input['cell' + i]['x'] && y == input['cell' + i]['y']) {
//       gridWidth.push('0')
//     } else continue
//   }
//   gridWidth.push('*')
// }

// All dead state
// Dead state = *
// Live state = 0
// for(let i = 1; i < numGen ; i++) {
  for(var y = 0; y < length ; y++) {
    for(var x = 0; x < width ; x++) {
      // inputSet()
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

      // if(x == input['cell1']['x'] && y == input['cell1']['y']) {
      //   gridWidth.push('0')
      // } else gridWidth.push('*')
    }
    gridWidth.forEach(a => string += a)
    console.log(string)
    gridWidth = []
    string = []
  }
// }

// console.clear()

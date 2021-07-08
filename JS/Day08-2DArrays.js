// 2D Arrays | Jul 08, 2021

// var array = [
//   [1,1,1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1,0,1],
//   [1,1,1,1,1,1,1,1,0,1],
//   [1,1,1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1,1,1]
// ]

// var coords = []
// // find the coordinates of 0
// for (var i = 0; i < array.length ; i++) {
//   // For looking into half of the array length
//   // for (var j = 0 ; j < array[0].length / 2 ; j++) {
//   for (var j = 0 ; j < array[0].length ; j++) {
//     if (array[i][j] === 0) {
//       coords.push({x: j + 1, y: i + 1})
//     }
//   }
// }

// console.log(coords)


var tile = [
  [1,0,0,1,1,1,1,1,1,1],
  [1,0,0,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,0,1,1,1,1,1,0,1],
  [1,1,1,1,1,1,1,1,0,1],
  [1,1,1,1,0,0,1,1,1,1],
  [1,1,1,1,0,0,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1]
]

function searchIslandTile(array, i, j) {
  // 1) lay all exit conditions first
  // check for boundaries
  if (i < 0 || i > array.length || j < 0 || j > array[0].length) {
    return 
  }
  if(array[i][j] === 1) {
    return
  }
  if(array[i][j] === 0) {
    array[i][j] = 1
  }

  console.log('i: ', i, 'j: ', j)
  // recursion body
  // horizontal to the right
  searchIslandTile(array, i, j+1);
  searchIslandTile(array, i, j-1);
  searchIslandTile(array, i+1, j);
  searchIslandTile(array, i-1, j);
}

var resultingCount = 0
for (var i = 0; i < tile.length ; i++) {
  for (var j = 0 ; j < tile[0].length ; j++) {
    if (tile[i][j] === 0) {
      searchIslandTile(tile, i , j);
      resultingCount += 1
    }
  }
}

searchIslandTile(tile, 0, 0)
console.log(resultingCount)
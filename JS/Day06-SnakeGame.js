const { clear } = require('console')


// Module imports
fs = require('fs')
readline = require('readline')
exec = require('child_process')

const ROW_LENGTH = 10
const COL_LENGTH = 10

// global variable matrix to hold the grid
var matrix = []
var snake = {
  x: 0,
  y: 0,
  foodConsumed: 0
}
var food = {
  x: 0,
  y: 0
}

function clearMatrix() {
  matrix = []
  for (var i = 0; i < ROW_LENGTH; i++)
    matrix.push(['.','.','.','.','.','.','.','.','.','.'])
}

function displayGrid(matrix) {
  clearMatrix()
  for(var i = 0; i < ROW_LENGTH ; i++) {
    var temp = ''
    matrix[snake.y][snake.x] = 'x'
    matrix[food.y][food.x] = '0'
    if(snake.y === food.y && snake.x === food.x) {
      var coords = generateFoodCoords()
      snake.x = coords.x
      snake.y = coords.y
      snake.foodConsumed += 1
    }
    for(var j = 0; j < COL_LENGTH; j++) {
      temp += matrix[i][j] + ' '
    }
    console.log(temp)
  }
}

function clearScreen() {
  for(var i = 0; i < process.stdout.getWindowSize()[1] ; i++) {
    console.log('\r\n')
  }
}

function generateFoodCoords() {
  while(true) {
    const x = parseInt(Math.random() * 10)
    const y = parseInt(Math.random() * 10)
    if(matrix[y][x] === ".") {
      return {
        y: y,
        x: x
    }
  }
}

function init() {
  clearMatrix()
  var coords = generateFoodCoords()

  var stdin = process.stdin
  stdin.setRawMode(true)
  stdin.resume()
  stdin.setEncoding('utf-8')
  
  // Initial grid display
  displayGrid(matrix)
  stdin.on('data', (key) => {
    if(key === '\u0003') {
      process.exit()
    }
    if(key === 'a') {
      // the player moves right
      if(snake.x > 0){
        snake.x -= 1
      }
    }
    if(key === 'd') {
      // the player moves left
      if(snake.x < COL_LENGTH - 1){
        snake.x += 1
      }
    }
    if(key === 'w') {
      // the player moves down
      if(snake.y > 0){
        snake.y -= 1
      }
    }
    if(key === 's') {
      // the player moves up
      if(snake.y < ROW_LENGTH - 1){
        snake.y += 1
      }
    }
    clearScreen()
    // update the frame
    displayGrid(matrix)
  })
}

// init()
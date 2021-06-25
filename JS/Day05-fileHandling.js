// Day 05: Jun 25, 2021 , 10:20 PM

// Day04-assignment02.js
// Notes:
// for inputting in terminal you need to use node.js and get stdin module

// File handling
// needs node.js to run

const fs = require('fs')
// import fs from 'fs';

var fileName = 'Day05-score.txt'
var content = fs.readFileSync(fileName, 'utf-8')
// var content = fs
// console.log(content)

// UTF-8: standard character encoding
// JS: you can show 
// b = '""'
// b = "''"
// Escape sequences:
// - backslash
// - single quote
// - double quote
// \b - backspace
// \f - form feed
// \n - line feed
// \r - carriage return
// escape sequences can be used in file handling

// // Writing files
filecontent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eos eveniet consequuntur et labore distinctio nesciunt, error perferendis numquam voluptatem soluta, non ipsa quaerat inventore nisi consectetur dolores cum unde?'

// // Overwrites the file
// fs.writeFileSync(fileName, filecontent)

// // Appends to the file
// fs.appendFileSync(fileName, filecontent)

// Extracting info from csv
var csvName = 'Day05-sample.csv'

csvContent = fs.readFileSync(csvName, 'utf-8')

// // Split by newline: standard
// rows = csvContent.split('\n')

// for(var i = 0 ; i < rows.length ; i++) {

// }

userData = []

// Split by newline using map method
csvContent.split('\n').map((data, index) => {
  if(index === 0) {
    return
  }
  column = data.split(',')
  if(data.length <= 1) {
    return
  }
  userData.push({
    'name'  : column[0].trim(),
    'gender'  : column[1].trim(),
    'email'  : column[2].trim(),
    'age'  : parseInt(column[3].trim())
  })
})

console.log(userData)
// [Extra] continue breaks the current iteration; continues the rest


b = JSON.stringify(userData)
console.log(b)

jsonString = '{"message": "sample message"}'
jsonData = JSON.parse(jsonString)
console.log(jsonData)

userDataJson = JSON.stringify(userData)
fs.writeFileSync("sample.json", userDataJson)

fileContentUpdate = JSON.parse(fs.readFileSync("sample.json", "utf-8"))
fileContentUpdate[1]['name'] = 'jdc'
fs.writeFileSync("sample.json", JSON.stringify(fileContentUpdate))
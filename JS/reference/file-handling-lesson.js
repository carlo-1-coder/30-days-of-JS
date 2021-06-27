
const fs = require('fs');


// readling files
var content = fs.readFileSync('score.txt', 'utf-8')
console.log(content)


// writing files
filecontent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

fs.writeFileSync('score.txt', filecontent)

// Reading CSV File
csvContent = fs.readFileSync('sample.csv', 'utf-8')

userData = []

// Split by newline
csvContent.split('\n').map((data, index)=>{
	if(index === 0){
		return
	}
	column = data.split(',')
	if(data.length <= 1) {
		return
	}
	console.log(column);
	userData.push({
		'name' : column[0].trim(),
		'gender': column[1].trim(),
		'email' : column[2].trim(),
		'age' : parseInt(column[3].trim())
	})
})


console.log(userData)


userDataJson = JSON.stringify(userData)
fs.writeFileSync("sample.json", userDataJson)

fileContentUpdate = JSON.parse(fs.readFileSync("sample.json", "utf-8"))
fileContentUpdate[1]['name'] = 'juan delacruz'
fs.writeFileSync('sample.json', JSON.stringify(fileContentUpdate))




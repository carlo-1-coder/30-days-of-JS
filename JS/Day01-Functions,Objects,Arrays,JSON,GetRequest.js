// Day 01: Jun 20, 2021

// // Types of Function Declaration:
// // 1) Classic declaration
// // 2) Arrow function

// // 1) Classic declaration
// // function <reserve keyword> + <function name> + parameters
// // { } for the logic clause or statements to execute
// // a return statement (OPTIONAL)

// // [Best practice] Documentation of functions
// /**
//  * It gets the sum of two integer variables a & b. 
//  * //@param {Data Type} variable description
//  * @param {Integer} a variable 1
//  * @param {Integer} b variable 2
//  */

// // [Tip] You don't have to add semicolon to every end of the line if it represents 1 statement; in fact, you don't have to mind using semicolons at all, except when you're typing multiple statements in one line, like you do in loops

// // functions
// function getSum(a, b) {
//   return a + b
// }

// sum = getSum(5, 5)
// console.log(sum)


// // Creating a new function
// prnt = (str) => { console.log(str) }

// prnt(sum)


// // 2) Arrow declaration
// // name (variable) = (param1, param2, ...) => {
// // statements to execute
// // (optional) return statement
// // }


// // JS Linter
// /**
//  * @param {Integer} a Integer 1
//  * @param {Integer} b Integer 2
//  */
// getSum2 = (a, b) => {
//   return a + b
// }

// // Arrow declaration of getSum3 function
// getSum3 = (a, b) => {console.log(a); return a + b}

// // Equivalent classic function declaration of getSum3
// function getSum3 (a, b) {
//   console.log(a)
//   return a + b
// }

// sum = getSum2(5, 5)
// console.log(sum)

// function uploadImage(imageName, successCallback, errCallback) {
//   console.log("uploading.. image: " +imageName)
//   var randomnumber = parseInt(Math.random()*10)
//   if(randomnumber%2 == 0) {
//     // success call
//     successCallback()
//   } else{
//     // fail
//     errCallback()
//   }
// }

// successCallback = () => {
//   alert("upload success!")
// }

// errCallback = () => {
//   alert("upload fail!")
// }

// uploadImage("sampleImage.png", successCallback, errCallback)


/** Objects
 * object format: key: value
 * 
 */
person = {
  name: "Davis",
  age: 10,
  address: {
    city: "quezon city",
    street: "10 ibp road",
    province: "metro manila"
  }
}

// JS Object Notation (JSON) format
person2 = {
  "name": 'clarence',
  "age": 0
}

// Accessing an object's property
pname = person["name"]
console.log("PNAME: ", pname)

age = person["age"]
console.log(age)

// When a property contains properties inside it, it is now an object.
// Two ways of accessing an object's property inside another object
// 1) using bracket notation
city = person["address"]["city"]
person_property = "address"
// 2) using dot notation
city = person.address.city

// You can put a var inside the brackets to make it dynamic
city = person[person_property].city
// Using dot notation on the var doesn't work because the compiler interprets it as you wanting to access the var as a property inside that object
city = person.person_property // result is undefined

console.log("PNAME: ", city)

console.log(person.address.city)

// Getting information from a website
url = 'https://jsonplaceholder.typicode.com/users'

successCallback = (value) => {
  console.log(value)
}

// Fetch is an asynchronous function = runs in the background
// .then() gets something from the Promise object 
// Promise objects are output by asynchronous functions: If it's "then"-able, then it returns a Promise.
users = fetch(url).then(successCallback)

// [Tip] If the arrow function only has one parameter, you can just remove the parentheses enclosing the parameter.
users = fetch(url).then(value => { console.log(value) })

// [Extra] await function needs to be called inside an async function
async function test() {
  resp = await fetch();
}

// Two kinds of variable scopes: Function scope & global scope
// Function scope
function f() {
  var a, b;
}

a = "test"; // this is the same as initializing a new "a" var; it doesn't call var "a" from function f.


// Q1: What is the output of function "f" in this case where the var inside a function is already initialized prior to the function call?
function f() {
  a = "test2"
  console.log(a)
}
f() // Answer: Output is test2.

// Back to fetch function discussion
/**HTTP Statuses
 * 200+ = the request succeeded
 *    202 = the request succeeded, but the data is incomplete
 * 400+ = the client failed at something (client-side error)
 *    400 = BadRequest (the client forgot some arguments in the api call)
 *    401 = Unauthorized (user/client is not authorized to access the resource)
 *    402 = 
 *    403 = forbidden
 *    404 = not found/ the resource doesn't exist 
 * 500+ = the server failed at something (server-side error)
 */



// [Extra] Not using semicolons in unnecessary places is okay since you don't have to worry about backwards compatibility. Typically, no one uses an (extremely) old version of browsers anyway; they are the ones that worry about backwards compatibility.

// Header formatting depends on the server but, it should contain 1) request body format, 2) server metadata/specs, 3) anything that the server wants you to know

// JSON Formatting
/**"Content-Type": "application/json" (standard content-type for HTTP entity-header for json)
 * body: '{"name": "clarence"}'
 */

users = fetch(url).then(value => {
  console.log(value.status)
  if(value.status === 200){
    alert("OK!")
    value.json().then(data => {
      console.log(data)
    })
  } else{
    alert("ERROR!")
  }
})

// Readable stream is a Promise-type object, thus it is then-able

var userList = [];

// Processing data from an object array
users = fetch(url).then(value => {
  console.log(value.status)
  if(value.status === 200){
    alert("OK!")
    value.json().then(data => {
      // map method iterates the function statements over all the indices, unlike filter method which returns an array
      // map method has parameters: 1) object data, 2) array index
      // you can just declare one variable in having a map function, and this will be the object data; but if you want to use the indices, you need to declare the index parameter in the map function declaration.
      data.map((data, index) => {
        userList.push(data)
      })
      // [Extra] in a console.log, + and comma have a similar effect, except that the comma places a space after each argument in console log, and + appends the variable to the string, making it a single argument, while comma adds another argument, but as I said, it shows a similar effect
      console.log("User list call from Fetch: ", userList)
    })
  } else{
    alert("ERROR!")
  }
})


// [Extra] 

// Because fetch is an asynchronous function, upon first run of the page, the userList will not have any value, but upon complete loading of the page, the userList variable will be updated and have the output as instructed by the fetch function. You can easily test this by outputting the length (.length) of userList array.
console.log("User list call from outside: ", userList)

async function test() {
  var users = await fetch(url)
  return users
}

test().then(response => {
  console.log(response)
})

async function test231() {
  var users = await fetch(url)
  return users.json()
}

test231().then(response => {
  console.log(response)
})

/**Assignment: 
 * Display a list of all uncommon black cards, including multi-colored cards
 * https://api.magicthegathering.io/v1/cards
 * see docs.magicthegathering.io
 * Display format: name manacost //displaying it consecutively is enough
 * DueDate: Jun 21, 2021, 8PM
 * Use Firefox for better handling of api (application program interface)
 * Use a function, callback, object, API call
 * If the API call caught an error, display an alert. (use HTTP statuses)
 */ 

/**Extra: Read more on variable scopes (what's the output when an existing global var is reinitialized in a function scope)
 * 
 */


// Browser query is just an API call

// Online JSON parser: json.parser.online.fr
// Assignment: Display all uncommon black cards (including multi-colored cards) from the given API in the format of "name" "manaCost"

// Source URL
url = 'https://api.magicthegathering.io/v1/cards'

// async function test() {
//   var users = await fetch(url)
//   return users.json().then(value => {
//     console.log(users.status)
//     value.map((name, index) => {
//       userList.push(name)
//     })
//     console.log("User list call from Fetch: ", userList)
//   })
// }

// test()

      // var output = data.cards.map((name, index) => {
      //   userList.push(name)
      // })

console.log("These are all the uncommon black cards from https://api.magicthegathering.io/v1/cards.")

fetch(url).then(value => {
  if(value.status === 200){
    alert("API call is successful!")
    value.json().then(data => {
      // You can use map() instead of filter().
      var output = data.cards.filter((a) => {
        if( (a.manaCost.search('{B}') == -1) || (a.rarity != "Uncommon") ) {
          return false
        } 
        console.log(a.name, a.manaCost)
      })
    })
  // } else{ errorCallback } - my own answer, here's the correct answer:
  } else{ errorCallback() }
})

errorCallback = () => {
  alert("Something is not right ...")  
}

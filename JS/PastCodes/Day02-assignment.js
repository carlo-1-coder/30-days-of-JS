// Day 02 Assignment, Jun 23, 2021
// Level 1 sort: Sort the cards by ascending color code (Black = B, then Green = G, then Blue = U, etc.) alphabetically 
// Level 2 sort: Sort by increasing manaCost 
// Display "name" "manaCost"

// Source URL
url = 'https://api.magicthegathering.io/v1/cards'

console.log("These are all the cards from https://api.magicthegathering.io/v1/cards sorted alphabetically based on their color codes (Black = B, Green = G, Red = R, Blue = U, White = W), then sorted by increasing manaCost.")

var allBCards = []
var allGCards = []
var allRCards = []
var allUCards = []
var allWCards = []
var allCCards = []

// fetch(url).then(response => {
//   response2 = response.json()
//   // if(response.status === 200){
//   //   var response2 = response.clone().json()
//   // } else{ errorCallback() }
// })

fetch(url).then(response => {
  response.json().then(data => {
    var output = data.cards
    console.log("These are the list of all cards from the URL:")
    console.log(output)
    // For putting all black cards in allBCards
    output.map((a) => {
      if( a.manaCost.search('{B}') >= 0 ) {
        allBCards.push(a)
        return true
      } else { 
        return false
      }
    })
    // For putting all black cards in allGCards
    output.map((a) => {
      if( a.manaCost.search('{G}') >= 0 ) {
        allGCards.push(a)
        return true
      } else { 
        return false
      }
    })
    // For putting all black cards in allRCards
    output.map((a) => {
      if( a.manaCost.search('{R}') >= 0 ) {
        allRCards.push(a)
        return true
      } else { 
        return false
      }
    })
    // For putting all black cards in allUCards
    output.map((a) => {
      if( a.manaCost.search('{U}') >= 0 ) {
        allUCards.push(a)
        return true
      } else { 
        return false
      }
    })
    // For putting all black cards in allWCards
    output.map((a) => {
      if( a.manaCost.search('{W}') >= 0 ) {
        allWCards.push(a)
        return true
      } else { 
        return false
      }
    })


    // All Black (B) Cards
    console.log("All Black (B) Cards: ")
    console.log(allBCards)
    for (let i = 0; i < allBCards.length; i++) {
      for(let j = 0; j < allBCards.length - 1 ; j++) {
        if(allBCards[i].cmc < allBCards[j].cmc) {
          var temp = allBCards[i]
          allBCards[i] = allBCards[j]
          allBCards[j] = temp
        }
      }
    }
    for (let i = 0; i < allBCards.length; i++) {
      for(let j = 0; j < allBCards.length - 1 ; j++) {
        if(allBCards[i].cmc <= allBCards[j].cmc) {
          if(allBCards[i].name < allBCards[j].name) {
            var temp = allBCards[i]
            allBCards[i] = allBCards[j]
            allBCards[j] = temp
          }
        }
      }
    }
    for (let i = 0; i < allBCards.length; i++) {
      console.log(allBCards[i].name, allBCards[i].manaCost)
    }

    // All Green (G) Cards
    console.log("\nAll Green (G) Cards: ")
    console.log(allGCards)
    for (let i = 0; i < allGCards.length; i++) {
      for(let j = 0; j < allGCards.length - 1 ; j++) {
        if(allGCards[i].cmc < allGCards[j].cmc) {
          var temp = allGCards[i]
          allGCards[i] = allGCards[j]
          allGCards[j] = temp
        }
      }
    }
    for (let i = 0; i < allGCards.length; i++) {
      for(let j = 0; j < allGCards.length - 1 ; j++) {
        if(allGCards[i].cmc <= allGCards[j].cmc) {
          if(allGCards[i].name < allGCards[j].name) {
            var temp = allGCards[i]
            allGCards[i] = allGCards[j]
            allGCards[j] = temp
          }
        }
      }
    }
    for (let i = 0; i < allGCards.length; i++) {
      console.log(allGCards[i].name, allGCards[i].manaCost)
    }

    // All Red (R) Cards
    console.log("\nAll Red (G) Cards: ")
    console.log(allRCards)
    for (let i = 0; i < allRCards.length; i++) {
      for(let j = 0; j < allRCards.length - 1 ; j++) {
        if(allRCards[i].cmc < allRCards[j].cmc) {
          var temp = allRCards[i]
          allRCards[i] = allRCards[j]
          allRCards[j] = temp
        }
      }
    }
    for (let i = 0; i < allRCards.length; i++) {
      for(let j = 0; j < allRCards.length - 1 ; j++) {
        if(allRCards[i].cmc <= allRCards[j].cmc) {
          if(allRCards[i].name < allRCards[j].name) {
            var temp = allRCards[i]
            allRCards[i] = allRCards[j]
            allRCards[j] = temp
          }
        }
      }
    }
    for (let i = 0; i < allRCards.length; i++) {
      console.log(allRCards[i].name, allRCards[i].manaCost)
    }

    // All Blue (U) Cards
    console.log("\nAll Blue (U) Cards: ")
    console.log(allUCards)
    for (let i = 0; i < allUCards.length; i++) {
      for(let j = 0; j < allUCards.length - 1 ; j++) {
        if(allUCards[i].cmc < allUCards[j].cmc) {
          var temp = allUCards[i]
          allUCards[i] = allUCards[j]
          allUCards[j] = temp
        }
      }
    }
    for (let i = 0; i < allUCards.length; i++) {
      for(let j = 0; j < allUCards.length - 1 ; j++) {
        if(allUCards[i].cmc <= allUCards[j].cmc) {
          if(allUCards[i].name < allUCards[j].name) {
            var temp = allUCards[i]
            allUCards[i] = allUCards[j]
            allUCards[j] = temp
          }
        }
      }
    }
    for (let i = 0; i < allUCards.length; i++) {
      console.log(allUCards[i].name, allUCards[i].manaCost)
    }

    // All White (W) Cards
    console.log("\nAll White (W) Cards: ")
    console.log(allWCards)
    for (let i = 0; i < allWCards.length; i++) {
      for(let j = 0; j < allWCards.length - 1 ; j++) {
        if(allWCards[i].cmc < allWCards[j].cmc) {
          var temp = allWCards[i]
          allWCards[i] = allWCards[j]
          allWCards[j] = temp
        }
      }
    }
    for (let i = 0; i < allWCards.length; i++) {
      for(let j = 0; j < allWCards.length - 1 ; j++) {
        if(allWCards[i].cmc <= allWCards[j].cmc) {
          if(allWCards[i].name < allWCards[j].name) {
            var temp = allWCards[i]
            allWCards[i] = allWCards[j]
            allWCards[j] = temp
          }
        }
      }
    }
    for (let i = 0; i < allWCards.length; i++) {
      console.log(allWCards[i].name, allWCards[i].manaCost)
    }

  })
})
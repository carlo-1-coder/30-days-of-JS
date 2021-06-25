// Day04 assignment 01:
// Apply Don't Repeat Yourself (DRY) principle to Day02-assignment.js

  // Day 02 Assignment, Jun 23, 2021
  // Level 1 sort: Sort the cards by ascending color code (Black = B, then Green = G, then Blue = U, etc.) alphabetically 
  // Level 2 sort: Sort by increasing manaCost 
  // Display "name" "manaCost"

// Source URL
url = 'https://api.magicthegathering.io/v1/cards'

console.log("These are the list of all cards from the URL:")


var colorSet = ['Black', 'Green', 'Red', 'Blue', 'White']
var colorCodeSet = ['B', 'G', 'R', 'U', 'W']

function output(srcArray) {
  for(i = 0 ; i < colorCodeSet.length ; i++) {

    // For putting all cards of a certain color in their designated array
    var currentColor = ( window[colorCodeSet[i] + 'Cards'] = [] )
    srcArray.filter((a) => {
      if( a.manaCost.search('{' + colorCodeSet[i] + '}') >= 0 ) {
        currentColor.push(a)
        return true
      }
    })

    // For sectioning MTG cards based on color identities
    console.log('\n\nAll ' + colorSet[i] + ' (' + colorCodeSet[i] + ') Cards: ')
    console.log(currentColor)

    // For creating the sortKey property, the sort key that will be used to efficiently bubble sort the cards.
    currentColor.map( data => {
      data['sortKey'] = data.colorIdentity + data.cmc + data.name
    })

    // Sorting algorithm
    for(var j = 0 ; j < currentColor.length ; j++) {
      for(var k = j + 1; k < currentColor.length ; k++) {
        if(currentColor[j]['sortKey'] > currentColor[k]['sortKey']) {
          var temp = currentColor[j]
          currentColor[j] = currentColor[k]
          currentColor[k] = temp
        }
      }
    }

    // For displaying the cards' name and manaCost
    currentColor.map(card => {
      console.log(card.name, card.manaCost) })
  }
}

fetch(url).then(response => {
  response.json().then(data => {
    console.log(data.cards)
    console.log("\nThese are all the cards from https://api.magicthegathering.io/v1/cards sorted alphabetically based on their color codes (Black = B, Green = G, Red = R, Blue = U, White = W), then sorted by increasing manaCost.")

    output(data.cards)
  })
})
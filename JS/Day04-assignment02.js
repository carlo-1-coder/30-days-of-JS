// Day04 assignment 02:
// 1. Create application that plays Rock-Paper-Scissors indefinitely (using while loop)
// 2. It should have a difficulty level based on user's winrate (e.g., if 90% winrate, 90% of the time, the user should win the game; involves manipulation of rng)
// 3. The user should be able to exit whenever he/she wants.
// 
// Flow: 
// Ask the user first his/her action
// Computer's action
// Record winner
// Ask if he/she wants to continue or exit
// If exit, it should show the results
// 
// Needs knowledge of inputting into JS


/**Code components
 * 1) Introduction to the app
 * 2) Set win rate
 * 3) Prompt user for his/her input
 * 4) Read user input
 * 5) Computer decides & outputs action based on winrate selected
 * 6) Prompt user if he/she wants to CONTINUE or EXIT
 *    6a) CONTINUE: Return to (3)
 *    6b) EXIT: Show results > Proceed to Exit
 */

// 1) Introduction to the app
alert('Good day!! Welcome to Virtual Rock-Paper-Scissors.\n')
alert('You have been selected to be a beta-tester of this one-of-a-kind and revolutionary game.')

var pName = window.prompt('Kindly enter your nickname: ')
alert('Hello ' + pName + '!');

// 2) Set win rate
var winRate = window.prompt('Enter value between 0 and 100 setting the win rate of your nemesis, where 0 means you will always fail, while 100 means you will always succeed against your nemesis: ')

var winKey = ['PR', 'RS', 'SP']
var tieKey = ['PP', 'RR', 'SS']
var lossKey = ['PS', 'RP', 'SR']

function nemesisRNG (playerInput, winCount, winLossTotal) {
  var influence = ( 1 - (winCount / winLossTotal) ) / 2
  var output = Math.random() + influence 
  return output > 0.5 ?  winKey.find( key => {
    key[0] == playerInput
  })[1] : lossKey.find(key => {
    key[0] == playerInput
  })[1]
}; 

var round = 1
var resultLog = []
// 6a) CONTINUE: Return to (3)
do {
  // 3) Prompt user for his/her input & 4) Read user input
  // Note round #
  var player = window.prompt('                                                 Round ' + round + '\n\nType the first letter of your choice:\nR for Rock\nP for Paper\nS for Scissors')


  // 5) Computer decides & outputs action based on winrate selected
  var nemesis = nemesisRNG()
  
  var decisionKey = player + nemesis
  var resultKey;

  if( winKey.includes(decisionKey) ) {
    resultKey = 'WIN'
  } else if( lossKey.includes(decisionKey) ) {
    resultKey = 'LOSS'
  } else resultKey = 'TIE' 

  alert('You picked: ' + player + '           ' + pName + '\'s nemesis: ' + nemesis)

  resultLog.push(resultKey)
  
  // 6) Prompt user if he/she wants to CONTINUE or EXIT
  var continueGame = confirm('Do you want to continue beating the hell out of your nemesis? \nClick "OK" if yes. \n\nIf you want to give up and accept defeat, click "Cancel".')

  round++

} while (continueGame)

// 6b) EXIT: Show results > Proceed to Exit

summary = () => {
  for(i = 0; i < resultLog.length; i++) {
    console.log(`Round ${i}: ${resultLog[i]}`)
  }
}

console.log('Summary of battle results of ' + pName + ' against his nemesis:')
summary()
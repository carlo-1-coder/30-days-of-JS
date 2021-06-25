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
 * 3) Prompt user for his/her input/action?
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
var pInput = window.prompt('')
alert()
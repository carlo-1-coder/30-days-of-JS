// BRONZE 002: Nigelius - Mobile Legends; Submitted: Jun 29, 2021 12:05 AM; 100/100
// Nigelius is a new Hero in Mobile Legends, and you are invited for an interview by Shanghai Moonton Technology for a game developer position. Nigelius the Bloodborn has a passive skill that increases his damage for every 250 HP he has, and your task is to code this skill. The increase goes as follows:
// at  250 HP    +1 damage
// at  500 HP    +4 damage
// at  750 HP    +9 damage
// at 1000 HP    +16 damage
// at 1250 HP    +25 damage
// .
// .
// .
// at 2000 HP    +64 damage
// at 2250 HP    +81 damage
// ...etc

// That is, we determine how many chunks of 250 HP Nigelius has, and then we square it to get the bonus damage. Write a function getBonusDamage given the current health of Nigelius.
// Nigelius does not get fractional damage bonuses, in other words, 500 and 600 HP will give him +4 bonus damage. 749 HP will also give him +4 bonus damage.

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function getBonusDamage(currentHP) {
  var numHPChunk = Math.floor(currentHP / 250)
  return numHPChunk * numHPChunk
}
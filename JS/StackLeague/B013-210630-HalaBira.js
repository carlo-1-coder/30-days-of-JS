// BRONZE 013: Hala Bira!; Submitted: Jun 30, 2021 09:46 AM; 100/100

// Hala Bira!
// Hala Bira
// Usage of hala
// 	1. to frighten someone for having done something wrong
// 	2. to cheer someone on, especially during parades (see: Hala Bira!)
// 	3. to express shock or surprise
// Bira made her fellow Filipinos, and especially her Ilonggo brethren, proud when she wowed the Universe with her grace, charm, and determination. During the telecast of Miss Universe, Hala - King of Asgard - took one look at her and fell in love.
// To help him keep the memory of her near without going to Earth, he has commissioned you to create a program that receives a list of strings and returns all mentions of the two of them together.
// Example
// 	1. hala(["halabira"]) will output ["halabira"].
// 	2. hala([]) will output [].
// Things to Note
// 	1. All values are space and case-insensitive
// 	2. Tests will fail if your algorithm is too slow

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function hala(list) {
  return list.filter(data => (data.toLowerCase().replace(/ /g, '').includes('hala') && data.toLowerCase().replace(/ /g, '').includes('bira')) ? data : null)
}

console.log(hala(['halabira','h al a bira','Hello halabira','ha  la   bi   ra','hala','bira']))
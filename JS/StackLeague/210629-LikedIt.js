// BRONZE 007: Liked it; Submitted: Jun 29, 2021 1:25 PM; 100/100

// Liked it
// Linda wants to create a blog site that people can like her posts. She tasked you to create a function that takes an array containing the names of people who likes the posts on her blog. It must return the display text as shown:
// [] => Nobody likes this post
// ["Iko"] => Iko likes this post
// ["Danielle", "Liza", "Sue"] => Danielle, Liza and Sue like this post
// ["Ken", "James", "John", "Seb"] => Ken, James and 2 others like this post

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function likedIt(names) {
  if (names.length == 0) {
    return 'Nobody likes this post'
  } else if (names.length == 1) {
    return names + ' likes this post'
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this post`
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this post`
  } else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this post`
}
// SILVER 002: Squared Divisors; Submitted: Jun 30, 2021 09:46 AM; 100/100

// Squared Divisors
// Squared divisors tackles the question which is does a number exist where in the sum of its squared divisors all is a square?
// Let us say divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square number!
// Your task

// Create a function given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
// The result will be an array of arrays or of tuples or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
// Examples


// • list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// • list_squared(42, 250) --> [[42, 2500], [246, 84100]]

// From <https://stackleague.com/dashboard/challenge/4lhRsVfRC5Q6usgAOd3pBIquKlQmreWaEnfV6XXrEAM> 
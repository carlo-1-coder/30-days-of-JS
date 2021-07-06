// SILVER 006: Linear duplicates; Submitted: Jul 01, 2021 09:46 AM; 100/100

// Linear duplicates
// Background:
// Consider a sequence u where u is defined as follows:
// 	1. The number u(0) = 1 is the first one in u.
// 	2. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// 	3. There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
// Task:
// Given parameter n the function db_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).
// (Check sample test cases)
// Example:
// dbl_linear(10) should return 22
// Note:
// Focus attention on efficiency

// From <https://stackleague.com/dashboard/challenge/4lhRsVfRC5Q6usgAOd3pBIquKlQmreWaEnfV6XXrEAM> 
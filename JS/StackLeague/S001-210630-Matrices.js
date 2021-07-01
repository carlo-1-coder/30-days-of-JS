// SILVER 001: Matrices; Submitted: Jun 30, 2021 09:46 AM; 100/100

// Matrices
// Your task is to determine the determinant of a matrix (represented by a 2D array N x N).
// A 1x1 matrix |a| has determinant a.
// A 2x2 matrix [ [a, b], [c, d] ] or
// |a b| |c d|
// has determinant: ad - bc.
// The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.
// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or
// |a b c|
// |d e f|
// |g h i|
// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:
// |- - -| |- e f| |- h i|
// Note the alternation of signs.
// The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:
// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

// From <https://stackleague.com/dashboard/challenge/4lhRsVfRC5Q6usgAOd3pBIquKlQmreWaEnfV6XXrEAM> 

function determinant(m) {
  // return the determinant of the matrix passed in
};
// # Prompt:  Count the number of unique paths to travel from the top left
// #          corder to the bottom right corner of a lattice of M x N squares.
// #
// #          When moving through the lattice, one can only travel to the
// #          adjacent corner on the right or down.
// #
// # Input:   m {Integer} - rows of squares
// # Input:   n {Integer} - column of squares
// # Output:  {Integer}
// #
// # Example: input: (2, 3)
// #
// #          (2 x 3 lattice of squares)
// #           __ __ __
// #          |__|__|__|
// #          |__|__|__|
// #
// #          output: 10 (number of unique paths from top left corner to bottom right)
// #
// # Resource: https://projecteuler.net/problem=15
// python


const latticePath = (m,n) => {
  if(n==0 || m==0){
    return 1
  }
  return latticePath(m,n-1) + latticePath(m-1,n)
}

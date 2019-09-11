// Given a positive integer `n`, return an array of all the binary strings of length n that *DO NOT* contain consecutive `1`s.
//
// ```
// Input: n (Integer)
// Output: [Str] (Array of Strings)
// ```
//
// # Example
//
// ```
// Input: 2
// Output: ["00", "01", "10"]
//
// Input: 3
// Output: ["000", "001", "010", "100", "101"]
// ```
//
// # Constraints
//
// ```
// Time Complexity: O(2^N)
// Auxiliary Space Complexity: O(2^N)
// ```
//
// The order of the strings in the array does not matter.
//
// Use recursion to solve this problem.
//

function NonConsecutiveOnes(n) {
  let result = [];

  function recurse(substr) {
    if(substr.length === n) {
      result.push(substr);
      return;
    }
    recurse(substr + 0);
    if(substr[substr.length - 1] !== "1") {
      recurse(substr + 1)
    }
  }

  recurse("");
  return result;
}

// Given a positive integer (including 0), convert it to its hexadecimal representation
// #### Example:
//
// ```
// 0 => '0'
// 1 => '1'
// 2 => '2'
// 3 => '3'
//
// 9 => '9'
// 10 => 'a'
// 11 => 'b'
//
// 15 => 'f'
// 16 => '10'
//
// 30 => '1e'
// 31 => '1f'
// 32 => '20'
//
// 255 => 'ff'
// 256 => '100'
// ```
//
// # Constraints
//
// ```
// Time Complexity: O(log(N))
//
// Space Complexity: O(log(N))
// ```
//
//
// Please use pure recursion to solve this problem.
//
// Do not use your language's native integer to string converters.


const intToHex = (int) => {
  let hex = '0123456789abcdef'
  let ans = ''
  let remainder
  while(int>16){
    remainder  = int%16
    ans = hex[remainder] + ans
    ans = (ans-remainder) / 16
  }
  ans = hex[int%16] + ans
  return ans
}

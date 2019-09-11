/*
 *  Homework 05 - Dynamic Programming
 *
 *  Instructions: Dynammic programming takes a lot of practice to recognize as
 *                well as develop algorithms. Thus we will be working on a few
 *                different problems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subproblems - Memoization
 *      				  Recursion sometimes calls subproblems repeatedly. These repeated
 *                calls lead to inefficient computations and an exponential time
 *                complexity.
 *
 *      			(2) Optimal substructure - Tabulation
 *      					The solution of a larger problem can be solved using
 *      					solutions of its subproblems.
 *
 *
 *  Problem:  Coin Sum
 *
 *            Given an array of coins and a target total, return how many
 *            unique ways there are to use the coins to make up that total.
 *
 *  Input:    coins {Integer Array}, total {Integer}
 *  Output:   {Integer}
 *
 *
 * 3 - 1, 2, 3
 * #5 - 0, 1, 2, 3, 4, 5   # of ways to get to this number
 *   1  1  1  1  1  1  1
 *   2  1  1  2
 *   3  1  1  2  3  4  5
 *
 *    store counts so far 0 to n
 *    trying to calculate for n:
 *
 *      take 1st coin (1), x = subtract from n
 *      look at counts, and see how many paths to x, add that to n
 *      take next coin (loop), look at counts to find paths to n - coin, add that
 *      ...
 *
 *    if coin value is greater than n, count doesn't change
 *
 *
 * coin value
 *
 *  Example:  Input:  [1,2,3], 4
 *
 *                    1+1+1+1
 *                    1+3
 *                    1+1+2
 *                    2+2
 *
 *
 *                    [1,2,3]  5
 *                    1+1+1+1+1
 *                    1+1+1+2
 *                    1+1+3
 *                    2+2+1
 *                    3+2
 *
 *            Output: 4
 *
 *
 *            Input:  [2,5,3,6], 10
 *
 *                    2+3+5
 *                    5+5
 *                    2+3+2+3
 *                    2+2+6
 *                    2+2+2+2+2
 *
 *
 *            Output: 5
 *
 *    Note:   You have an unlimited number of each coin type. All coins in the
 *            coin array will be unique
 *            Order does not matter. Ex: One penny and one nickel to create six
 *            cents is equivalent to one nickel and one penny
 *
 */

function coinSum(coins, total){
  function findWays(current, startIndex) {
    if(current<0){
      return 0
    }
    if(current == 0){
      return 1
    }
    let count = 0
    for(let i=startIndex;i<coins.length;i++){
      count += findWays(current - coins[i], i)
    }
    return count
  }
  return findWays(total,0)
}

function coinSumMemo(coins, total) {
  let cache = {};
  function findWays(current, startIndex) {
    let key = current + '_' + startIndex;
    if (key in cache) {
      return cache[key];
    }
    if (current < 0) {
      return 0;
    }
    if (current == 0) {
      return 1;
    }

    let count = 0;
    for (let i = startIndex; i < coins.length; i++) {
      count += findWays(current - coins[i], i);
    }
    cache[key] = count;
    return cache[key];
  }

  return findWays(total, 0)

}

function coinSumTab(coins, total) {
  let result = new Array(total + 1).fill(0);
  result[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i < result.length; i++) {
      result[i] = result[i] + result[i - coin];
    }
  }

  return result[total];
}

// given an integer as input, num, return
// the fewest operations or steps needed to
// arrive at 1 when you can only perform 3 operations

// divide by 3
// divide by 2
// subtract by 1

// greedy
const minStepsToOneGreedy = (num) => {
  let counter = 0
  if(num===1){return 0}
  if(num<1){return null}
  do {
    if(num%3===0){
      counter+=1
      num/=3
    } else if(num%3===1){
      counter+=1
      num-=1
    } else if(num%2===1){
      counter+=1
      num-=1
    } else if(num%2===0){
      counter+=1
      num/=2
    } else {
      counter+=1
      num-=1
    }
  } while (num>1)
  return counter
}

console.log(minStepsToOneGreedy(17))


// recursive

const minStepsToOneRecursive = (n) => {
  const traverse = (current) => {
    if(current === 1) {
      return 0
    }

    //subtract 1
    let option = traverse(current -1)

    //divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3)
      option = Math.min(option, divide3)
    }

    //divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2)
      option = Math.min(option, divide2)
    }

    return option +1
  }
  return traverse(n)
}

// recursive + memoization

const minStepsToOneMemo = (n) => {
  let cache = {}
  const traverse = (current) => {
    if(current in cache) {
      return cache[current]
    }
    if(current === 1) {
      return 0
    }

    //subtract 1
    let option = traverse(current -1)

    //divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3)
      option = Math.min(option, divide3)
    }

    //divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2)
      option = Math.min(option, divide2)
    }
    cache[current] = option + 1
    return cache[current]
  }
  return traverse(n)
}

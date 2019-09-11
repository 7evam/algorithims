// write a factorial function recursively

const factorialRecursive = (num) => {
  if(num == 1) return 1
  return num * factorialRecursive(num-1)
}

console.log(factorialRecursive(5))

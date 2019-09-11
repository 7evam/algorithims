// with recursion

const reverseString  = (string) => {
  if(string===""){
    return string
  } else {
    return reverseString(string.substr(1)) + string.charAt(0)
  }
}

// console.log(reverseString("I like to eat tasty food"))

// with for loop

const reverseStringLoop = (string) => {
  let result = ""
  for(let i=string.length-1;i>=0;i--){
    result+=string[i]
  }
  return result
}

console.log(reverseStringLoop("I like to eat tasty food"))

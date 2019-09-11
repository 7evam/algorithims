const binaryArrayToNumber = arr => {
  let power = 0
  let result = 0
  for(let i=arr.length-1;i>=0;i--){
    // console.log(arr[i])
    if(arr[i]===1){
      result += Math.pow(2,power)
    }
    power+=1
  }
  return result
};

binaryArrayToNumber([0,0,1,0])

// console.log(Math.pow(2,1))

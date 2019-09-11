// you are given an array of sorted arrays
// write a funciton that merges them togeter
// into one array

// check the 0 element for each array
// push them into array and take the min
// then remove the 0 element on the array

const mergeSortedArrays = (arr) => {
  let result = []
  let counter = []
  let stoppers = []
  let finalLength = 0
  let big = null
  for(let i=0; i<arr.length; i++){
    counter.push(0)
    stoppers.push(arr[i].length)
  }
  stoppers.forEach(function(el){
    finalLength += el
  })

  while(result.length < finalLength){
    // check which one is biggest
    // add to result
    // move up counter
    // check stoppper
  }

}

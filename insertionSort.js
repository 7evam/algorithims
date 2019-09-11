const insertionSort = (arr) => {
  const swap = (arr,idx1,idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
  }
  for(let i=1;i<arr.length;i++){
    let currentVal = arr[i]
    for(var j=i-1;j>=0 && arr[j] > currentVal;j--){
      arr[j+1] = arr[j]    
    }
      arr[j+1] = currentVal
  }
  return arr
}

console.log(insertionSort([74,53,1,53,96,484,482,58,35,36,47,26,15,97,94,456,457,234,346,345,2,5,47,67,568,345,235,456,456,568,567,568,12,53,64,13,5,75,2,74,4,47,4,124,64,13]))

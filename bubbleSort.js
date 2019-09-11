const bubbleSort = (arr) => {
  const swap = (arr,idx1,idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
  }
  for(let i=arr.length;i>0;i--){
    for(let j=0;j<i-1;j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1)
      }
    }
  }
  return arr
}

console.log(bubbleSort([74,53,1,53,96,484,482,58,35,36,47,26,15,97,94,456,457,234,346,345,2,5,47,67,568,345,235,456,456,568,567,568,12,53,64,13,5,75,2,74,4,47,4,124,64,13]))

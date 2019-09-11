const selectionSort = (arr) => {
  const swap = (arr,idx1,idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
  }
  for(let i=0;i<arr.length;i++){
    let lowest = i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[lowest]){
        lowest = j
      }
    }
    if(i !== lowest)swap(arr,i,lowest)
  }
  return arr
}

console.log(selectionSort([74,53,1,53,96,484,482,58,35,36,47,26,15,97,94,456,457,234,346,345,2,5,47,67,568,345,235,456,456,568,567,568,12,53,64,13,5,75,2,74,4,47,4,124,64,13]))

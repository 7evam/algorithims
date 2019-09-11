const quickSort = (arr, left=0,right = arr.length -1) => {

  const pivot = (arr,start,end) => {
    // helper swap function
    const swap = (arr,idx1,idx2) => {
      [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
    }
    let pivot = arr[start]
    let swapIdx = start

    for(let i=start+1;i<=end;i++){
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i)
      }
    }
    swap(arr,start,swapIdx);
    return swapIdx
  }

  if(left < right){
    let pivotIndex = pivot(arr,left,right)
    quickSort(arr,left,pivotIndex-1)
    quickSort(arr,pivotIndex+1,right)
  }

  return arr
}

console.log(quickSort([4,5,2,34,5,63,24,24,2,6,27]))

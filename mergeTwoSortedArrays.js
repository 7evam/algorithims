// merge two sorted arrays

function merge(arr1, arr2){
  let result = []
  let i = 0
  let k = 0
  while(result.length < arr1.length + arr2.length){
    if(arr1[i]>arr2[k] || !arr1[i]){
      result.push(arr2[k])
      k++
    } else if(arr1[i]<arr2[k] || !arr2[k] ) {
      result.push(arr1[i])
      i++
    }
  }
  return result
}

merge([1,5,6,7,8],[2,3,4,9,10])

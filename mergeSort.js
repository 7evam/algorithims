const mergeSort = (arr) => {
  const mergeTwoSortedArrays = (arr1,arr2) => {
    let i=0
    let k=0
    let result = []
    while(result.length < arr1.length + arr2.length){
      if(arr1[i]>=arr2[k] || !arr1[i]){
        result.push(arr2[k])
        k++
      } else {
        result.push(arr1[i] || !arr2[k])
        i++
      }
    }
    return result
  }

  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return mergeTwoSortedArrays(left,right)
}




console.log(mergeSort([2,4,5,7,9,3,6,8,13,15]))

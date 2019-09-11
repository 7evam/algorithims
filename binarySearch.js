const binarySearch = (array,target) => {
  let leftIndex = 0;
  let rightIndex = array.length-1;
  let middle;
  while(leftIndex<=rightIndex){
    middle = Math.floor((rightIndex + leftIndex)/2)
    if(array[middle] == target) return true;
    if(array[middle]>target) rightIndex = middle -1;
    if(array[middle]<target) leftIndex = middle+1;
  }
  return false;
}
let array = [3,4,5,6,7,8,9,10,13,14,16,17,19,25,29,35,37,49,51,52,54,75,84,90,345,3456]
let ans = binarySearch(array,15)
console.log(ans)

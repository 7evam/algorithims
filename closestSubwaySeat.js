// given a seating arrangement on a subway car represented by an
// array of 1s and 0s where 1 equals a person
// sitting down and 0 equals an open seat, find the
// index of the seat that is furthest from any people

const findOptimalSeat = (seatingArrangement) => {
  let peopleIndexes = []
  // populate peopleIndexes with indexes of where people are sitting
  for(let i=0;i<seatingArrangement.length;i++){
    if(seatingArrangement[i]===1){
      peopleIndexes.push(i)
    }
  }
  // initial value of the furthest distance between people is 0
  let furthestDistance = 1
  // indexOfDistance is index in seatingArrangement
  // where the longest distance begins
  let indexOfDistance = null
  // iterate through where all the people are sitting
  for(let i=0;i<peopleIndexes.length;i++){
    if((peopleIndexes[i+1] - peopleIndexes[i]) > furthestDistance){
      // find the furthest distance between people
      furthestDistance = peopleIndexes[i+1]-peopleIndexes[i]
      // record the distance where this distance begins
      indexOfDistance = peopleIndexes[i]
    }
  }
  if(indexOfDistance===null){return false}
  let indexOfOptimalSeat = Math.floor(indexOfDistance + (furthestDistance/2))
return indexOfOptimalSeat
}

console.log(findOptimalSeat([1,0,0,0,1])) // expected value 2

console.log(findOptimalSeat([1,0,0,0,0,1])) // expected value 2 or 3

console.log(findOptimalSeat([1,0,0,1,0,0,0,1])) // expected value 5

console.log(findOptimalSeat([1,1,1,1,1,1,1])) // expected value false (no available seat)

function whoIsNext(names, r){
console.log(names)
console.log(r)
  let increaser = 1
  let pplInLine = names.length
  let index = 0
  for(let i = 0; i < r; i++){
    index = index + increaser
    if(index + 1 == pplInLine) {
      increaser = increaser / 2
      index = 0
    }
  }
  for(let i = 1; i < r; i += increaser){
    if ((i - 1) % pplInLine === 0 && i != 1) {
      console.log(i)
      increaser *= 2
    }
    index++
  }
  offset = index % pplInLine
  return names[offset]

// index = Math.floor(index) - 1

// if(index === -1){index=pplInLine -1}
//   return names[index]
// }
}

// 1*5 + 2*5 + 4*5 + 8*5

// x = n / 5
// cycle = log2(ceil(x)) -> which cycle you are in
// offset = n % 5*2^(cycle)
// person = people[offset / 2^(cycle)]

// /*
// n = 1; x=0.2; cycle=0; offset=1; person=people[1/1]
// n = 8; x=1.6; cycle=1; offset=8

// */

////


// function whoIsNext(names, r){
//   console.log(names)
//   console.log(r)
//   let increaser = 1
//   let pplInLine = names.length
//   let index = 0
//   for(let i=0;i<r;i++){
//     index = index+increaser
//     if(index+1 == pplInLine){
//       increaser = increaser/2
//       index = 0
//     }
//   }
// index = Math.floor(index) - 1
// if(index === -1){index=pplInLine -1;console.log('reached if statement')}
// return names[index]
// }

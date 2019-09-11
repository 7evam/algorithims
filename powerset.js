// Prompt:   Given a set S, return the powerset P(S), which is
//           a set of all subsets of S.
//
//
//
//
//  Input:    A String
//  Output:   An Array of String representing the power set of the input
//
//  Example:  S = "abc", P(S) = ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']
//
//  Note:     The input string will not contain duplicate characters
//            The letters in the subset string must be in the same order
//            as the original input.


// PYTHON
// def powerset(input):
//     results = []
//
//     def traverse(build, depth):
//       if(depth == len(input)):
//         results.append(build)
//         return
//
//       traverse(build, depth + 1)
//       traverse(build + input[depth], depth + 1)
//
//     traverse('', 0)
//     return results

const powerset = (input) => {
  let results = [];
  const traverse = (build, depth) => {
    if(depth == input.length){
      results.push(build)
      return
    }
    traverse(build, depth+1)
    traverse(build + input[depth], depth+1)
  }
  traverse('',0)
  return results
}

console.log(powerset('abc'))

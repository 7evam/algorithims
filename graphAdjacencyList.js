class Graph {
   constructor(){
     this.adjacencyList = {};
   }
   addVertex(vertex){
     if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   // add edge is only for undirected graphs
   addEdge(v1,v2){
     if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined
     this.adjacencyList[v1].push(v2)
     this.adjacencyList[v2].push(v1)
   }
   removeEdge(v1,v2){
    // let i = this.adjacencyList[v1].findIndex(v2)
    // this.adjacencyList[v1].splice(i,1)
    // i = this.adjacencyList[v2].findIndex(v1)
    // this.adjacencyList[v2].splice(i,1)

    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    )
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    )
   }
   removeVertex(vertex){
     while(this.adjacencyList[vertex]){
       const adjacentVertex = this.adjacencyList[vertex].pop();
       this.removeEdge(vertex,adjacentVertex);
     }
     delete this.adjacencyList[vertex]
   }
   // depth first search
   DFSRecursive(vertex){
     let result = [];
     let visited = {};
     const adjacencyList = this.adjacencyList
     const traverse = (v) => {
       if(!v) return null
       visited[v] = true;
       result.push(v)
       // loop over all of the values in the
       // adjancency list for that vertex
       adjacencyList[v].forEach(neighbor => {
         // if any of those values have not been visited
         // recursively invoke helper function with that v
         if(!visited[neighbor]){
           return traverse(neighbor)
         }
       })
     }
     traverse(vertex);
     return result
   }
   DFSIterative(vertex){
     let result = [];
     let stack = [vertex];
     let visited = {};
     let current
     visited[vertex] = true;
     while(stack.length){
       current = stack.pop();
       result.push(current);
       this.adjacencyList[current].forEach(neighbor => {
         if(!visited[neighbor]){
           visited[neighbor] = true;
           stack.push(neighbor)
         }
       })
     }
     return result;
   }
   BFS(vertex){
     let queue = [vertex];
     let result = [];
     let visited = {};
     let current
     visited[vertex] = true;
     while(queue.length){
       current = queue.shift();
       result.push(current);
       this.adjacencyList[current].forEach(neighbor => {
         if(!visited[neighbor]){
           visited[neighbor] = true;
           queue.push(neighbor);
         }
       })
     }
     return result;
   }
   DFSIterativeAlphabetical(vertex){
     let result = [];
     let stack = [vertex];
     let visited = {};
     let current
     let alphabeticalList
     visited[vertex] = true;
     while(stack.length){
       current = stack.pop();
       result.push(current);
       alphabeticalList = this.adjacencyList[current].sort().reverse();
       alphabeticalList.forEach(neighbor => {
         if(!visited[neighbor]){
           visited[neighbor] = true;
           stack.push(neighbor)
         }
       })
     }
     return result;
   }
}

let g = new Graph

// g.addVertex('NYC')
// g.addVertex('Rochester')
// g.addVertex('Denver')
// g.addVertex('Austin')
//
// g.addEdge('NYC', 'Rochester')
// g.addEdge('NYC', 'Denver')
// g.addEdge('NYC', 'Austin')
// g.addEdge('Austin', 'Denver')

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertex("G")

g.addEdge("A","B")
g.addEdge("A","E")
g.addEdge("A","C")
g.addEdge("B","C")
g.addEdge("C","D")
g.addEdge("D","G")
g.addEdge("D","F")
g.addEdge("F","E")

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }
  insert(value){
    let newNode = new Node(value)
    if(!this.root){
      this.root = newNode;
      return this
    }
    let current = this.root
    while(true){
      if(value === current.value) return undefined
      if(value < current.value){
        if(current.left == null){
          current.left = newNode
          return this
        } else {
          current = current.left
        }
      } else if(value > current.value){
        if(current.right==null){
          current.right = newNode
          return this
        } else {
          current = current.right;
        }
      }
    }
  }
  find(value){
    if(!this.root) return false
    let current = this.root
    let found = false
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right
      } else {
        found = true
      }
    }
    if(!found) return undefined
    return current
  }
  BFS(){
    let data = []
    let queue = []
    let node = this.root
    queue.push(node)
    while(queue.length){
      node = queue.shift();
      data.push(node.value)
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    return data
  }
  DFSPreOrder(){
    let data = []
    let current = this.root
    const helper = (node) => {
      data.push(node.value)
      if(node.left) helper(node.left)
      if(node.right) helper(node.right)
    }
    helper(current)
    return data
  }
  DFSPostOrder() {
  let result = [];
  let node = this.root;
  const traverse = (node) => {
    if(node.left) traverse(node.left);
    result.push(node.value);
    if(node.right) traverse(node.right);
  }
  if(node) traverse(node);
  return result;
}
  DFSPostOrder() {
    let result = [];
    let node = this.root
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    if(node) traverse(node);
    return result;
  }
}

let tree = new BinarySearchTree()

tree.insert(5)
tree.insert(10)
tree.insert(15)
tree.insert(9)
tree.insert(20)
tree.insert(2)
console.log(tree.DFSPreOrder())

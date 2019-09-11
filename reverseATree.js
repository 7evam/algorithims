// Given a binary tree root node, invert the binary tree
//  (mirror) and return back the root node.


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
  reverse(node){
    if(!node) return
    if(node.left) this.reverse(node.left);
    if(node.right) this.reverse(node.right);
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    return node
  }
}

let tree = new BinarySearchTree()

tree.insert(9)
tree.insert(5)
tree.insert(10)
tree.insert(15)
tree.insert(7)
tree.insert(20)
tree.insert(2)
console.log(tree)
tree.reverse(tree.root)
console.log(tree)

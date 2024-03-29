// only care about stack.push and stack.pop

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    let newNode = new Node(val)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      let oldFirst = this.first;
      this.first = newNode
      newNode.next = oldFirst
      size++
    }
  }
}

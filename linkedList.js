class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val){
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.length ++
    this.tail = newNode
    return this
  }
  pop(){
    if(!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next){
      newTail = current
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length --;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) {
      return undefined
    } else {
      let oldHead = this.head
    }
    let this.head = this.head.next
    this.length --
    if(this.length === 0){
      this.tail = null
    }
    return oldHead
  }
  unshift(val){ // add to beginning of list
    if(this.head){
      let newNode = new Node(val)
      newNode.next = this.head
      this.head = newNode
      length++
      return this
    } else {
      this.push(val)
    }
  }
  traverse(){
    let current = this.head
    while(current){
      current=current.next
    }
  }
}

let list = new SinglyLinkedList()
list.push('omg!!!!')
list.push('woah there')
list.push('lol!!!')
list.push('this is fun!')
list.push('99999')

console.log(list.pop())

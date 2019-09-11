class Miniheap {
  constructor() {
    this.storage = [];
  }
  swap(i1, i2) {
    [this.storage[i1],this.storage[i2]] = [this.storage[i2],this.storage[i1]]
  }
  // peak returns most minum element
  peak(){
    return this.storage[0]
  }
  // returns size of Miniheap
  size(){
    return this.storage.length
  }
  insert(){
    this.storage.push(val);
    this.bubbleUp(this.size() - 1)
  }
  getParent(child) {
    if(child % 2 == 0){
      return (child - 2) / 2
    } else {
      return (child - 1) / 2
    }
  }
  bubbleUp(child) {
    let parent = this.getParent(child);

    while(child > 0 && this.storage[child] < this.storage[parent]) {
      this.swap(child, parent);
      child = parent;
      this.getParent(child);
    }
  }
  removePeak(){
    this.swap(0, this.size() - 1);
    let result = this.storage.pop();
    this.bubbleDown(0);
    return result
  }

  getChild(parent) {
    let child1 = 2 * parent + 1;
    let child2 = 2* parent + 2;
    if(child1>=this.size()) {
      return child1;
    } else if (child2 >= this.size()) {
      return child1;
    } else if(this.storage[child1] < this.storage[child2]) {
      return child
    } else {
      return child 2
    }
  }

  bubbleDown(parent) {
    let child = this.getChild(parent);

    while(child < this.size() && this.storage[parent] > this.storage[child])
      this.swap(child,parent);
      parent = child;
      child = this.getChild(parent)
  }
  remove(val){
    let removeIndex;
    for(let i=0; i<this.storage.length; i++){
      if(this.storage[i] === val) {
        removeIndex = i;
      }
    }
    this.swap(removeIndex, this.size() -1);
    let result = this.storage.pop();
    this.bubbleUp(removeIndex);
    this.bubbleDown(removeIndex);
    return result;
  }

}

let test = new Miniheap();
test.storage = [4,5,6,7]
console.log(test)
test.swap(0, 3)
console.log(test)

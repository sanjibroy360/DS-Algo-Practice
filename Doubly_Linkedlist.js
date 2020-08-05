class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      node.prev = this.head;
    } else {
      let i = this.head;
      while (i.next) {
        i = i.next;
      }
      node.prev = i;
      i.next = node;
    }
    this.size++;
  }

  insert(value, position) {
    let node = new Node(value);
    if (position == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let i = this.head;
      let pos = 0;
      while (pos < position && i.next) {
        i = i.next;
        pos++;
      }
      node.prev = i.prev;
      node.next = i;
      i.prev.next = node;
    }
    this.size++;
  }

  delete(position) {
    let nextNode;
    if (position == 0) {
      nextNode = this.head.next;
      this.head = nextNode;
      nextNode.prev = this.head;
    } else {
      let i = this.head;
      let pos = 0;
      while (pos < position && i.next) {
        i = i.next;
        pos++;
      }

      nextNode = i.next;
      nextNode.prev = i.prev;
      i.prev.next = nextNode;
    }
    this.size--;
  }

  // deleteParticularValue(inputValue) {
  //   let i = this.head;
  //   let pos = 0;
  //   while (i.next) {
  //     let nextNode;
      
  //     if (i.value == inputValue) {
        
  //       if (pos == 0) {
  //         nextNode = this.head.next;
  //         this.head = nextNode;
  //         nextNode.prev = this.head;
  //       } else {
  //         nextNode = i.next;
  //         i.prev.next = nextNode;
  //         nextNode.prev = i.prev; 
  //       }
  //       this.size--;
  //       continue;
  //     }
  //     console.log(i.value)
  //     i = i.next;
  //     pos++;
  //   }
  // }

  sizeOf() {
    return this.size;
  }

  indexOf(inputValue) {
    let i = this.head;
    let index = 0
    while(i.next) {
      if(i.value == inputValue) {
        return index;
      }
      index++;
    }
  }
}

let list = new Linkedlist();

for (let i = 1; i <= 3; i++) {
  list.add(999);
}

for (let i = 10; i <= 100; i += 10) {
  list.add(i);
}

list.insert(123, 2);
list.delete(1);
list.deleteParticularValue(999);

console.log(list);

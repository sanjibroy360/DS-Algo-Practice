class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let current = new Node(value);
    if (!this.head) {
      this.head = current;
    } else {
      let i = this.head;
      while (i.next) {
        i = i.next;
      }
      i.next = current;
    }
    this.size++;
  }

  insert(value, desiredPosition) {
    let current = new Node(value);
    let i = this.head;
    if (desiredPosition == 0) {
      current.next = this.head;
      this.head = current;
    } else {
      let pos = 0;
      while (pos < desiredPosition - 1) {
        i = i.next;
        pos++;
      }
      current.next = i.next;
      i.next = current;
    }
    this.size++;
  }

  delete(desiredPosition) {
    if (desiredPosition == 0) {
      this.head = this.head.next;
    } else {
      let pos = 0;
      let i = this.head;
      while (pos < desiredPosition - 1) {
        i = i.next;
        pos++;
      }
      let address = i.next;
      i.next = i.next.next;
    }
    this.size--;
  }

  deleteParticularValue(inputValue) {
    let i = this.head;
    let pos = 0;
    while (i.next) {
      if (i.next.value == inputValue) {
        let desiredNode = i.next;
        i.next = desiredNode.next;
      } else {
        i = i.next;
      }
    }
  }

  sizeOf() {
    return this.size;
  }

  indexOf(inputValue) {
    let i = this.head;
    let index = 0;
    while (i.next) {
      if (i.value == inputValue) {
        return index;
      }
      index++;
      i = i.next;
    }
  }
}

// head -> 40 -> 50 -> 60 -> 100

let list = new Linkedlist();

for (let i = 10; i <= 100; i += 10) {
  list.add(i);
}
list.add(120);
list.add(120);
list.add(120);
list.add(120);
list.add(120);

// list.insert(60, 1);
// list.delete(0);
list.deleteParticularValue(120);

console.log(list.indexOf(60));
console.log(list);

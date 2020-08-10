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

  straight_traverse() {
    let i = this.head;
    while (i.next) {
      console.log(i.value);
      i = i.next;
    }
  }
}

let list = new Linkedlist();

for (let i = 1; i <= 10; i++) {
  list.add(i * 10);
}

list.straight_traverse();

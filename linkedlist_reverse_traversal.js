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

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  show() {
    let i = this.head;
    while (i) {
      console.log(i.value);
      i = i.next;
    }
  }
}

let list = new Linkedlist();

for (let i = 10; i <= 100; i += 10) {
  list.add(i);
}
console.log("before");
list.show();
console.log("after");
list.reverse();
list.show();

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    return this.items.push(value); // Add to the end
  }

  dequeue() {
    return this.isEmpty ? "Underflow" : this.items.shift(); //Remove from the start
  }

  front() {
    return this.isEmpty() ? "No elements in Queue" : this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

let queue = new Queue();

for (let i = 1; i <= 10; i++) {
  queue.enqueue(i * 10);
}

queue.printQueue();

console.log(queue.front());

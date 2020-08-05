class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    return this.items.push(value);
  }

  pop() {
    if (!this.items.length) {
      return "Underflow";
    }

    return this.items.pop();
  }

  peek() {
    let topIndex = this.items.length - 1;
    return this.items[topIndex];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printStack() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

let stack = new Stack();

for (let i = 1; i <= 10; i++) {
  stack.push(i * 10);
}

stack.printStack();

console.log(stack.peek());

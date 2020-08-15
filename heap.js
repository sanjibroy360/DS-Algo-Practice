class Heap {
  constructor() {
    this.heap = [null];
  }

  insert(num) {
    heap.push(num);
    if (heap.length > 2) {
      let i = heap.length - 1;
      while (heap[i] < heap[Math.floor(i / 2)]) {
        if (i >= 1) {
          [heap[Math.floor(i / 2)], heap[i]] = [
            heap[i],
            heap[Math.floor(i / 2)],
          ];
          if (Math.floor(i / 2) > 1) {
            i = Math.floor(i / 2);
          } else {
            break;
          }
        }
      }
    }
  }
}

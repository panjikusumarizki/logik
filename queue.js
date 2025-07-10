class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return undefined;
  }

  front() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return undefined;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Penggunaan antrian
const myQueue = new Queue();
myQueue.enqueue("A");
myQueue.enqueue("B");
myQueue.enqueue("C");

console.log(myQueue.front()); // Output: "A"

console.log(myQueue.dequeue()); // Output: "A"
console.log(myQueue.dequeue()); // Output: "B"

console.log(myQueue.size()); // Output: 1

console.log(myQueue.isEmpty()); // Output: false

myQueue.clear();
console.log(myQueue.isEmpty()); // Output: true

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  insertAtEnd(data) {
    const newNode = new Node(data, null);
    let curr = this.head;

    if (!curr) {
      this.head = newNode;
    } else {
      while (curr.next) {
        curr = curr.next;
      }

      curr.next = newNode;
    }

    this.length++;
  }

  getByIndex(index) {
    let cur = this.head;
    if (index < 0 || index > this.length) {
      return null;
    } else {
      for (let i = 0; i < index; i++) {
        cur = cur.next;
      }

      return cur;
    }
  }

  insertAtIndex(index, val) {
    if (index === 0) return this.insertAtHead(val);

    if (index < 0 || index > this.length) return null;

    let cur = this.getByIndex(index - 1);
    cur.next = new Node(val, cur.next);

    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeLast() {
    const newLast = this.getByIndex(this.length - 2);
    newLast.next = null;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    if (index < 0 || index > this.length) return null;

    const prev = this.getByIndex(index - 1);
    prev.next = prev.next.next;
    this.length--;
  }

  nthToLast(n) {
    if (n < 0) return null;

    let curr = this.head;
    let follower = this.head;

    for (let i = 0; i < n; i++) {
      if (!curr.next) return null;
      curr = curr.next;
    }

    while (curr.next) {
      curr = curr.next;
      follower = follower.next;
    }

    return follower;
  }

  divide() {
    if (!this.head) return null;

    if (!this.head.next) return this.head;

    let runner = this.head.next;
    let follower = this.head;

    while (runner) {
      runner = runner.next;
      if (!runner) return follower;

      runner = runner.next;
      follower = follower.next;
    }

    return follower;
  }

  cycle() {
    if (!this.head) return false;

    let runner = this.head.next;
    let follower = this.head;

    while (runner) {
      if (runner.val === follower.val) return true;
      runner = runner.next;
      if (!runner) return false;
      runner = runner.next;
      follower = follower.next;
    }

    return false;
  }

  reverse() {
    if (!this.head) return null;
    if (!this.head.next) return this.head;

    let curr = this.head;
    let prev = null;

    while (curr) {
      let oldNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = oldNext;
    }

    this.head = prev;

    return prev;
  }

  print() {
    this.head = this.getByIndex(0);
    let output = "";

    for (let i = 0; i < this.length; i++) {
      output += `${this.head.val} -> `;
      this.head = this.head.next;
    }

    output += `${this.head}`;
    console.log(output);
    console.log();
  }
}

LinkedList.fromValues = (...values) => {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

module.exports = LinkedList;

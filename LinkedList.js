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

const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("Adds an element to the beginning of the array", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.val).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#insertAtEnd", () => {
  test("Adds an element to the end of the array", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(10);
    ll.insertAtEnd(20);

    expect(ll.head.val).toBe(10);
    expect(ll.head.next.val).toBe(20);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("returns null", () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.getByIndex(-1)).toBe(null);
    });
  });

  describe("with index greater than list length", () => {
    test("returns null", () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.getByIndex(10)).toBe(null);
    });
  });

  describe("with index 0", () => {
    test("returns the head", () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.getByIndex(0).val).toBe(10);
    });
  });

  describe("with particultar index", () => {
    test("returns node at index", () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.getByIndex(2).val).toBe(30);
    });
  });
});

//;
//
//
// INSERT AT INDEX
describe("#Insert at index", () => {
  describe("with index less than 0", () => {
    test("does not insert", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, -10);
      expect(ll.length).toBe(2);
    });
  });

  describe("with index greater than list length", () => {
    test("does not insert", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(3, 40);
      expect(ll.length).toBe(2);
    });
  });

  describe("with index 0", () => {
    test("inserts at head", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 0);
      expect(ll.length).toBe(3);
      expect(ll.head.val).toBe(0);
      expect(ll.head.next.val).toBe(10);
    });
  });

  describe("with particultar index", () => {
    test("inserts at index", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(1, 15);
      expect(ll.length).toBe(3);
    });
  });
});

//
//
//
// REMOVES HEAD
describe("#Removes head", () => {
  test("removes first element", () => {
    const ll = LinkedList.fromValues(10, 20);
    ll.removeHead();

    expect(ll.length).toBe(1);
    expect(ll.head.val).toBe(20);
  });
});
//
//
//
// REMOVES LAST
describe("#Removes last element", () => {
  test("remove last element", () => {
    const ll = LinkedList.fromValues(10, 20);
    ll.removeLast();

    expect(ll.length).toBe(1);
    expect(ll.head.val).toBe(10);
    expect(ll.getByIndex(1)).toBeNull();
  });
});
//
//
//
// REMOVES AT INDEX
describe("#Removes at index", () => {
  describe("index less than 0", () => {
    test("should not remove", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe("index greater than length", () => {
    test("should not remove", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(3);

      expect(ll.length).toBe(2);
    });
  });

  describe("removes at middle", () => {
    test("remove element at a particular index", () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(1);

      expect(ll.length).toBe(2);
      expect(ll.head.val).toBe(10);
      expect(ll.head.next.val).toBe(30);
      expect(ll.getByIndex(2)).toBeNull();
    });
  });
});

//
//
//
// FIND NTH LAST
describe("#Finds nth last element", () => {
  //
  describe("n greater than length", () => {
    test("should return null", () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.nthToLast(3)).toBeNull();
    });
  });

  //
  describe("n is negtive", () => {
    test("should return null", () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.nthToLast(-1)).toBeNull();
    });
  });

  //
  describe("valid n", () => {
    test("should return nth last element", () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      expect(ll.nthToLast(0).val).toBe(30);
      expect(ll.nthToLast(1).val).toBe(20);
      expect(ll.nthToLast(2).val).toBe(10);
    });
  });
});

//
//
//
// DIVIDE LIST
describe("#Divide List", () => {
  //
  describe("empty list", () => {
    test("should return null", () => {
      const ll = LinkedList.fromValues();

      expect(ll.divide()).toBeNull();
    });
  });
  //

  describe("valid list", () => {
    test("list with even numbers", () => {
      const ll = LinkedList.fromValues(1, 2);

      expect(ll.divide().val).toBe(1);
    });
    //
    test("list with odd numbers", () => {
      const ll = LinkedList.fromValues(1);

      expect(ll.divide().val).toBe(1);
    });
  });
});
//
//
//
// Cycle

describe("#Cycle", () => {
  //
  describe("Empty List", () => {
    test("Should return false", () => {
      const ll = LinkedList.fromValues();
      expect(ll.cycle()).toBe(false);
    });
  });
  //
  describe("List with no cycle", () => {
    test("Should return false", () => {
      const ll = LinkedList.fromValues(1, 2, 3, 4);
      expect(ll.cycle()).toBe(false);
    });
  });
  //
  describe("List with cycle", () => {
    test("Should return true", () => {
      const ll = LinkedList.fromValues(1, 2, 3, 4);
      const tail = ll.getByIndex(ll.length - 1)
      tail.next = ll.getByIndex(1);

      expect(ll.cycle()).toBe(true);
    });
  });
});

//
//
//
// Reverse

describe("#Reverse List",()=>{
  //
  describe("Empty list",()=>{
    test('should return null',()=>{
      const ll  = LinkedList.fromValues()
      expect(ll.reverse()).toBeNull();
    })
  })
  //
  describe("One ore more nodes",()=>{
    test('one node',()=>{
      const ll  = LinkedList.fromValues(1)
      expect(ll.reverse().val).toBe(1);
    })
    test('multiple nodes',()=>{
      const ll  = LinkedList.fromValues(1,2,3)
      expect(ll.reverse().val).toBe(3);
    })
  })
})
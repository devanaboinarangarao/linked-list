
class LinkedList {
  constructor(element) {
    this.head = {
      value: element,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(element) {

    let node = {};
    node.value = element;
    node.next = null;

    this.tail.next = node;

    this.tail = node;
    this.length++;

    return this;
  }

  preappend(element) {
    let node = {};
    node.value = element;
    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  print() {
    let temp = this.head;
    let values = [];
    while (temp != null) {
      values.push(temp.value);
      temp = temp.next;
    }
    console.log(values);
    return values;
  }

  insert(element, index) {

    if(index > this.length-1) {
      return 'given index out of bound';
    }
    let node = {
      value: element,
      next: null
    }
    let i = 0;

    if (index === 0) {
      this.length++;
      return this.preappend(element);
    } else {
      let temp = this.head;
      
      while (i < index-1) {
        temp = temp.next;
        i++;
      }
      node.next = temp.next;
      temp.next = node;

      return this.linkedList;
      this.length++;
    }
  }

  remove(index) {
    let temp = this.head, i = 0;
    if(index > this.length-1) {
      return 'something went wrong'
    }
    else if(index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.linkedList;
    }

    while(i < index-1) {
      temp = temp.next;
      i++;
    }
    let deletedNode = temp.next;
    temp.next = temp.next.next;
    this.length--;
    this.print()

  }

  reverse() {
    let first = this.head;
    let second = this.head.next;
    

    while(second) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.tail = this.head;
    this.head.next = null;
    this.head = first;
    
    this.print();
  }
}

let linkedList = new LinkedList(10);
linkedList.preappend(9);
linkedList.append(11);
// linkedList.append(12);
linkedList.insert(7, 0);
linkedList.insert(8, 1);
linkedList.remove(3);
linkedList.print();
// console.log(linkedList)
console.log(linkedList.reverse())

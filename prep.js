
class Node {
	constructor (data, next=null){
this.data = data;
this.next = next;
}
}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insert first

    insertAtHead(data){
    this.head = new Node(data, this.head);
    this.size++
    }

    //insert last

    insertLast(data) {
    let node = new Node(data);
    let current;

    //if list is empty make it the head
    if(!this.head) {
        this.head = node;
    }
    //the current head is the head
    else {
        current = this.head;
      
        // as long there is a next  make the current 
        while(current.next){
        current = current.next
     
        }
        current.next = node;
    }
    this.size++;
    }

    //insert at index
    insertAtIndex(data, index){
     //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertAtHead(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;

    }
//! remove first
//! remove last

    getAt(index) {
        let current = this.head;
        let count = 0;
    
        while (current) {
          if (count == index) {
            console.log(current.data);
          }
          count++;
          current = current.next;
        }
    
        return null;
      }
    
      // Remove at index
      removeAt(index) {
        if (index > 0 && index > this.size) {
          return;
        }
    
        let current = this.head;
        let previous;
        let count = 0;
    
        // Remove first
        if (index === 0) {
          this.head = current.next;
        } else {
          while (count < index) {
            count++;
            previous = current;
            current = current.next;
          }
    
          previous.next = current.next;
        }
    
        this.size--;
      }
    
      // Clear list
      clearList() {
        this.head = null;
        this.size = 0;
      }

    printData() {
    let current = this.head;

    while(current) {
        console.log(current.data);
        current = current.next;
        }
    }

}

const linkedList = new LinkedList();

linkedList.insertAtHead(100);
linkedList.insertAtHead(200);
linkedList.insertAtHead(300);
linkedList.insertLast(900);
linkedList.insertAtIndex(500,2);
linkedList.insertAtIndex(5,1);
linkedList.insertAtIndex(700,3);
linkedList.removeAt(3)
console.log(linkedList);
linkedList.clearList();
console.log(linkedList);

linkedList.printData();
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

// Stack creation using linked list concept

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top
        this.top = newNode
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const removedTop = this.top
        this.top = this.top.next
        return removedTop.data
    }

    peek() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.top.data
    }

    isEmpty() {
        return this.top === null
    }

    clear() {
        this.top = null
    }

    print() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        let item = this.top
        while (item) {
            console.log(item.data);
            item = item.next;
        }
    }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
console.log("-------------------");
myStack.print();
myStack.pop()
myStack.pop()
myStack.pop()
console.log("-------------------");
myStack.print();


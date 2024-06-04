class Stack {
    constructor() {
        // Initializing an empty array to store items
        this.items = [];
    }
    // Push/add item to the top of the stack
    push(item) {
        this.items.push(item);
    }
    // Pop/remove item from the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Underflow");
        }
        return this.items.pop();
    }
    // peek of the top item without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Underflow");
        }
        return this.items[this.items.length - 1]
    }
    // Check if the stack is empty 
    isEmpty() {
        return this.items.length === 0;
    }
    // To check size of the stack
    size() {
        return this.items.length;
    }

    // To display the stack
    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is underflow..!");
        }
        for (let i in this.items) {
            console.log(this.items[i]);
        }
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}


const myStack = new Stack();
myStack.push(110);
myStack.push(111);
myStack.push(112);
myStack.push(222);

myStack.printStack();

console.log("------------------");
// myStack.clear();

console.log(myStack.peek());

// myStack.printStack();
console.log(myStack.isEmpty());
// console.log(myStack.size());
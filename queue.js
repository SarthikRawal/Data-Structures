class Queue {
    constructor() {
        this.items = [];
    }

    // add items
    addToqueue(item) {
        this.items.push(item);
    }

    // remove item
    removeFromQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let item = this.items.shift();
            console.log(`Removed: ${item} from the queue`);
        }
    }
    // Check for empty queue
    isEmpty() {
        return this.items.length === 0;
    }

    // clear queue
    clear() {
        this.items = [];
    }

    // print queue data
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            for (let i in this.items) {
                console.log(this.items[i]);
            }
        }

    }
}

const dailyTasks = new Queue();

dailyTasks.addToqueue("Do loundry");
dailyTasks.addToqueue("Buy groceries");
dailyTasks.addToqueue("Meditation");
dailyTasks.printQueue();

console.log("\n----------------\n");

dailyTasks.removeFromQueue();
dailyTasks.removeFromQueue();
dailyTasks.removeFromQueue();
dailyTasks.removeFromQueue();


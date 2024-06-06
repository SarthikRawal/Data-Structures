/* 
    Set to store a key-value pair
    Get to Retrieve a value given its key
    Remove to delete a key value pair
    Hashing function to convert a string key to a number index
*/

class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }
    set(key, value) {
        const index = this.hash(key)
        this.table[index] = value
    }
    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key)
        this.table[index] = undefined
    }

    displayData() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50)

table.set("name", "sarthik")
table.set("age", 23)
table.displayData();

console.log(table.get("name"));
console.log(table.get("age"));

table.remove("name")
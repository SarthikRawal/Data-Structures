const mySet = new Set([11, 22, 33])

// To add items into set 
mySet.add(44)

// To check item is there or not
console.log(mySet.has(44));

// To delete item 
mySet.delete(44)

// To check size of the set
console.log(mySet.size);

// To print set data we can use for--of loop
for (let items of mySet) {
    console.log(items);
}

// To clear the whole set
mySet.clear()

console.log(mySet);




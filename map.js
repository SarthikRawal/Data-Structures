const map = new Map([['a', 1], ['b', 2]])

// To add items into map
map.set('c', 3)

// To delete items
map.delete('b')

// To check for an existing item
console.log(map.has('a'));

// To check size of the map
console.log(`Map size is: ${map.size}`);

// To iterate over the Map
for (const [key, value] of map) [
    console.log(`${key}: ${value}`)
]

// To clear out the map
map.clear()
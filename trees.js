class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Adding new nodes to the tree
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return "No Data Present";
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    // Pre order tree traversal [DFS]
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // In order tree traversal [DFS]
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    // Post order tree traversal [DFS]
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // Level-order or BFS traversal
    levelOrder() {
        // We can also use optixeed queue.
        const queue = [];
        queue.push(this.root)
        while (queue.length) {
            let cur = queue.shift();
            console.log((cur.value));
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right);
            }

        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    // To check if the tree is empty or not
    isEmpty() {
        return this.root === null;
    }
}

const bst = new BinarySearchTree();

bst.insert(20);
bst.insert(10);
bst.insert(25);
bst.insert(21);
bst.insert(11);
bst.insert(8);

// console.log(bst.search(bst.root, 2));
// console.log(bst.search(bst.root, 21));
// console.log(bst.search(bst.root, 25));

// bst.preOrder(bst.root)
// console.log("-----------");
// bst.inOrder(bst.root)
// console.log("-----------");
// bst.postOrder(bst.root)

console.log(bst.max(bst.root));
console.log(bst.min(bst.root));

// bst.levelOrder(bst.root)
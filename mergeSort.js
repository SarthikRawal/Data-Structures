function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())

        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

let array = [34, 7, 23, 32, 5, 62];
console.log("Merge Sorted Array:", mergeSort(array));
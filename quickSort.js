let arr = [5, 8, 2, 2, 2, 9, 10, 13, 1];


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];

    for (i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

console.log("Quick Sorted !");
console.log(quickSort(arr));

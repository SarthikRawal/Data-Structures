let arr = [11, 14, 16, 22, 24, 28, 29, 34, 37];

function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
        mid = Math.floor((high + low) / 2);

        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] > x) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1;
}


// Recursive Binary search
function binarySearchRecursive(arr, start, end, x) {
    if (start > end) {
        return -1
    }
    let mid = Math.floor((end + start) / 2)

    if (arr[mid] === x) {
        return mid;
    } else if (arr[mid] > x) {
        return binarySearchRecursive(arr, start, mid - 1, x)
    } else {
        return binarySearchRecursive(arr, mid + 1, end, x)
    }
}


// result = binarySearch(arr, 24)

result = binarySearchRecursive(arr, 0, arr.length - 1, 34);
(result === -1) ? console.log("Element is not present in the array") : console.log(`Element is at index ${result}`);
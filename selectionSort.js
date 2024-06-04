let arr = [5, 8, 3, 6, 1];

// Swap function
function swap(arr, j, i) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function selectionSort(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(arr, i, min)
        }
    }
    return arr;
}


console.log(selectionSort(arr));
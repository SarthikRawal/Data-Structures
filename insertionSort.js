let arr = [4, 6, 2, 8, 1];

function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(arr));
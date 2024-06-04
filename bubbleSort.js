let array = [6, 6, 6, 2, 4, 5];

function swap(arr, j, i) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function bubbleSort(arr) {
    let flag;
    for (i = 0; i < arr.length - 1; i++) {
        flag = 0;
        for (j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                flag = 1;
            }
        }
        if (flag === 0) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort(array));
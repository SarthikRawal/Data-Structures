// Maximum & minimum values

let arr = [1, 26, 18, 10, 87, 9, 8];
function maxAndMin(arr) {

    let max = arr[0];
    let min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return {
        max,
        min
    }
}
// const result = maxAndMin(arr);
// console.log(`Max number: ${result.max}`);
// console.log(`Min number: ${result.min}`);


// SUm of even and odd numbers

function evenAndOddSum(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        }
        if (arr[i] % 2 !== 0) {
            oddSum += arr[i];
        }
    }
    console.log(`Sum of Even numbers: ${evenSum}`);
    console.log(`Sum of Odd numbers: ${oddSum}`);
}
// evenAndOddSum(arr);


// Array Reversal
function reverseArr(arr) {
    let reveresedArr = [];
    console.log(`Original Array: ${arr}`);
    size = arr.length;
    for (i = 0; i < size; i++) {
        reveresedArr[i] = arr.pop()
    }
    console.log(`reversed array: ${reveresedArr}`);
}
// reverseArr(arr);

// Check if array is sorted in ascending or descending 

function isSorted(arr) {
    let ascending = true;
    let descending = true;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            ascending = false;
            break;
        }
    }
    if (!ascending) {
        for (i = arr.length - 1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                descending = false
                break;
            }
        }
        return descending ? "Descending" : "Unsorted";
    }
    return "ascending";
}
// console.log(isSorted([1, 2, 3, 4, 5, 6]));

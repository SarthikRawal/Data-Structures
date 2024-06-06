let arr = [12, 14, 16, 18, 20, 24, 28, 30];


function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}

let result = linearSearch(arr, 24);

(result === -1) ? console.log("No element found in the array") : console.log(`Element found at: ${result}`);
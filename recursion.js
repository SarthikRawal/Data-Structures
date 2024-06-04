// Flattening a nested object using recursion

let user = {
    name: "sarthik",
    address: {
        personal: {
            city: "jodhpur",
            state: "Raj.",
        },
        office: {
            city: "Banaglore",
            area: {
                landmark: "Clock-tower",
                sector: "Sector-23",
            }
        }
    }
}


let formObject = (obj, parent, finalObj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            formObject(obj[key], parent + "_" + key, finalObj)
        } else {
            finalObj[parent + "_" + key] = obj[key];
        }
    }
}

// let finalObj = {};
// formObject(user, "user", finalObj)
// console.log(finalObj); 


// Fibonacci using Recursion

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = 5
for (i = 0; i < n; i++) {
    // console.log(fibonacci(i));
}

// Factorial using Recursion

function factorial(n) {
    if (n > 1) {
        return factorial(n - 1) * n;
    } else {
        return 1;
    }
}

// console.log(factorial(5));

// Palindrome using recursion

let isPalindrome = (str) => {
    str = str.toLowerCase();
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1))

    }
    return false;
}
console.log(isPalindrome("naman"));
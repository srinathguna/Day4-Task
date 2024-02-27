console.log("-----IIFE function -----");

//1.a Print odd numbers in an array
console.log("//1.a Print odd numbers in an array");

(function(odd) {
        for (let i = 0; i < odd.length; i++) {
            if (odd[i] % 2 == 1) {
                console.log(odd[i]);
            }
        }
    }
) ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log("--------");

//1.b convert all the strings to title caps in a string array
console.log("//1.b convert all the strings to title caps in a string array");

(function (cars) {
    for (let i = 0; i < cars.length; i++) {
        // console.log(cars[i])
        console.log(cars[i].toUpperCase());

    }
})(["hyundai", "toyota", "mahindra", "ford"]);
console.log("--------");

//1.c sum of all numbers in array
console.log("//1.c sum of all numbers in array");

(function (sumNumbers) {
    let sumAll = 0
    for (let i = 0; i < sumNumbers.length; i++) { //looping array
        // console.log(sumnumbers[i])
        sumAll += sumNumbers[i]; //sumall number
    }
    console.log(sumAll)
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

console.log("--------");

//1.d return all the prime numbers in an array
console.log("//1.d return all the prime numbers in an array");

(function(){
    function isPrime(num) {
        if (num <= 1) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false //not a prime number
            }
        }
        return true //prime number
    }
    (function (primeNumbers) {
        for (let i = 0; i < primeNumbers.length; i++){
            if (isPrime(primeNumbers[i])) {
                console.log(primeNumbers[i])
            }
        }
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
}) ();

console.log("--------");

//1.e Return all the palindromes in an array
console.log("//1.e Return all the palindromes in an array");

(function (palindrome) {
    for (let i = 0; i < palindrome.length; i++){
        let word = palindrome[i];
        let isword = palindrome[i].split("").reverse().join("");
        if (word === isword) {
            console.log(word)
        } 
    }
})(["echo", "level", "earphone", "madam"]);

console.log("--------");

//1.f Return median of two sorted arrays of the same size.
console.log("//1.f Return median of two sorted arrays of the same size.");

(function (array1,array2) {
    let singleArr = array1.concat(array2).sort((a,b) => a-b)
    let arrLength = singleArr.length
    if (arrLength%2 ===0) {
        return console.log(((singleArr[arrLength/2]+singleArr[arrLength/2-1])/2))
    } else {
        return console.log(singleArr[Math.floor(arrLength/2)])
    }
})([3, 1, 5, 7, 9], [5, 2, 4, 8, 6])

console.log("--------");

//1.g Remove duplicates from an array
console.log("//1.g Remove duplicates from an array");

(function (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.indexOf(arr[i])) {
            result.push(arr[i])
        }
    }
    result.sort()
    return console.log(result)
})([1, 2, 4, 6, 3, 1, 8, 2, 7, 4]);

console.log("--------");

//1.H Rotate an array by k times
console.log("//1.H Rotate an array by k times");

(function (rotateK,rotateTime) {
    for (let i = 0; i < rotateTime;i++){
        let remove = rotateK.pop();
        rotateK.unshift(remove)
    }
    console.log(rotateK)
})([1, 2, 3, 4, 5],2)
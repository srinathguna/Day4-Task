console.log("-----Arrow function -----");

//1.a Print odd numbers in an array
console.log("//1.a Print odd numbers in an array")

const oddnumber = (odd) => {
    for (let i = 0; i < odd.length; i++) {
        if (odd[i] % 2 == 1) {
             console.log(odd[i]);
        } 
    }
}
oddnumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log("--------");

//1.b convert all the strings to title caps in a string array
console.log("//1.b convert all the strings to title caps in a string array")

const title = (cars) => {
    for (let i = 0; i < cars.length; i++){
        console.log(cars[i].toUpperCase());

    }       
}
title(["hyundai", "toyota", "mahindra", "ford"])
console.log("--------");

//1.c sum of all numbers in array
console.log("//1.c sum of all numbers in array")

let sumAll = 0
const sum = (sumNumbers)=> {
    for (let i = 0; i < sumNumbers.length;i++){ //looping array
        sumAll += sumNumbers[i]; //sumall number
    }
     console.log(sumAll)
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

console.log("--------");

//1.d return all the prime numbers in an array
console.log("//1.d return all the prime numbers in an array")

const isPrime =  (num) => {
    if (num<= 1) {
        return false
    }
    for (let i=2;i<=Math.sqrt(num);i++){
        if (num % i === 0) {
            return false //not a prime number
        }
    }
    return true //prime number
}
const prime = (primeNumbers) => {
    for (let i = 0; i < primeNumbers.length; i++){
        if (isPrime(primeNumbers[i])) {
            console.log(primeNumbers[i])
        }
    }
}
prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

console.log("--------");

//1.e Return all the palindromes in an array
console.log("//1.e Return all the palindromes in an array")

const ispalindrome = (palindrome) => {
    for (let i = 0; i < palindrome.length; i++){
        let word = palindrome[i];
        let isword = palindrome[i].split("").reverse().join("");
        if (word === isword) {
            console.log(word)
        } 
    }
}
ispalindrome(["echo", "level", "earphone", "madam"]);

console.log("--------");
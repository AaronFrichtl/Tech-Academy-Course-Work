//Print the first 100 numbers that
//are greater than 0 and divisible by 13.

let currentNumber = 1;
//the variable above stores the current
//number and it will be updated inside
//the loop.
let numbersFound = 0;
//this variable stores the count of
//numbers that are divisible by 13.

while (numbersFound < 100) {
    if (currentNumber % 13 === 0){
        console.log(currentNumber);
        numbersFound++;
    }
    currentNumber++;
}
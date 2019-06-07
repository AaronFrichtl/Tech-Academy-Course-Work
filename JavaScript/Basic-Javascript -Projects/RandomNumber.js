let randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 0.25) {
    console.log("The random number is between 0 and 0.25");
} else if (randomNumber >= 0.25 && randomNumber < 0.5) {
    console.log("The random number is between 0.25 and 0.5");
} else if (randomNumber >= 0.5 && randomNumber < 0.75) {
    console.log("The random number is between 0.5 and 0.75");
} else {
    console.log("The random number is greater than 0.75 and less than 1");
}
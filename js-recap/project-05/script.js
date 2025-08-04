console.log("Hello World!");

// STEP 1: Check if a score is greater than 80 and log 'Great job!'
// STEP 2: Check if age is less than 18 and log 'You are a minor'
// STEP 3: Use if/else to check if isHungry is true
// STEP 4: Use if/ else if /else to check grade level
// STEP 5: Use an if to check if isLoggedIn is false
// STEP 6: Use a conditional to check if temperature > 30


let score = 85;

if (score > 80) {
    console.log("Nice work!!");
} else {
    console.log("Do better next time!");
}

let age = 17;

if (age >= 18) {
    console.log("Welcome to the real world!");
} else if (age <= 18) {
    console.log("You shouldn't be here...");
}

let time = 700;
let isHungry = true;

if (time >= 1300) {
    console.log(isHungry);
} else {
    console.log("You are not hungry!");
}

//or

if (time >= 1300) {
    isHungry = true;
    console.log("Looks like it's time to eat!!");
} else if (time <= 1300) {
    isHungry = false;
    console.log("You are not hungry right now...");
}

//also

if (isHungry) {
    console.log("You are hungry.");
} else {
    console.log("You are not hungry.");
}

let grade = 56;
const congrats = "Nice work! Looks like that studying is paying off!";
const reprimand = "Looks like you need to study harder, see me after class.";

if (grade > 64) {
    console.log(congrats);
} else if (grade <= 64) {
    console.log(reprimand);
}

let loggedIn = false;
const online = "Nice to see you again!";
const offline = "Please sign in.";

if (loggedIn == true) {
    console.log(online);
} else if (loggedIn == false) {
    console.log(offline);
}

let temperature = 25;
const isWarm = "You do not need a jacket, it's nice out!";
const isCold = "Grab a coat! It's chilly!";

if (temperature >= 60) {
    console.log(isWarm);
} else if (temperature <= 50) {
    console.log(isCold);
}

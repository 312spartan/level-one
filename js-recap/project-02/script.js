// console.log("Hello world!");

const petName = "Doom";
console.log(petName);

const heightInCm = 192;
console.log(heightInCm)

const isStudent = true;
console.log(isStudent)

let lunchTime = 1300;
console.log(lunchTime)

let bellChime = "Time for lunch! Hope you're hungry!";

const punishment = "The students will not eat today";

const timeLunch = false;

let forLunch = true;

if (lunchTime == null) {
    console.log(punishment, timeLunch);
} else if (lunchTime < 1300) {
    console.log("Little early to have lunch don't you think?...", timeLunch);
} else if (lunchTime > 1300) {
    console.log("Did you forget to feed them again?...", forLunch);
} else if (lunchTime == 1300) {
    console.log(bellChime, forLunch);
}

console.log(
    typeof petName, 
    typeof heightInCm, 
    typeof isStudent, 
    typeof lunchTime, 
    typeof bellChime,
    typeof punishment,
    typeof timeLunch,
    typeof forLunch
);
let changeName = "Joseph";
const permaName = "Hank";

let daleName = "Dale Gribble";
let firstName = "John";
let lastName = "Redcorn";
const hello = "Hello World!";





console.log(changeName);
console.log(permaName);
console.log((firstName)+ ' ' +(lastName));

console.log(hello);

if (lastName == "Redcorn") {
    console.log("This is Joseph's father");
} else if (lastName != "Redcorn") {
    console.log("This is Dale Gribble");
}

if (changeName == "Bobby") {
    console.log("This is the son of " + (permaName));
} else if (changeName == "Joseph") {
    console.log("This is the son of " + (daleName));
}


const myName = "Wiz";

let age = 28;

const country = "USA";

let favColor = "cyan";

const birthYear = 1996;

let myHobby = "Music and Martial Arts";

if (myName == "Wiz" && age == 28 && country == "USA" && favColor == "cyan" && birthYear == 1996) {
    console.log("Hello my name is " + myName + " and I am " + age + " years old! I am from the " + country + " and my favorite color is " + favColor + ". I was born in " + birthYear + ", and I love " + myHobby + "!");
} else {
    console.log("The info is wrong, but I still love " + myHobby + "!");
}
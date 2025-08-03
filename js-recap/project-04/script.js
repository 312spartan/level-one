// STEP 1: Create a function named sayHello that logs 'Hello!'
// STEP 2: Create a function addNumbers that adds 2 numbers and logs the result
// STEP 3: Create a function greetUser that takes a name and says hello
// STEP 4: Create a function that multiplies two numbers and logs it
// STEP 5: Create a function that logs your favorite quote
// STEP 6: Call all the functions you created above




function addUp(x, y) {
    console.log(x + y)
}

addUp(356.934, 729.918);


function sayHi() {
    console.log("Yo!! Nice to meet you!");
}

sayHi();

function userGreeting(name) {
    console.log("Hello " + name + "!");
}

userGreeting("Alexis");

function sum(x, y) {
    console.log(x * y);
}

sum(8, 7);


const string = "Do not pray for an easy life, pray for the strength to endure a difficult one."

function wisdom() {
    console.log(string);
}

wisdom();

//or

const quote = (string) => {
    console.log(string);
};

quote(string);

const favoriteMovie = (movie) => {
    console.log("My favorite movie is " + movie + "!");
}

favoriteMovie("Treasure Planet");






function name(firstName, lastName) {
    return firstName + " " + lastName;
}

let fullName = name("some", "tech bro");

console.log(fullName);

//or

const name2 = (firstName, lastName) => {
    return firstName + " " + lastName;
}

fullName = name2("Another", "Tech Bro");
console.log(fullName);

// and also

const name3 = (firstName, lastName) => {
    return firstName + " YOOOOOOOOO " + lastName;
}

fullName = name3("The Final", "Tech Bro");

console.log(fullName);

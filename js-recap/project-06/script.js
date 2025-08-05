console.log("yo!");


// USING A LOOP TO COUNT FROM ONE TO THREE
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// USING A FOR LOOP TO PRINT 5 STARS!

for (let i = 1; i <= 5; i++) {
    console.log("⭐");
}

// LOOP THROUGH AN ARRAY OF FRUITS AND LOG EACH ONE

let fruits = ["apple", "cherry", "banana", "kiwi", "strawberry"];
for (let i = 0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}

const fruits2 = ["peaches", "pears", "dragonfruit"];
const newFruit = "mango";

const nextNumber = fruits2.length + 1;
console.log(`${nextNumber}`, `${newFruit}`);


// USE LOOP TO PRINT EVEN NUMBERS FROM 2 TO 10


for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// LOOP BACKWARDS FROM 5 TO 1

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// LOOP THROUGH LETTERS IN A STRING

let str = "This is a string.";
for (let i = 0; i < str.length; ++i) {
    console.log(str[i]);
}
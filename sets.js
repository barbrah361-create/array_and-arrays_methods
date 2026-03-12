let fruits = new Set(["apple", "banana", "orange"]);

console.log(fruits.has("banana"));
console.log(fruits.has("grapes"));
console.log(fruits.delete("banana"));
console.log(fruits.size);

console.log(fruits)

//looping through a set
let fruit1 = new Set(["apple", "banana", "mango"]);

for (let fruit of fruit1) {
  console.log(fruit);
}
fruit1.forEach(fruit => {
  console.log(fruit);
});

//Using forEach()
let numbers = new Set([10, 20, 30]);

numbers.forEach(num => {
    console.log(num);
});
//converting a set to an array using spread operator
//Using Spread Operator
let number = [1,2,3,3,4,4,5];

let uniqueNumbers = [...new Set(number)];

console.log(uniqueNumbers);

//Remove duplicate emails from a list.
let emails = [
    "user1@gmail.com",
    "user2@gmail.com",
    "user1@gmail.com",
    "user3@gmail.com"
];

let mails = [...new Set(emails)];
console.log(mails)

let number2 = new Set([1, 2, 3, 3, 4]);

console.log(number2.size);


//Using Set to find common values between arrays
let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

let commonValues = arr1.filter(value => arr2.includes(value));

console.log(commonValues);
//7️⃣ Count Object Properties

// Write a function that receives an object and returns the number of properties it contains.

function countProperties(obj) {
  // your code here
  return Object.keys(obj).length;
}

// Example usage:
const myObject = {
  name: "Gloria",
  age: 19,
  city: "Eldoret",
};

console.log(countProperties(myObject));
// Output: 3

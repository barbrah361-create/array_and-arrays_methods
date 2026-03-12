/********************************************************************
 JAVASCRIPT HIGHER-ORDER FUNCTIONS (HOF)
 COMPLETE GUIDE – WEB DEV FOCUSED
********************************************************************/

/********************************************************************
 1️⃣ WHAT IS A HIGHER-ORDER FUNCTION?

 A Higher-Order Function is:
 - A function that takes another function as an argument
 OR
 - A function that returns another function

 This is extremely important in:
 - Array methods (map, filter, reduce)
 - Event listeners
 - setTimeout
 - Middleware
 - Functional programming
********************************************************************/

/********************************************************************
 2️⃣ FUNCTION AS ARGUMENT
********************************************************************/

function greet(name) {
  return "Hello " + name;
}

function processUser(callback) {
  const result = callback("Kevin");
  return result;
}

const hofResult1 = processUser(greet);

console.log("Function as argument result:", hofResult1);

/********************************************************************
 3️⃣ FUNCTION RETURNING ANOTHER FUNCTION
********************************************************************/

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));

/********************************************************************
 4️⃣ BUILT-IN HIGHER-ORDER FUNCTIONS (ARRAY METHODS)
********************************************************************/

/* map() - transforms data */

const numbersMap = [1, 2, 3];

const squared = numbersMap.map(function (num) {
  return num * num;
});

console.log("Squared using map:", squared);

/* filter() - selects data */

const numbersFilter = [1, 2, 3, 4, 5];

const greaterThanTwo = numbersFilter.filter(function (num) {
  return num > 2;
});

console.log("Filtered numbers:", greaterThanTwo);

/* reduce() - accumulates data */

const numbersReduce = [10, 20, 30];

const total = numbersReduce.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log("Total using reduce:", total);

/********************************************************************
 5️⃣ CALLBACK FUNCTIONS
 A callback is a function passed into another function.
********************************************************************/

function fetchData(callback) {
  const data = { name: "Kevin" };
  callback(data);
}

fetchData(function (response) {
  console.log("Callback received:", response);
});

/********************************************************************
 6️⃣ setTimeout (HOF EXAMPLE)
********************************************************************/

setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

/********************************************************************
 7️⃣ EVENT LISTENER (HOF IN THE DOM)

 NOTE:
 This works in browser environment, not Node.
********************************************************************/

/*
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked");
});
*/

/********************************************************************
 8️⃣ CLOSURES (VERY IMPORTANT CONCEPT)

 When a function remembers variables from its outer scope.
********************************************************************/

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log("Counter:", increment());
console.log("Counter:", increment());
console.log("Counter:", increment());

/********************************************************************
 9️⃣ CUSTOM HIGHER-ORDER FUNCTION
********************************************************************/

function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("Operate add:", operate(5, 3, add));
console.log("Operate multiply:", operate(5, 3, multiply));

/********************************************************************
 🔟 FUNCTION COMPOSITION
 Combining multiple functions into one.
********************************************************************/

function addTwo(num) {
  return num + 2;
}

function multiplyByThree(num) {
  return num * 3;
}

function compose(f, g) {
  return function (value) {
    return f(g(value));
  };
}

const composedFunction = compose(multiplyByThree, addTwo);

console.log("Compose result:", composedFunction(5));

/********************************************************************
 1️⃣1️⃣ REAL WEB DEV EXAMPLE – CART TOTAL
********************************************************************/

const cart = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
];

const cartTotal = cart
  .map(function (item) {
    return item.price;
  })
  .reduce(function (acc, price) {
    return acc + price;
  }, 0);

console.log("Cart total:", cartTotal);

/********************************************************************
 1️⃣2️⃣ REAL WEB DEV EXAMPLE – FILTER ACTIVE USERS
********************************************************************/

const users = [
  { name: "Kevin", active: true },
  { name: "John", active: false },
  { name: "Mary", active: true },
];

const activeUsers = users.filter(function (user) {
  return user.active;
});

console.log("Active users:", activeUsers);

/********************************************************************
 1️⃣3️⃣ CURRYING (ADVANCED HOF CONCEPT)

 Transforming a function with multiple arguments
 into nested single-argument functions.
********************************************************************/

function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const curriedResult = curryAdd(2)(3)(4);

console.log("Curried add result:", curriedResult);

/********************************************************************
 1️⃣4️⃣ PRACTICE CHALLENGES
********************************************************************/

/*
 Challenge 1:
 Use map to convert prices to discounted prices (10% off).
*/

const prices = [100, 200, 300];

const discounted = prices.map(function (price) {
  return price * 0.9;
});

console.log("Discounted prices:", discounted);

/*
 Challenge 2:
 Use filter to get users older than 25.
*/

const people = [
  { name: "Kevin", age: 30 },
  { name: "John", age: 20 },
];

const olderThan25 = people.filter(function (person) {
  return person.age > 25;
});

console.log("People older than 25:", olderThan25);

/*
 Challenge 3:
 Use reduce to count total number of users.
*/

const usersCount = [{ name: "Kevin" }, { name: "John" }, { name: "Mary" }];

const totalUsers = usersCount.reduce(function (acc) {
  return acc + 1;
}, 0);

console.log("Total users:", totalUsers);

/********************************************************************
 END OF HIGHER-ORDER FUNCTIONS GUIDE
********************************************************************/

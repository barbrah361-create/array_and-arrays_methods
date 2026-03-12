// 1️⃣ Object Modification
let user = {
  name: "Ian",
  age: 20,
  role: "student"
};

// Update role
user.role = "developer";

// Add active property
user.active = true;

// Remove age
delete user.age;

console.log("1:", user);



/* -------------------------------------------------- */

// 2️⃣ Object Iteration
let product = {
  name: "Laptop",
  price: 800,
  brand: "Dell"
};

console.log("2:");
for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}



/* -------------------------------------------------- */

// 3️⃣ Convert Object to Array
let subjects = {
  math: 85,
  english: 78,
  science: 90
};

let subjectArray = Object.entries(subjects).map(([subject, score]) => {
  return { subject, score };
});

console.log("3:", subjectArray);



/* -------------------------------------------------- */

// 4️⃣ Sum Object Values
let expenses = {
  rent: 500,
  food: 200,
  transport: 100,
  utilities: 150
};

function totalExpenses(obj) {
  return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

console.log("4:", totalExpenses(expenses));



/* -------------------------------------------------- */

// 5️⃣ Find Highest Value in Object
let ratings = {
  quality: 80,
  service: 95,
  delivery: 70
};

function highestRating(obj) {
  let highestKey = null;
  let highestValue = -Infinity;

  for (let key in obj) {
    if (obj[key] > highestValue) {
      highestValue = obj[key];
      highestKey = key;
    }
  }

  return highestKey;
}

console.log("5:", highestRating(ratings));



/* -------------------------------------------------- */

// 6️⃣ Nested Object Manipulation
let student = {
  name: "Alice",
  address: {
    city: "Nairobi",
    street: "Moi Avenue"
  }
};

// Access nested property
console.log("6 Access:", student.address.city);

// Update nested property
student.address.city = "Mombasa";

// Add new nested property
student.address.country = "Kenya";

console.log("6 Updated:", student);



/* -------------------------------------------------- */

// 7️⃣ Count Object Properties
function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log("7:", countProperties(product));



/* -------------------------------------------------- */

// 8️⃣ Merge Two Objects
let userInfo = {
  name: "John",
  age: 25
};

let userPreferences = {
  theme: "dark",
  notifications: true
};

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log("8:", mergeObjects(userInfo, userPreferences));



/* -------------------------------------------------- */

// 9️⃣ Remove Property Without Modifying Original
function removeProperty(obj, prop) {
  let newObj = { ...obj };
  delete newObj[prop];
  return newObj;
}

let original = { a: 1, b: 2, c: 3 };
let removed = removeProperty(original, "b");

console.log("9 Original:", original);
console.log("9 New:", removed);



/* -------------------------------------------------- */

// 🔟 Validate Object Structure
function validateUser(obj) {
  return (
    typeof obj.name === "string" &&
    typeof obj.age === "number" &&
    typeof obj.email === "string" &&
    obj.email.includes("@")
  );
}

let testUser = {
  name: "Sam",
  age: 22,
  email: "sam@mail.com"
};

console.log("10:", validateUser(testUser));



/* -------------------------------------------------- */

// 1️⃣1️⃣ Group Array of Objects by Age
let people = [
  { name: "Tom", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Mike", age: 20 }
];

function groupByAge(arr) {
  return arr.reduce((group, person) => {
    if (!group[person.age]) {
      group[person.age] = [];
    }
    group[person.age].push(person);
    return group;
  }, {});
}

console.log("11:", groupByAge(people));



/* -------------------------------------------------- */

// 1️⃣2️⃣ Remove Duplicate Objects by ID
let items = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A Duplicate" }
];

function removeDuplicates(arr) {
  let seen = new Set();
  return arr.filter(item => {
    if (seen.has(item.id)) {
      return false;
    }
    seen.add(item.id);
    return true;
  });
}

console.log("12:", removeDuplicates(items));



/* -------------------------------------------------- */

// 1️⃣3️⃣ Deep Clone Object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let originalObj = {
  name: "Test",
  data: {
    scores: [10, 20, 30]
  }
};

let clonedObj = deepClone(originalObj);

console.log("13:", clonedObj);



/* -------------------------------------------------- */

// 1️⃣4️⃣ Count Numeric Properties > 50
function countGreaterThan50(obj) {
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] > 50) {
      count++;
    }
  }

  return count;
}

let numbers = {
  a: 30,
  b: 60,
  c: 100,
  d: 20
};

console.log("14:", countGreaterThan50(numbers));



/* -------------------------------------------------- */

// 1️⃣5️⃣ Mini Student Report System
let students = [
  { name: "Ian", scores: [80, 90, 85] },
  { name: "Jane", scores: [60, 70, 65] },
  { name: "Mark", scores: [40, 50, 45] }
];

function calculateGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

function generateReport(arr) {
  return arr.map(student => {
    let avg =
      student.scores.reduce((sum, score) => sum + score, 0) /
      student.scores.length;

    return {
      name: student.name,
      average: avg,
      grade: calculateGrade(avg)
    };
  });
}

console.log("15:", generateReport(students));
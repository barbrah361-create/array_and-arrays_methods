/********************************************************************
 JAVASCRIPT OBJECTS – COMPLETE GUIDE (WEB DEV FOCUSED)
********************************************************************/

/********************************************************************
 1️⃣ WHAT IS AN OBJECT?
 - An object is a collection of key-value pairs.
 - Keys are strings (or Symbols).
 - Values can be any data type.
 - Objects are reference types (stored by reference in memory).
********************************************************************/

const userExample = {
  name: "Kevin",
  age: 30,
  isDeveloper: true,
};

console.log("Full Object:", userExample);
console.log("Access name:", userExample.name);
console.log("Access age:", userExample.age);
console.log("Access isDeveloper:", userExample.isDeveloper);

/********************************************************************
 2️⃣ DOT NOTATION vs BRACKET NOTATION
********************************************************************/

/*
 Dot notation:
 - Used when property name is known and valid identifier.
*/

console.log("Dot notation:", userExample.name);
console.log("Bracket notation for isDeveloper:", userExample["isDeveloper"]);

/*
 Bracket notation:
 - Used when property name is dynamic(stored in a variable).
 - Required if key has spaces or special characters.
*/

const key = "age";
console.log("Bracket notation (dynamic):", userExample[key]);

const weirdObject = {
  "first name": "Kevin",
};

console.log("Bracket required for spaced key:", weirdObject["first name"]);

/********************************************************************
 3️⃣ ADDING, UPDATING, DELETING PROPERTIES
********************************************************************/

/* Add property */
userExample.country = "Kenya";
console.log("After adding country:", userExample);

/* Update property */
userExample.age = 31;
console.log("After updating age:", userExample);

/* Delete property */
delete userExample.isDeveloper;
console.log("After deleting isDeveloper:", userExample);

/********************************************************************
 4️⃣ OBJECT REFERENCE BEHAVIOR
 Objects are reference types.
********************************************************************/

const objA = { value: 10 };
const objB = objA;

objB.value = 30;

console.log("objA after modifying objB:", objA);
console.log("objB:", objB);

/********************************************************************
 SAFE COPY USING SPREAD
********************************************************************/

const originalObj = { name: "Kevin", age: 30 };
const copiedObj = { ...originalObj };

copiedObj.age = 40;

console.log("Original after safe copy:", originalObj);
console.log("Copied object:", copiedObj);

/********************************************************************
 5️⃣ OBJECT METHODS (IMPORTANT IN WEB DEV)
********************************************************************/

/* Object.keys()
   Returns array of keys.
*/

const config = {
  theme: "dark",
  layout: "grid",
  version: 1,
};

console.log("Object.keys:", Object.keys(config));

/* Object.values()
   Returns array of values.
*/

console.log("Object.values:", Object.values(config));

/* Object.entries()
   Returns array of [key, value] pairs.
*/

console.log("Object.entries:", Object.entries(config));

/********************************************************************
 6️⃣ LOOPING THROUGH OBJECTS
********************************************************************/

/* Using for...in */

for (let key in config) {
  console.log("for...in key:", key);
  console.log("for...in value:", config[key]);
}

/* Using Object.entries with forEach */

Object.entries(config).forEach(([key, value]) => {
  console.log("Entry key:", key);
  console.log("Entry value:", value);
});

/********************************************************************
 7️⃣ DESTRUCTURING OBJECTS
********************************************************************/

const person = {
  firstName: "Kevin",
  lastName: "Mwangi",
  age: 30,
};

/* Basic destructuring */

const { firstName, age } = person;

console.log("Destructured firstName:", firstName);
console.log("Destructured age:", age);

/* Renaming during destructuring */

const { lastName: surname } = person;

console.log("Renamed destructured lastName:", surname);

/********************************************************************
 8️⃣ NESTED OBJECTS
********************************************************************/

const nestedUser = {
  name: "Kevin",
  address: {
    city: "Nairobi",
    zip: 10001,
  },
};

console.log("Nested city:", nestedUser.address.city);

/* Safe access using optional chaining */

console.log("Optional chaining example:", nestedUser.address?.city);

/********************************************************************
 9️⃣ OBJECT SPREAD (UPDATING IMMUTABLY)
 Common in React state updates.
********************************************************************/

const stateUser = {
  name: "Kevin",
  role: "User",
};

const updatedStateUser = {
  ...stateUser,
  role: "Admin",
};

console.log("Original stateUser:", stateUser);
console.log("Updated stateUser:", updatedStateUser);

/********************************************************************
 🔟 Object.assign()
 Copies properties into target object.
 First argument is mutated.
********************************************************************/

const target = { a: 1 };
const source = { b: 2 };

Object.assign(target, source);

console.log("Target after Object.assign:", target);

/********************************************************************
 1️⃣1️⃣ SHALLOW COPY WARNING
********************************************************************/

const shallowExample = {
  name: "Kevin",
  skills: ["JS", "Node"],
};

const shallowCopy = { ...shallowExample };

shallowCopy.skills.push("React");

console.log("Original after shallow copy change:", shallowExample);
console.log("Shallow copy:", shallowCopy);

/********************************************************************
 1️⃣2️⃣ DEEP COPY (Modern Way)
********************************************************************/

const deepOriginal = {
  name: "Kevin",
  skills: ["JS", "Node"],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.skills.push("React");

console.log("Deep original:", deepOriginal);
console.log("Deep copy:", deepCopy);

/********************************************************************
 1️⃣3️⃣ Object.freeze()
 Prevents modification (shallow).
********************************************************************/

const frozenObj = {
  name: "Kevin",
};

Object.freeze(frozenObj);

frozenObj.name = "John";

console.log("Frozen object:", frozenObj);

/********************************************************************
 1️⃣4️⃣ Object.seal()
 Prevents adding or deleting properties,
 but allows updating existing ones.
********************************************************************/

const sealedObj = {
  name: "Kevin",
};

Object.seal(sealedObj);

sealedObj.name = "John";
sealedObj.age = 30;

console.log("Sealed object:", sealedObj);

/********************************************************************
 1️⃣5️⃣ CHECKING PROPERTY EXISTENCE
********************************************************************/

const checkObj = { name: "Kevin" };

console.log("'name' in checkObj:", "name" in checkObj);
console.log("hasOwnProperty:", checkObj.hasOwnProperty("name"));
console.log("Optional chaining check:", checkObj?.name);

/********************************************************************
 1️⃣6️⃣ COMMON OBJECT BUG
 Using object as key (becomes string "[object Object]")
********************************************************************/

const badKeyObj = {};
const objKey = {};

badKeyObj[objKey] = "value";

console.log("Using object as key:", badKeyObj);

/********************************************************************
 1️⃣7️⃣ PRACTICE CHALLENGES
********************************************************************/

/*
 Challenge 1:
 Update user role without mutating original object.
*/

const challengeUser = { name: "Kevin", role: "User" };

const challengeAnswer1 = { ...challengeUser, role: "Admin" };

console.log("Challenge 1 result:", challengeAnswer1);

/*
 Challenge 2:
 Extract city from nested object safely.
*/

const challengeNested = {
  profile: {
    location: {
      city: "Nairobi",
    },
  },
};

const challengeAnswer2 = challengeNested.profile?.location?.city;

console.log("Challenge 2 result:", challengeAnswer2);

/*
 Challenge 3:
 Convert object into array of key-value pairs.
*/

const challengeObj = { a: 1, b: 2 };

const challengeAnswer3 = Object.entries(challengeObj);

console.log("Challenge 3 result:", challengeAnswer3);

/********************************************************************
 END OF OBJECTS GUIDE
********************************************************************/

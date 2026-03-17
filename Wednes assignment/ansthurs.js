// question 21 answers
function matchInventories(invA, invB) {
  const uniqueItems = new Set([...invA, ...invB]);

  let isIdentical = false;
  if (invA.length === invB.length) {
    isIdentical = invA.every((item, index) => item === invB[index]);
  }

  return {
    totalUnique: uniqueItems.size,
    isIdentical: isIdentical
  };
}

const inventory1 = ["apple", "banana", "orange"];
const inventory2 = ["apple", "banana", "orange"];
const inventory3 = ["banana", "apple", "orange"];

console.log(matchInventories(inventory1, inventory2));
console.log(matchInventories(inventory1, inventory3));

//Theory answer;you can’t use == or === to compare arrays because these operators check if the arrays are the same object in memory,
// ....... not whether their contents are equal.

//question 23 answer...
                       
 function sanitizeUsernames(users) {
  const uniqueNames = new Set();

  for (const user of users) {
    if (user.name && typeof user.name === "string") {
      const trimmed = user.name.trim();
      if (trimmed) {
        const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
        uniqueNames.add(capitalized);
      }
    }
  }
  return [...uniqueNames];
}

const users = [
  { id: 1, name: "  alice " },
  { id: 2, name: "bob" },
  { id: 3, name: "Alice" },
  { id: 4, name: " charlie " },
  { id: 5, name: "bob " },
];

console.log(sanitizeUsernames(users));
      //theory answer;name[0] = "A" fails because strings in JavaScript are immutable,
      //  so you cannot change a character directly; you must create a new string using methods like slice() or substring().


      //answer 24
    function addDefaultTags(posts, newTag) {
  return posts.map(post => {
    if (Array.isArray(post.tags)) {
      const tagsSet = new Set(post.tags);
      tagsSet.add(newTag);
      return { ...post, tags: [...tagsSet] };
    } else {
      return { ...post, tags: [newTag] };
    }
  });             
    }
//theory answer; This happens because arrays and objects are passed by reference in JavaScript, so modifying them inside a function changes the original.
//  Strings and other primitives are passed by value, so changes inside a function do not affect the original variable.

//answer 26
  function createEventManager() {
  const eventsArray = [];
  const uniqueEvents = new Set();

  return {
    trigger(eventName) {
      eventsArray.push(eventName);
      uniqueEvents.add(eventName);
    },
    getEvents() {
      return [...eventsArray];
    }
  };
}         
//Theory answer;the returned methods can access them because of closures,
//  which let functions remember variables in their defining scope, but outside code can’t access them because they are not exposed outside createEventManager().

//answer 28
    function formatCart(cartArray) {
  const uniquePrices = new Set();

  for (const item of cartArray) {
    let price;

    if (typeof item === "string") {
      price = parseFloat(item);
    } else if (item && typeof item === "object" && "price" in item) {
      price = Number(item.price);
    }

    if (!isNaN(price)) {
      uniquePrices.add(price);
    }
  }

  return [...uniquePrices].reduce((sum, p) => sum + p, 0);
}       
//Theory answer;typeof returns "object" for both arrays and plain objects, so it can’t distinguish them;
//  use Array.isArray(item) to tell arrays apart from objects.
               
 //answer question 29
                    
function swapCoordinates(pointObj) {
  const swapped = { x: pointObj.y, y: pointObj.x };
  const str = `${swapped.x},${swapped.y}`;
  return [str]; 
}
//Theory answer; With const { x, y } = pointObj, x and y are independent copies of the values, 
// so changing x does not affect pointObj.


//answer to question 30
   function updateRoles(userObj, rolesArray) {
  for (const role of rolesArray) {
    userObj.roles.add(role);
  }

  userObj.roles.delete("guest");

  return `User now has ${userObj.roles.size} roles: ${[...userObj.roles].join(", ")}`;
}                    
//Theory answer; Sets are unordered collections of unique values,
//  so they don’t have index-based methods like .map() or .reduce(); to transform their data, convert the Set to an array first (e.g., [...mySet]) and then use array methods.
                

//Answer to question 25
 function buildConfig(userConfig) {
  const defaults = { theme: "light", retries: 3 };
  const config = { ...defaults, ...userConfig };

  const themeChars = [...new Set(config.theme.split(""))];

  return { ...config, themeChars };
 }                     
//Theory answer;|| treats 0 as falsy and replaces it with 3, while ?? keeps 0 and only replaces null or undefined.


//Answer to question 27
function intersectArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}
//Theory answer;Set.has() is faster because it runs in O(1) time,
//  while Array.includes() runs in O(n), making repeated lookups much slower on large datasets.
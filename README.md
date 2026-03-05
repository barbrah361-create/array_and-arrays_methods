# JavaScript Afternoon Class – Notes & Exercises

A complete reference repository for the **JavaScript Afternoon Class**, covering core JavaScript concepts with well-commented examples, practical exercises, and quiz questions.

---

## Repository Structure

| File | Topic | Description |
|------|-------|-------------|
| `arrays.js` | Arrays | Complete guide to arrays, array methods, search, sort, transform, and reference behavior |
| `objects.js` | Objects | Full objects guide – dot/bracket notation, `this`, getters/setters, copying, deep clone |
| `test.js` | Object Methods | Deep dive into all built-in `Object.*` static methods with practical examples |
| `hof.js` | Higher-Order Functions | `map`, `filter`, `reduce`, callbacks, closures, currying, and function composition |
| `functions.js` | Functions | Function declarations, expressions, arrow functions, scope, and parameters |
| `quiz.js` | Practice Exercises | Coding exercises covering arrays, loops, and problem-solving |
| `prime.js` | Prime Numbers | Prime number detection and filtering using loops |
| `st.js` | Utility Snippets | Miscellaneous helper functions (e.g. second largest in array) |
| `files.js` | File Operations | Node.js file system examples |

---

## Topics Covered

### Arrays (`arrays.js`)
- What is an array and reference behavior
- Search methods: `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`
- Mutating methods: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, `fill`
- Non-mutating methods: `slice`, `concat`, `join`, `flat`, `flatMap`
- Iteration: `forEach`, `map`, `filter`, `reduce`, `every`, `some`
- Spread operator and safe copying

### Objects (`objects.js`)
- Object creation and property access (dot vs bracket notation)
- Adding, updating, and deleting properties
- Shorthand and computed property names
- Methods and the `this` keyword
- Getters and setters
- Object reference behavior
- Shallow copy (`Object.assign`, spread) vs Deep copy (`structuredClone`)
- Built-in Object methods: `keys`, `values`, `entries`, `fromEntries`

### Object Methods (`test.js`)
- `Object.keys()` – get all property names
- `Object.values()` – get all property values
- `Object.entries()` – get key-value pairs
- `Object.fromEntries()` – convert pairs back to object
- `Object.assign()` – merge and clone objects
- `Object.freeze()` / `Object.isFrozen()` – full immutability
- `Object.seal()` / `Object.isSealed()` – partial lock
- `Object.create()` – prototype-based inheritance
- `Object.getPrototypeOf()` – inspect prototype chain
- `Object.defineProperty()` – fine-grained property control
- `Object.getOwnPropertyNames()` – all keys including non-enumerable
- `hasOwnProperty()` / `Object.hasOwn()` – own vs inherited check
- `"in"` operator – check existence in prototype chain
- `for...in` loop – iterate over enumerable keys
- Destructuring, nested objects, and custom methods

### Higher-Order Functions (`hof.js`)
- What is a higher-order function (HOF)?
- Passing functions as arguments
- Returning functions from functions
- Built-in HOFs: `map`, `filter`, `reduce`, `forEach`
- Callbacks and asynchronous patterns
- Closures
- Currying and partial application
- Function composition
- Practical real-world examples

### Functions (`functions.js`)
- Function declarations and expressions
- Arrow functions
- Parameters and return values

---

## How to Run Any File

Make sure you have [Node.js](https://nodejs.org) installed, then run:

```bash
node arrays.js
node objects.js
node test.js
node hof.js
node quiz.js
```

---

## Assignment Submission (Students)

> Full instructions are in [`GitHub_JS_Assignment_Instructions.md`](GitHub_JS_Assignment_Instructions.md)

### Quick Steps

**1. Fork or clone the repository**
```bash
git clone https://github.com/Vokeh0007/array_and-arrays_methods.git
cd array_and-arrays_methods
```

**2. Create your own branch** (do NOT work on `main`)
```bash
git checkout -b quiz/yourname-questionnumber
# Example: git checkout -b quiz/john-q3
```

**3. Solve only your assigned question in `quiz.js`**

**4. Stage, commit, and push your branch**
```bash
git add .
git commit -m "solve: quiz question 3 – John"
git push -u origin quiz/yourname-questionnumber
```

**5. Open a Pull Request on GitHub**
- Go to the repository on GitHub
- Click **Compare & pull request**
- Add a clear title and description
- Submit

### Rules
- Do **NOT** push directly to `main`
- Solve **only your assigned question**
- Do **NOT** modify other students' work
- Follow the branch naming format: `quiz/yourname-questionnumber`

---

## Branch

Currently active branch: `quiz`  
Default branch: `main`  
Repository: [Vokeh0007/array_and-arrays_methods](https://github.com/Vokeh0007/array_and-arrays_methods)

---

## Prerequisites

- Basic understanding of JavaScript syntax
- Node.js installed (`node --version` to verify)
- A code editor (VS Code recommended)

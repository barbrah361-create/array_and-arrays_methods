// JS object to JSON string

let student = {
  name: "John",
  age: 20,
  course: "Web Development",
};

let jsonData = JSON.stringify(student);

console.log(jsonData);

//Converts JSON string → JavaScript object.
let jsonData1 = '{"name":"John","age":20}';

let obj = JSON.parse(jsonData1);

console.log(obj.name);

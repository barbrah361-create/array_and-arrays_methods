function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}
console.log("Second largest number:", secondLargest([10, 5, 8, 12, 3])); // Output: 10

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let primes = [];
let primeCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    primes[primeCount] = numbers[i];
    primeCount++;
  }
}
console.log("Prime numbers:", primes);

//write a function that checks if a number is palindrome
//palindrome is a number that reads the same backward as forward, e.g., 121, 12321
function isPalindrome(num) {
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(isPalindrome(12321)); //true
console.log(isPalindrome(12345)); //false

//write a function that checks if a number is an Armstrong number
//Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits, e.g., 153 (1^3 + 5^3 + 3^3 = 153)
function isArmstrong(num) {
  const str = num.toString();
  const numDigits = str.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(str[i]), numDigits);
  }
  return sum === num;
}
console.log(isArmstrong(153)); //true
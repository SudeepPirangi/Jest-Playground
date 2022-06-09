/**
 * Function to extract numbers from string and find their total
 * @param {string} input
 * @returns sum
 */
const add = (input) => {
  if (!input.trim().length) return 0;
  let inputArr = stringToArray(input);
  // console.log("inputArr", inputArr);
  return getSum(inputArr);
};

/**
 * Identifies delimiter if the string has anything included
 * Replaces '\n' characters with delimiter
 * Splits final string input to array of numbers
 * @param {string} input
 * @returns characters_as_array
 */
function stringToArray(input) {
  let delimiter = ",";
  if (input.indexOf("//") === 0) {
    delimiter = input.charAt(2);
    input = input.substring(3, input.length);
  }
  input = input.replace(/\n/g, delimiter);
  return input.split(delimiter).map((num) => +num);
}

/**
 * Function to calculate sum of numbers in input array
 * return 'invalid input' if array has any non-numeric
 * throws error if array has any negative numbers
 * @param {string} inputArr
 * @returns sum_of_elements
 */
function getSum(inputArr) {
  var sum = 0;
  var negatives = [];
  inputArr = inputArr.filter((num) => isNaN(num) || num < 1000);
  for (let i = 0; i < inputArr.length; ++i) {
    if (isNaN(inputArr[i])) {
      sum = "invalid input";
      break;
    }
    if (inputArr[i] < 0) negatives.push(inputArr[i]);
    else sum += inputArr[i];
  }
  if (negatives.length) {
    throw new Error(`negatives not allowed - ${negatives.join(", ")}`);
  }
  return sum;
}

// console.log('Addition of - "//;2\n20;9"', add("//;2\n20;9"));

module.exports = { add, stringToArray, getSum };

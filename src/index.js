/**
 * Function to extract numbers from string and find their total
 * @param {string} input
 * @returns sum
 */
const add = (input) => {
  if (!input.trim().length) return 0;
  let inputArr = stringToArray(input);
  console.log("inputArr", inputArr);
  return getSum(inputArr);
};

/**
 * Replaces '\n' characters with ',' and converts string input to array of numbers
 * @param {string} input
 * @returns characters_as_array
 */
function stringToArray(input) {
  input = input.replace(/\n/g, ",");
  return input.split(",").map((num) => +num);
}

/**
 * Function to calculate sum of numbers in input array
 * @param {string} inputArr
 * @returns sum_of_elements
 */
function getSum(inputArr) {
  var sum = 0;
  for (let i = 0; i < inputArr.length; ++i) {
    if (isNaN(inputArr[i])) {
      sum = "invalid input";
      break;
    }
    sum += inputArr[i];
  }
  return sum;
}

// console.log('Addition of - "1\n2,5"', add("1\n2,5"));

module.exports = { add, stringToArray };

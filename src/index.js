/**
 * Function to extract numbers from string and find their total
 * @param {string} input
 * @returns sum
 */
const add = (input) => {
  if (!input.trim().length) return 0;
  let inputArr = input.split(",");
  console.log("inputArr", inputArr);
  return getSum(inputArr);
};

/**
 * Function to calculate sum of numbers in input array
 * @param {string} inputArr
 * @returns sum_of_elements
 */
function getSum(inputArr) {
  var sum = 0;
  for (let i = 0; i < inputArr.length; ++i) {
    if (isNaN(+inputArr[i])) {
      sum = "invalid input";
      break;
    }
    sum += +inputArr[i];
  }
  return sum;
}

// console.log('Addition of - ""', add("a"));

module.exports = add;

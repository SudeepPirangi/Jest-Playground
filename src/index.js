const add = (input) => {
  if (!input.trim().length) return 0;
  let inputArr = input.split(",");
  console.log("inputArr", inputArr);
  return getSum(inputArr);
};

function getSum(inputArr) {
  return inputArr.reduce((total, num) => (isNaN(+num) ? "invalid input" : (total += +num)), 0);
}

// console.log('Addition of - ""', add("a"));

module.exports = add;

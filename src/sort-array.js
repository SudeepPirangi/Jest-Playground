const sortArray = (array) => {
  if (!array) return null;
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("Sorted Array", arr);
  return arr;
};

// const inputArray = [10, 50, 30, 40];
// console.log("Input Array", inputArray);
// console.log("Sorted Array", sortArray(inputArray));

module.exports = sortArray;

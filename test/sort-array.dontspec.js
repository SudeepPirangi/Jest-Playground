const sortArray = require("../src/sort-array");

const inputArray = [90, 50, 100];
const expectedOutput = [50, 90, 100];

describe("Sorting Numeric Array", () => {
  it(`Input as [${inputArray}]`, () => {
    expect(sortArray(inputArray)).toEqual(expectedOutput);
  });

  test(`Input as null`, () => {
    expect(sortArray(null)).toBeNull();
  });
});

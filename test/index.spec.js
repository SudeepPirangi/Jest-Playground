const { add, stringToArray, getSum } = require("../src/index");

describe("Adds simple/generic numbers", () => {
  test("Empty string input - 0", () => {
    expect(add("")).toBe(0);
  });

  test("Single numeric character '1' - 1", () => {
    expect(add("1")).toBe(1);
  });

  test("Non-numeric character 'ab' - invalid input", () => {
    expect(add("ab")).toBe("invalid input");
  });

  test("Special characters '%,$' - invalid input", () => {
    expect(add("%,$")).toBe("invalid input");
  });

  test("Non-numeric characters 'a,b' - invalid input", () => {
    expect(add("a,b")).toBe("invalid input");
  });

  test("Two numbers input '10,20' - 30", () => {
    expect(add("10,20")).toBe(30);
  });

  test("Multiple numbers input '110,a,50' - invalid input", () => {
    expect(add("110,a,50")).toBe("invalid input");
  });

  test("Multiple numbers input '110,20,50' - 180", () => {
    expect(add("110,20,50")).toBe(180);
  });

  test("Multiple numbers input '110,20,50,120,50' - 350", () => {
    expect(add("110,20,50,120,50")).toBe(350);
  });

  test("New-line chars in input '1\n2,3' - 6", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});

describe("String to array convertion", () => {
  test("Alphabetic string 'a,b,c' - [NaN, NaN, NaN]", () => {
    expect(stringToArray("a,b,c")).toEqual([NaN, NaN, NaN]);
  });

  test("Alphabetic string '90\n20,c' - [90, 20, NaN]", () => {
    expect(stringToArray("90\n20,c")).toEqual([90, 20, NaN]);
  });

  test("Numeric string '90\n20,50' - [90, 20, 50]", () => {
    expect(stringToArray("90\n20\n50")).toEqual([90, 20, 50]);
  });

  test("New delimiter with combination of '\n' '//;100\n20;50' - [100, 20, 50]", () => {
    expect(stringToArray("//;100\n20;50")).toEqual([100, 20, 50]);
  });

  test("New delimiter with combination of '\n' and non-numeric '//&100\n20&a' - [100, 20, NaN]", () => {
    expect(stringToArray("//&100\n20&a")).toEqual([100, 20, NaN]);
  });

  test("New delimiter '//*2*20\n9' - [2, 20, 9]", () => {
    expect(stringToArray("//*2*20\n9")).toEqual([2, 20, 9]);
  });

  test("New delimiter '//*2*-2\n9' - [2, -2, 9]", () => {
    expect(stringToArray("//*2*-2\n9")).toEqual([2, -2, 9]);
  });

  test("Complex delimiter '//#-32#-12\n9#93\n-8' - [-32, -12, 9, 93, -8]", () => {
    expect(stringToArray("//#-32#-12\n9#93\n-8")).toEqual([-32, -12, 9, 93, -8]);
  });

  test("Regular delimiter '-32\n-12,-8' - [-32, -12, -8]", () => {
    expect(stringToArray("-32\n-12,-8")).toEqual([-32, -12, -8]);
  });
});

describe("Addition of elements in array", () => {
  test("Sum of [10] => 10", () => {
    expect(getSum([10])).toBe(10);
  });

  test("Sum of [10, NaN] => invalid input", () => {
    expect(getSum([10, NaN])).toBe("invalid input");
  });

  test("Sum of [10, 20] => 30", () => {
    expect(getSum([10, 20])).toBe(30);
  });

  test("Sum of [90, 20, NaN] => invalid input", () => {
    expect(getSum([90, 20, NaN])).toBe("invalid input");
  });

  test("Sum of [90, 20, 50] => 160", () => {
    expect(getSum([90, 20, 50])).toBe(160);
  });

  test("Sum of [2, -2, 9] => negatives not allowed - -2", () => {
    expect(() => getSum([2, -2, 9])).toThrow("negatives not allowed - -2");
  });

  test("Sum of [-32, -12, 9, 93, -8] => negatives not allowed - -32, -12, -8", () => {
    expect(() => getSum([-32, -12, 9, 93, -8])).toThrow("negatives not allowed - -32, -12, -8");
  });

  test("Sum of [-32, -12, -8] => negatives not allowed - -32, -12, -8", () => {
    expect(() => getSum([-32, -12, -8])).toThrow("negatives not allowed - -32, -12, -8");
  });
});

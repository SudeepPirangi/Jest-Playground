const { add, stringToArray } = require("../src/index");

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
});

describe("Adds string numbers", () => {
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

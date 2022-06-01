const add = require("../src/index");

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
});

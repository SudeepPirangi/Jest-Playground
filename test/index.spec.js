const add = require("../src/index");

describe("Adds string numbers", () => {
  test("Empty string input - 0", () => {
    expect(add("")).toBe(0);
  });

  test("Single numeric character '1' - 1", () => {
    expect(add("1")).toBe(1);
  });

  test("Non-numeric character 'a' - invalid input", () => {
    expect(add("a")).toBe("invalid input");
  });
});

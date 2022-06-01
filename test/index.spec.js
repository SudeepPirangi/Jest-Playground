const add = require("../src/index");

describe("Adds string numbers", () => {
  test("Empty sting input", () => {
    expect(add("")).toBe(0);
  });
});

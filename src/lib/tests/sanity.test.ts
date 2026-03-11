import { formatUtils } from "../formatUtils";

describe("Sanity test", () => {
  it("Should return good result after adding two values", () => {
    expect(2 + 2).toBe(4);
  });


  it("Should return valid capitalize sentence", () => {
    expect(formatUtils("hello world")).toEqual("Hello World")
  })

  it("Should return capitalize word", () => {
    expect(formatUtils("hello")).toEqual("Hello")
  })
});

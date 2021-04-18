// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should return '42' when encoding 'i' and 'j'", () => {
    const input = "ij";
    const expected = "4242";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("should decode '42' to '(i/j)'", () => {
    const input = "42";
    const expected = "(i/j)";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters when encoding", () => {
    const input = "A Message";
    const expected = "11 23513434112251";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message when encoding", () => {
    const input = "Hello World";
    const expected = "3251131343 2543241341";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message when decoding", () => {
    const input = "3251131343 2543241341";
    const expected = "hello world";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
});

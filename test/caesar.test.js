// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if shift value equals zero", () => {
    const input = "A message";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return false if shift value is less than -25", () => {
    const input = "A message";
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return false if shift value is greater than 25", () => {
    const input = "A message";
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should ignore capital letters", () => {
    const input = "Zebra Magazine";
    const shift = 3;
    const actual = caesar(input, shift);
    expect(actual).to.equal("cheud pdjdclqh");
  });

  it("should handle shifts past end of the alphabet", () => {
    const input = "Z";
    const shift = 3;
    const actual = caesar(input, shift);
    expect(actual).to.equal("c");
  });

  it("should maintain all spaces and non-alphabetic symbols", () => {
    const input = " Zebra? Magazine!";
    const shift = 3;
    const actual = caesar(input, shift);
    expect(actual).to.equal(" cheud? pdjdclqh!");
  });
});

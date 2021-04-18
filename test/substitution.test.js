// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if given alphabet is not 26 characters long.", () => {
    const input = "message";
    const alphabet = "plmoknijbuhvygctfxrdzeswq";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should correctly translate phrase to given alphabet", () => {
    const input = "message";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(input, alphabet);
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
  });

  it("should return fasle if there are duplicate values in given alphabet.", () => {
    const input = "message";
    const alphabet = "plloknijbuhvygctfxrdzeswq";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should maintain spaces in message when encoding.", () => {
    const input = "a message";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(input, alphabet);
    const expected = "p ykrrpik";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in message when decoding", () => {
    const input = "p ykrrpik";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(input, alphabet, false);
    const expected = "a message";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters.", () => {
    const input = "A message";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(input, alphabet);
    const expected = "p ykrrpik";
    expect(actual).to.equal(expected);
  });
});

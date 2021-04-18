// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const encoderKey = {
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  };
  function substitution(input, alphabet = "", encode = true) {
    // your solution code here
    const alphabetLetters = alphabet.split("");
    if (
      alphabet.length !== 26 ||
      new Set(alphabetLetters).size !== 26 ||
      alphabet == ""
    ) {
      return false;
    }
    let index = 0;
    for (const letter in encoderKey) {
      encoderKey[letter] = alphabetLetters[index];
      index += 1;
    }
    const words = input.toLowerCase().split(" ");
    const message = [];
    if (encode) {
      words.forEach((word) => {
        let letters = word.split("");
        const encodedWord = letters.map((letter) => encoderKey[letter]);
        message.push(encodedWord.join(""));
      });
    } else {
      words.forEach((word) => {
        let letters = word.split("");
        console;
        const decodedWord = letters.map(
          (letter) =>
            Object.keys(encoderKey)[Object.values(encoderKey).indexOf(letter)]
        );
        message.push(decodedWord.join(""));
      });
    }
    return message.join(" ");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

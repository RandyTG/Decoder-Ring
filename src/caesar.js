// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    if (shift == 0 || shift < -25 || shift > 25) {
      return false;
    }
    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let letter = input.toLowerCase().charCodeAt(i);
        if (letter <= 122 && letter >= 97 && shift > 0) {
          letter = ((letter - 97 + shift) % 26) + 97;
        } else if (letter <= 122 && letter >= 97 && shift < 0) {
          letter = ((letter - 122 + shift) % 26) + 122;
        }
        result += String.fromCharCode(letter);
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        let letter = input.toLowerCase().charCodeAt(i);
        if (letter <= 122 && letter >= 97 && shift > 0) {
          letter = ((letter - 122 + -shift) % 26) + 122;
        } else if (letter <= 122 && letter >= 97 && shift < 0) {
          letter = ((letter - 97 + -shift) % 26) + 97;
        }
        result += String.fromCharCode(letter);
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

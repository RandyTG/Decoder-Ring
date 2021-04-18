// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encoderKey = [
    {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    },
  ];
  function polybius(input, encode = true) {
    // your solution code here
    if (encode == false && input.split(" ").join("").length % 2 !== 0) {
      return false;
    }
    const words = input.toLowerCase().split(" ");
    const message = [];
    if (encode) {
      words.forEach((word) => {
        let letters = word.split("");
        const encodedWord = letters.map((letter) => encoderKey[0][letter]);
        message.push(encodedWord.join(""));
      });
    } else {
      const decoderKey = { ...encoderKey[0] };
      words.forEach((word) => {
        let wordCode = [];
        for (let i = 0; i < word.length; i += 2) {
          wordCode.push(word.substring(i, i + 2));
        }
        const decodedWord = wordCode.map((code) => {
          if (code == 42) {
            return "(i/j)";
          } else {
            return Object.keys(decoderKey)[
              Object.values(decoderKey).indexOf(code)
            ];
          }
        });
        message.push(decodedWord.join(""));
      });
    }
    return message.join(" ");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

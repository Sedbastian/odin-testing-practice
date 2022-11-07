function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

const calculator = {
  sum: function sum(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  }
};

function caesarCipher(string, shift) {
  let arrayedString = Array.from(string);
  let shiftedArray = [];
  arrayedString.forEach(character => {
    if (character >= "a" && character <= "z") {
      let shiftedChar = String.fromCharCode(character.charCodeAt(0) + shift);
      if (shiftedChar >= "a" && shiftedChar <= "z") {
        shiftedArray.push(shiftedChar);
      } else {
        if (shiftedChar > "z") {
          shiftedChar = String.fromCharCode(
            "a".charCodeAt(0) -
              1 +
              (shiftedChar.charCodeAt(0) - "z".charCodeAt(0))
          );
          shiftedArray.push(shiftedChar);
        } else if (shiftedChar < "a") {
          shiftedChar = String.fromCharCode(
            "z".charCodeAt(0) +
              1 -
              ("a".charCodeAt(0) - shiftedChar.charCodeAt(0))
          );
          shiftedArray.push(shiftedChar);
        }
      }
    } else if (character >= "A" && character <= "Z") {
      let shiftedChar = String.fromCharCode(character.charCodeAt(0) + shift);
      if (shiftedChar >= "A" && shiftedChar <= "Z") {
        shiftedArray.push(shiftedChar);
      } else {
        if (shiftedChar > "Z") {
          shiftedChar = String.fromCharCode(
            "A".charCodeAt(0) -
              1 +
              (shiftedChar.charCodeAt(0) - "Z".charCodeAt(0))
          );
          shiftedArray.push(shiftedChar);
        } else if (shiftedChar < "A") {
          shiftedChar = String.fromCharCode(
            "Z".charCodeAt(0) +
              1 -
              ("A".charCodeAt(0) - shiftedChar.charCodeAt(0))
          );
          shiftedArray.push(shiftedChar);
        }
      }
    } else {
      shiftedArray.push(character);
    }
  });
  return shiftedArray.join("");
}

function analyzeArray(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  average = average / array.length;

  let min = array[0];
  array.forEach(element => {
    if (element < min) min = element;
  });

  let max = array[0];
  array.forEach(element => {
    if (element > max) max = element;
  });

  return {
    average,
    min,
    max,
    length: array.length
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};

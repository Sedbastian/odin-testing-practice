const testPractice = require("./testing-practice");

test("capitalize", () => {
  expect(testPractice.capitalize("sebastian")).toBe("Sebastian");
});

test("reverse string", () => {
  expect(testPractice.reverseString("sebastian")).toBe("naitsabes");
});

test("calculator.sum", () => {
  expect(testPractice.calculator.sum(12, 34)).toBeCloseTo(46);
});

test("calculator.subtract", () => {
  expect(testPractice.calculator.subtract(34, 12)).toBeCloseTo(22);
});

test("calculator.multiply", () => {
  expect(testPractice.calculator.multiply(3.14159, 34)).toBeCloseTo(106.81406);
});

test("calculator.divide", () => {
  expect(testPractice.calculator.divide(34, 3.14159)).toBeCloseTo(10.822545272);
});

test("Caesar Cipher, shift: +1", () => {
  expect(testPractice.caesarCipher("Hello, world! ZzZ-aAa", +1)).toBe(
    "Ifmmp, xpsme! AaA-bBb"
  );
});

test("Caesar Cipher, shift: -2", () => {
  expect(testPractice.caesarCipher("Hello, world! ZzZ-aAa", -2)).toBe(
    "Fcjjm, umpjb! XxX-yYy"
  );
});

test("analyzeArray", () => {
  expect(testPractice.analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

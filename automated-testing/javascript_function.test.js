const calculator = require("./javascript_function");

test("check if the add function is working", () => {
  expect(calculator.add(70, 170)).toBe(240);
});
test("check if the subtract function is working", () => {
  expect(calculator.subtract(70, 50)).toBe(20);
});
test("check if the multiply function is working", () => {
  expect(calculator.multiply(5, 8)).toBe(40);
});
test("check if the divide function is working", () => {
  expect(calculator.divide(100, 25)).toBe(4);
});
//########################################################
test("check if the add function is working", () => {
  expect(calculator.add(10, 170)).toBe(180);
});
test("check if the subtract function is working", () => {
  expect(calculator.subtract(50, 10)).toBe(40);
});
test("check if the multiply function is working", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
test("check if the divide function is working", () => {
  expect(calculator.divide(90, 30)).toBe(3);
});

const myCalculator = {
  obj: {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20,
  },
  showData: function (obj) {
    console.log("=======================");
    console.log("First Number: " + obj.num1);
    console.log("Second Number: " + obj.num2);
    console.log("The sum is: " + obj.sum);
    console.log("The difference is: " + obj.difference);
    console.log("The product is: " + obj.product);
    console.log("The quotient is: " + obj.quotient);
  },

  add: function (num1, num2) {
    return (this.obj.sum = num1 + num2);
  },
  subtract: function (num1, num2) {
    return (this.obj.difference = num1 - num2);
  },
  multiply: function (num1, num2) {
    return (this.obj.product = num1 * num2);
  },
  divide: function (num1, num2) {
    return (this.obj.quotient = num1 / num2);
  },
  newSetOfNumbers: function (num1, num2) {
    return (
      (this.obj.num1 = num1),
      (this.obj.num2 = num2),
      (this.obj.sum = this.add(num1, num2)),
      (this.obj.difference = this.subtract(num1, num2)),
      (this.obj.product = this.multiply(num1, num2)),
      (this.obj.quotient = this.divide(num1, num2))
    );
  },
};

let calc = myCalculator;
// calc.showData(calc.obj);
// calc.newSetOfNumbers(200, 10);
// calc.showData(calc.obj);
// calc.newSetOfNumbers(500,20)
// calc.showData(calc.obj)

function test() {
  const sumResult = calc.add(2, 6);
  const diffResult = calc.subtract(16, 8);
  const prodResult = calc.multiply(4, 2);
  const quotResult = calc.divide(64, );
  const expected = 8;

  console.assert(
    sumResult === expected,
    `Check add function is failing - Expected: ${expected} Recieved: ${sumResult}`
  );
  console.assert(
    diffResult === expected,
    `Check subrtact function is failing - Expected: ${expected} Recieved: ${diffResult}`
  );
  console.assert(
    prodResult === expected,
    `Check multiply function is failing - Expected: ${expected} Recieved: ${prodResult}`
  );
  console.assert(
    quotResult === expected,
    `Check divide function is failing - Expected: ${expected} Recieved: ${quotResult}`
  );
}

test();
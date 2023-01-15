const CalcOOP = require("./CalcOOP");
const { operation, numbers } = require("./getData");
const calc = new CalcOOP(operation, numbers);
console.log(calc.init())
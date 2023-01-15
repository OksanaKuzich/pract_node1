const CalcOOP = require("./CalcOOP");
const { operation, numbers } = require("./getData");
const calc = CalcOOP.init(operation, numbers);
console.log(calc);

// Sum+, sub-, mult*, div\
// node calc.js sum 3 2 3
// node calc.js mult 3 2 3

// console.log(process.argv);

const [, , operation, ...data] = process.argv;
console.log(operation);

const numbers = data.map((item) => Number(item));
console.log(numbers);

const getResult = (oper, arr) => {
  let result = null;

  switch (oper) {
    case "sum":
      result = arr.reduce((acc, item) => acc + item);
      break;
    case "sub":
      result = arr.reduce((acc, item) => acc - item);
      break;
    case "mult":
      result = arr.reduce((acc, item) => acc * item);
      break;
    case "div":
      result = arr.reduce((acc, item) => acc / item);
      break;

    default:
      result = "unknown operation type";
      break;
  }

  return result;
};

console.log(getResult(operation, numbers));

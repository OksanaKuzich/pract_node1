class CalcOOP {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }

  getResult = (oper, arr) => {
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

  init = () => {
    return this.getResult(this.operation, this.numbers);
  };
}

module.exports = CalcOOP;
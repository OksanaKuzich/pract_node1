class CalcOOP {
  static getResult = (oper, arr) => {
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

  static init = (oper, arr) => {
    return this.getResult(oper, arr);
  };
}

module.exports = CalcOOP;

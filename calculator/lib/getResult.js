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

module.exports = getResult;

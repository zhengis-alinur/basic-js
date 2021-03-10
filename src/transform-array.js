const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Object.prototype.toString.call(arr) == '[Object Array]') {
    throw new Error("not an Array");
  }
  if(arr.length == 0) {
    return [];
  }
  let disPrev = '--discard-prev';
  let doubPrev = '--double-prev';
  let disNext = '--discard-next';
  let doubNext = '--double-next';

  let newArr = arr.slice(0);
  for(i = 0; i < newArr.length; i++) {

    if(i == 0 && (newArr[i] == disPrev || newArr[i] == doubPrev)) {
      continue;
    }
    if(i == newArr.length - 1 && (newArr[i] == disNext || newArr[i] == doubNext)) {
      continue;
    }

    if(newArr[i] == disPrev) {
      newArr.splice(i-1,1);
      continue;
    }
    if(newArr[i] == disNext) {
      newArr.splice(i+1,1);
      continue;
    }

    if(newArr[i] == doubNext) {
      newArr.splice(i, 1, newArr[i+1]);
      continue;
    }

    if(newArr[i] == doubPrev) {
      newArr.splice(i, 1, newArr[i-1]);
      continue;
    }
  }
  return newArr.filter((v, i, arr) => !(v == disNext || v == disPrev || v == doubNext || v == doubPrev));
}
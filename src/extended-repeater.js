const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options["repeatTimes"];
  let separator = options["separator"];
  let addition = options["addition"];
  if(typeof options["addition"] == 'undefined'){
    addition = '';
  } else {
    addition = options["addition"];
  }
  let additionRepeatTimes = options["additionRepeatTimes"];
  let additionSeparator = options["additionSeparator"];
  if(typeof options["separator"] == "undefined") {
    separator = "+";
  }

  let additionSeq = new Array(additionRepeatTimes).fill(""+addition);
  if(typeof options["additionSeparator"] == "undefined") {
    additionSeq = additionSeq.join("|");
  } else {
    additionSeq = additionSeq.join(additionSeparator);
  }
  let mainArr = new Array(repeatTimes).fill(str + additionSeq);
  if(options.length == 0) {
    return mainArr.join("");
  } else {
    return mainArr.join(separator);
  }
};
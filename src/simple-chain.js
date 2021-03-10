const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(typeof value == 'undefined') {
      value = "";
    }
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(isNaN(+position)) {
      this.arr = [];
      throw new Error();
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join("~~");
    this.arr = [];
    console.log(result);
    return result;
  }
};

module.exports = chainMaker;

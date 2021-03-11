const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(str, key) {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let chArr = str.split("");
    let numsForStr = this.getNumericValuesOfStr(str);

    if(str.length - key.length > 0) {
      key += this.generateEndOfKeyword(key, str.length - key.length);
    } else {
      key = key.split("").splice(0, str.length).join("");
    }
    let numsForKey = this.getNumericValuesOfStr(key);
    let x = 0;
    for(let i = 0; i < str.length; i++) {
      if(chArr[i].length === 1 && chArr[i].match(/[A-Z]/i)) {
        chArr[i] = symbols[(numsForStr[i] +numsForKey[x]) % symbols.length];
        x++;
      }
    }
    return chArr.join("");
  }
  decrypt(str, key) {
    console.log(str);
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let chArr = str.split("");
    if(str.length > key.length) {
      key += this.generateEndOfKeyword(key, str.length - key.length);
    }
    let numsForKey = this.getNumericValuesOfStr(key);
    let numsForStr = this.getNumericValuesOfStr(str);
    let x = 0;
    for(let i = 0; i < str.length; i++) {
      if(chArr[i].length === 1 && chArr[i].match(/[A-Z]/i)) {
        chArr[i] = symbols[(numsForStr[i] + symbols.length - numsForKey[x]) % symbols.length];
        x++;
      }
    }
    return chArr.join("");
  }

  generateEndOfKeyword(key, length){
    let result = '';
    let x = 0;
    for(let i = 0; i < length; i++) {
      result += key.charAt(x);
      x++;
      if(x > key.length - 1) {
        x = 0;
      }
    }
    return result;
  }


  getNumericValuesOfStr(str) {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let numsForStr = [];
    let strChArr = str.toUpperCase().split("")
    strChArr.map(function (v, _, strChArr) {
      if(/[A-Z]/.test(v)) {
        numsForStr.push(symbols.indexOf(v));
      } else {
        numsForStr.push(v);
      }
    });
    return numsForStr;
  }
}

module.exports = VigenereCipheringMachine;

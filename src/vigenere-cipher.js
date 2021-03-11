const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  isDirect = true;
  constructor(isDirect) {
    if(typeof isDirect === 'undefined') {
      this.isDirect = true;
    } else {
      this.isDirect = isDirect;
    }
  }
  encrypt(str, key) {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let chArr = str.split("");

    if(str.length - key.length > 0) {
      key += this.generateEndOfKeyword(key, str.length - key.length);
    } else {
      key = key.substr(0, str.length);
    }

    let numsForKey = this.getNumericValuesOfStr(key);
    let numsForStr = this.getNumericValuesOfStr(str);

    let x = 0;
    for(let i = 0; i < str.length; i++) {
      if(chArr[i].length === 1 && chArr[i].match(/[A-Z]/i)) {
        chArr[i] = symbols[(numsForStr[i] +numsForKey[x]) % symbols.length];
        x++;
      }
    }
    if(!this.isDirect) {
      return chArr.reverse().join("");
    }
    return chArr.join("");
  }
  decrypt(str, key) {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    let chArr = str.split("");
    if(str.length - key.length > 0) {
      key += this.generateEndOfKeyword(key, str.length - key.length);
    } else {
      key = key.substr(0, str.length);
    }
    let numsForStr = this.getNumericValuesOfStr(str);
    let numsForKey = this.getNumericValuesOfStr(key);
    let x = 0;
    for(let i = 0; i < str.length; i++) {
      if(chArr[i].length === 1 && chArr[i].match(/[A-Z]/i)) {
        chArr[i] = symbols[(numsForStr[i] + symbols.length - numsForKey[x]) % symbols.length];
        x++;
      }
    }
    if(!this.isDirect) {
      return chArr.reverse().join("");
    }
    return chArr.join("");
  }
  generateEndOfKeyword(key, length){
    let result = [];
    let x = 0;
    if(this.isDirect) {
      for (let i = 0; i < length; i++) {
        result.push(key.charAt(x));
        x++;
        if (x >= key.length) {
          x = 0;
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        result.unshift(key.charAt(x));
        x++;
        if (x >= key.length) {
          x = 0;
        }
      }
    }
    return result.join("");
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

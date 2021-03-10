const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date == 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) == "[object Date]") {
    let month = date.getMonth();
    if(month < 2 || month > 10) {
      return 'winter';
    } else if(month >= 2 && month <= 4) {
      return 'spring';
    } else if(month >= 5 && month <= 7) {
      return 'summer';
    } else {
      return 'autumn';
    }
  } else {
    throw new Error("invalid parameter");
  }
  
};

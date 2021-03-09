const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Object.prototype.toString.call(members) != "[object Array]") {
    throw new Error("invalid parameter");
  }
  members = members.filter((v, _, members) => typeof v == 'string').map((v, _, members) => v = v.split("")[0].toUpperCase()).sort();
  return members;
};

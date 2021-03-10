const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Object.prototype.toString.call(members) != "[object Array]") {
    return false;
  }
  members = members.filter((v, _, members) => typeof v == 'string')
  members = members.map((v, _, members) => v = v.trim());
  members = members.map((v, _, members) => v = v.split("")[0].toUpperCase()).sort();
  members = members.join("")
  return members;
};

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, parent) {
    // let node = new Node(null);
    // makeTree(arr, node);
    // return node.depth - 1;
    if(typeof parent === "undefined") {
      parent = new Node(null)
    }
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
        let current = new Node(parent);
        parent.childs.push(current);
        this.calculateDepth(arr[i], current);
      }
    }
    let max = 1;
    for(let i = 0; i < parent.childs.length; i++) {
      if(max < parent.childs[i].depth) {
        max = parent.childs[i].depth;
      }
    }
    parent.depth = parent.depth + max;
    return parent.depth - 1;
  }
}

function Node(parent) {
  this.parent = parent;
  this.childs = [];
  this.depth = 1;
}
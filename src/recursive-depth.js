const CustomError = require("../extensions/custom-error");

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

module.exports = class DepthCalculator {
  tempParent = new Node(null);
  calculateDepth(arr) {
    // let node = new Node(null);
    // makeTree(arr, node);
    // return node.depth - 1;
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
        let current = new Node(parent);
        this.tempParent.childs.push(current);
        makeTree(arr[i], current);
      }
    }
    let max = 1;
    for(let i = 0; i < parent.childs.length; i++) {
      if(max < parent.childs[i].depth) {
        max = parent.childs[i].depth;
      }
    }
    parent.depth = parent.depth + max;
  }
}

function makeTree(arr, parent) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      current = new Node(parent);
      parent.childs.push(current);
      makeTree(arr[i], current);
    }
  }
  let max = 1;
  for(let i = 0; i < parent.childs.length; i++) {
    if(max < parent.childs[i].depth) {
      max = parent.childs[i].depth;
    }
  }
  parent.depth = parent.depth + max;
}

function Node(parent) {
  this.parent = parent;
  this.childs = [];
  this.depth = 1;
}
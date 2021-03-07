// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
const { TreeNode} = require('../problems/01-bst');

function getHeight(root) {
  if(!root) return -1;

  let leftHeight = getHeight(root.left);
  console.log("lh", leftHeight)
  let rightHeight = getHeight(root.right);
  console.log("rh", rightHeight);

  return Math.max(leftHeight, rightHeight) +1;
}

//
//d
//b
//a
//--------
//Stack

let a = new TreeNode(10);
let b = new TreeNode(9);
let c = new TreeNode(15);
let d = new TreeNode(1);
let e = new TreeNode(7);
let f = new TreeNode(5);
let g = new TreeNode(12);

a.left = b;
a.right = c;
b.left = d;
d.right = e;
e.left = f;
c.left = g;

console.log(getHeight(a))

module.exports = {
  getHeight
};

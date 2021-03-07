
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.
// You may use your BST implementation to test this out.
const { TreeNode, BST } = require('../problems/01-bst');

function findMin(root) {
    // Your code here
    //minimum is the furthest left value
    if (!root) return null;

    let current = root;
    while(current.left){
      current = current.left;
    }
    return current;

}

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

console.log(findMin(a));

module.exports = {
  findMin
};

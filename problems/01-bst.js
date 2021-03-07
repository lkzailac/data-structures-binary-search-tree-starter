class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
    // Initialize an empty binary search tree
    constructor() {
        this.root = null;

    }

    // Insert a node into the binary search tree
    insert(val, currentNode=this.root) {
        if(!this.root) {
            this.root = new TreeNode(val);
        }
        if(currentNode.val < val) {
            currentNode.left = insert(val, currentNode)
        } else {
            currentNode.right = insert(val, currentNode)
        }
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        // Your code here
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
    }
}

module.exports = {
    TreeNode,
    BST
};

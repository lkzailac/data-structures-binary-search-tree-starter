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
    // insert(val) {
    //     if(!this.root) {
    //         return this.root = new TreeNode(val);
    //     }
    //     //inserted is false
    //     //while false
    //     //check
    //     let currentNode = this.root;

    //     while(currentNode) {
    //         if(val < currentNode.val) {
    //             if(!currentNode.left) {
    //                 //set the value
    //                 currentNode.left = new TreeNode(val);
    //                 return;
    //             }
    //             currentNode = currentNode.left;
    //         } else {
    //             if(!currentNode.right) {
    //                 currentNode.right = new TreeNode(val);
    //                 return;
    //             }
    //             currentNode = currentNode.right;
    //         }
    //     }
    // }

    insert(val, currentNode = this.root) {
        if(!this.root) return this.root = new TreeNode(val);

        if(val < currentNode.val) {
            if(currentNode.left) {
                this.insert(val, currentNode.left);
            } else {
                return currentNode.left = new TreeNode(val);
            }
        } else {
            if(currentNode.right) {
                this.insert(val, currentNode.right);
            } else {
                return currentNode.right = new TreeNode(val);
            }
        }
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        if(!currentNode) return false;

        if(val < currentNode.val) {
            return this.searchRecur(val, currentNode.left);
        } else if (val > currentNode.val) {
            return this.searchRecur(val, currentNode.right);
        } else {
            //it's equal
            return true;
        }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        let q =
    }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(1)

console.log(tree)

module.exports = {
    TreeNode,
    BST
};

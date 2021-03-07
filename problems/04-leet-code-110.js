// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

// Hint: it may be helpful to get the height of your BST

function isBalanced(root) {
    if(!root) return true;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    let diff = Math.abs(leftHeight - rightHeight);

    let subLeft = isBalanced(root.left);
    let subRight = isBalanced(root.right);


    if(diff <= 1 && subLeft && subRight) {
        return true;
    } else {
        return false;
    }
}

function getHeight(root) {
    if(!root) return -1;

    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

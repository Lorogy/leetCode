/*Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(checkDepth(root)==-1) return false;
    return true;
};

function checkDepth(root){
    if(!root) return 0;
    var left=checkDepth(root.left);
    var right=checkDepth(root.right);
    if(left==-1||right==-1) return -1;
    if(Math.abs(left-right)>1) return -1;
    return  Math.max(left,right)+1; 
}
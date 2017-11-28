/*Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3*/

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
var isSymmetric = function(root) {
    if(root==null) return true;
    return isSym(root.left,root.right);
};
function isSym(leftNode,rightNode){
    if(leftNode==null&&rightNode==null) return true;
    if(leftNode==null||rightNode==null) return false;
    if(leftNode.val==rightNode.val){
        return isSym(leftNode.left,rightNode.right)&&isSym(leftNode.right,rightNode.left);
    }
    else{
        return false;
    }
}
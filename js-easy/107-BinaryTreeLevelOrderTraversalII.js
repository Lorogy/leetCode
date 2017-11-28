/*Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var rst=[];
    var rstmp=[];
    var tmp=[];
    if(root==null) return rst;
    tmp.push(root);
    while(tmp.length){
        for(var i=0,len=tmp.length;i<len;i++){
            rstmp.push(tmp[0].val);
            if(tmp[0].left!=null) tmp.push(tmp[0].left);
            if(tmp[0].right!=null) tmp.push(tmp[0].right);
            tmp.shift();
        }
        rst.unshift(rstmp);
        rstmp=[];
    }
    
    return rst;
};
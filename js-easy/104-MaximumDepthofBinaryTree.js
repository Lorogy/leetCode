/*Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.*/


//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxDepth = function(root) {
    if(root==null) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};


var maxDepth = function(root) {
    if(root==null) return 0;
    
    var dep=0;
    var stack=[];
    stack.push(root);
    while(stack.length){
        dep++;
        for(var i=0,len=stack.length;i<len;i++){
            var tmp=stack[0];
            if(tmp.left!=null) stack.push(tmp.left);
            if(tmp.right!=null) stack.push(tmp.right);
            stack.shift();
        }
        
    }
    
    return dep;
};
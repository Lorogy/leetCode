/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res=[];
    generate(n,n,"",res);
    return res;
};

function generate(left,right,str,res){
    if(left>right) return;
    if(left==0&right==0){
        res.push(str);
    }else{
        if(left>0) generate(left-1,right,str+"(",res);
        if(right>0) generate(left,right-1,str+")",res);
    }
}
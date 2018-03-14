/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    //数字对应字母
    var arr=['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    //最终字符串数组
    var rst=[];
    if(digits.length==0) return rst;
    //digits输入数字，arr查询字典，level对应第几个数字，cur当前字符串，rst所有字符串
    letterCombinationsDFS(digits,arr,0,[],rst);
    return rst;
};
function letterCombinationsDFS(digits,arr,level,cur,rst){
    if(digits.length==level) rst.push(cur.join(""));//一遍数字循环完，得到一个字符串结果
    else{
        var str=arr[digits.charAt(level)];//当前数字对应的多个字母
        for(var i=0;i<str.length;i++){
            cur.push(str.charAt(i));//第level数字对应的第i(当前)字母
            letterCombinationsDFS(digits,arr,level+1,cur,rst);//递归，处理下一个数字
            cur.pop();
        }
    }
}

console.log(letterCombinations('239'));
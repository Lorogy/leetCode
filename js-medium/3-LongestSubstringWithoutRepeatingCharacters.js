/*Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*/



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //ascii码表示字符，初始赋值-1
    var arr=new Array(256);
    arr.fill(-1)
    if(s.length==0) return 0;
    if(s.length==1) return s.length;
    //len全局最长，cur局部最长
    var len=0,cur=0,start=-1;
    //s[i].charCodeAt()字符转ASCII码
    for(var i=0;i<s.length;i++){
        //若下标大于开始位置表示，该字符在此次局部范围已出现过
        if(arr[s[i].charCodeAt()]>start){
            start=arr[s[i].charCodeAt()];
        }
        arr[s[i].charCodeAt()]=i;//赋值最近下标
        cur=i-start;//局部长度
        len=len>=cur?len:cur;
    }
    return len;
};
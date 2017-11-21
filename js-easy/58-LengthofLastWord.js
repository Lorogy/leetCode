/*Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var len=s.length-1;
    var count=0;
    var flag=0;
    if(!s) return 0;
    for(var i=len;i>=0;i--){
        if(s.charAt(i)==" "){
            if(flag!=0) return count;
        }
        else{
            count++;
            flag=1;
        }
    }
    return count;
};
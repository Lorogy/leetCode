/*Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //"abcde",""
    if(needle.length==0) return 0;
    
    if(haystack.length==0||needle.length==0||(haystack.length-needle.length)<0) return -1;
    
    //注意考虑"a","a"
    for(var i=0;i<haystack.length;i++){
        if(haystack.substr(i,needle.length)==needle) return i;
    }
    
    return -1;
};

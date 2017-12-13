/*Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var l=0,r=s.length-1;
    var regx=/[a-zA-Z0-9]/;
    while(l<=r){
        var left=s.charAt(l).toLowerCase();
        var right=s.charAt(r).toLowerCase();
        if(!regx.test(left)) l++;
        else if(!regx.test(right)) r--;
        else{
            if(left!=right) return false;
            l++;
            r--;
        }
    }
    return true;
};
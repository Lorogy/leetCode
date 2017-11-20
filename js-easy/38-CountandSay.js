/*The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==0) return 0;
    if(n==1){
       return "1";
    }
    var str=countAndSay(n-1);
    var count=1;
    var string="";
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)==str.charAt(i+1)){
            count++;
        }
        else{
            string+=count+str.charAt(i);
            count=1;
        }
    }
    
    return string;
};

console.log(countAndSay(6));
/*Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.*/


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n==0) return 0;
    var count=0;
    var tmp=5;
    while(n>=tmp){
        count+=Math.floor(n/tmp);
        tmp*=5;
    }
    return count;
};
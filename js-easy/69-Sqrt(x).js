/*Implement int sqrt(int x).

Compute and return the square root of x.

x is guaranteed to be a non-negative integer.


Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l=0;
    var r=Math.floor(x/2)+1;
    if(x==0) return 0;
    if(x<0) return -1;
    
    while(l<=r){
        var mid=Math.floor((l+r)/2);
        if(mid*mid<=x&&(mid+1)*(mid+1)>x){
            return mid;
        }
        else if(mid*mid<x){
            l=mid+1;
        }
        else{
            r=mid-1;
        }
    }
};
/*Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var temp=0;
    var sum=digits[digits.length-1]+1;
    var result=[];
    if(sum>=10){
        temp=1;
        result.unshift(sum%10);
    }
    else{
        temp=0;
        result.unshift(sum);
    }
    for(var i=digits.length-2;i>=0;i--){
        sum=digits[i]+temp;
        if(sum>=10){
            temp=1;
            result.unshift(sum%10);
        }
        else{
            temp=0;
            result.unshift(sum);
        }
    }
    
    if(temp==1){
        result.unshift(1);
    }
    return result;
};
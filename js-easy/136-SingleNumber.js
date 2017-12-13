/*Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length==0) return 0;
    nums.sort();
    for(var i=0;i<nums.length;){
        if(nums[i]!=nums[i+1]){
            return nums[i];
        }
        else{
            i=i+2;
        }
    }   
    return 0;
};
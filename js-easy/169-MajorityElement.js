/*Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len=nums.length;
    var count=1;
    var item=nums[0];
    for(var i=1;i<len;i++){
        if(item==nums[i]){
            count++;
        }
        else{
            count--;
        }
        if(count==0){
            item=nums[i];
            count=1;
        }
    }
    
    return item;
};
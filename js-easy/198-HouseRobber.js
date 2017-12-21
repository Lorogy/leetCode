/*You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==0) return 0;
    if(nums.length==1) return nums[0];
    //上一次
    var last=nums[0];
    //当前
    var res=Math.max(nums[0],nums[1]);
    for(var i=2;i<nums.length;i++){
        var tmp=res;
        //新当前
        res=Math.max(res,nums[i]+last);
        //更新上一次
        last=tmp;
    }
    return res;
};
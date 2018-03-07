/*Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var rsts=[];
    nums=nums.sort(sortNum);console.log(nums);
    //var i=0;
    for(var i=0;i<nums.length-2;i++){
        if(nums[i]==nums[i-1]){
            continue;
        }
        var target=0-nums[i];
        var l=i+1,r=nums.length-1;
        while(l<r){
            if(nums[l]+nums[r]==target){
                var rst=[nums[i],nums[l],nums[r]];
                rsts.push(rst);
                l++;
                r--;
                while(nums[l]==nums[l-1]&&l<r) l++;
                while(nums[r]==nums[r+1]&&l<r) r--;
            }else if(nums[l]+nums[r]>target){
                r--;
            }else{
                l++;
            }
        }
        //i++;
        // while(nums[i]==nums[i-1]&&i<nums.length-2){
        //     i++;
        // }
    }

    return rsts;
};

function sortNum(a,b){
    return a-b;
}

console.log(threeSum([0,-4,-1,-4,-2,-3,2]));
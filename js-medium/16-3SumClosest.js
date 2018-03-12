/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length<2) return null;
    nums.sort(sortNum);
    var rst=nums[0]+nums[1]+nums[nums.length-1];
    var tmp=Math.abs(rst-target);
    for(var i=0;i<nums.length;i++){
        var l=i+1,r=nums.length-1;
        while(l<r&&l>0&r<nums.length){
            var currst=nums[i]+nums[l]+nums[r];
            var curtmp=Math.abs(currst-target);
            if(currst==target){
                return currst;
            }else if(currst>target){
                r--;
            }else{
                l++;
            }
            if(curtmp<tmp){
                rst=currst;
                tmp=curtmp;
            }
        }
    }
    return rst;
};
function sortNum(a,b){
    return a-b;
}

console.log(threeSumClosest([1,2,4,8,16,32,64,128],82));
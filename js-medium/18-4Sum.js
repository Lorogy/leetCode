/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var res=[];
    if(nums.length<4) return res;
    nums.sort(sortNum);
    var sum=0;
    var tmp=0;
    var isExit=[];
    for(var i=0;i<nums.length-3;i++){
        for(var j=i+1;j<nums.length-2;j++){
            sum=target-nums[i]-nums[j];
            var l=j+1,r=nums.length-1;
            while(l<r){
                tmp=nums[l]+nums[r];
                if(sum==tmp){
                    var curstr=""+nums[i]+nums[j]+nums[l]+nums[r];
                    if(isExit.indexOf(curstr)==-1){
                        res.push([nums[i],nums[j],nums[l],nums[r]]);
                        isExit.push(curstr);
                    }
                    l++;
                    r--;
                }else if(sum>tmp){
                    l++;
                }else{
                    r--;
                }
            }
        }
    }
    return res;
};
function sortNum(a,b){
    return a-b;
}

console.log(fourSum([-3,-2,-1,0,0,1,2,3],0));
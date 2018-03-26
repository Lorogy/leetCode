/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length<2) return;
  var l=nums.length;
  //找到i<j,i、j相邻
  while(l--){
    var j=l;
    var i=j-1;
    if(nums[i]<nums[j]) {
      var k=nums.length;
      //找到k>i，交换
      while(k--){
        if(nums[k]>nums[i]){
          var temp=nums[i];
          nums[i]=nums[k];
          nums[k]=temp;
          //逆序
          var temp2=nums.slice(j,nums.length).reverse();
          for(var t=0,j;j<nums.length;j++,t++){
            nums[j]=temp2[t];
          }
          return;
        }
      }
    }
  }
  nums.reverse();
};

var a=[1,2,3];
nextPermutation(a);
console.log(a);
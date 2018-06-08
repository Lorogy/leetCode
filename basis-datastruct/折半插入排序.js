let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
halfinsort(arr);
console.log(arr);

function halfinsort(arr){
  for(let i=1;i<arr.length;i++){//从第二个元素开始依次处理
    let temp=arr[i];//待插入值
    // 折半查找0，i-1范围内temp应处于的位置low
    let low=0,high=i-1;
    while(low<=high){
      let mid=Math.floor((low+high)/2);
      if(arr[mid]>temp){
        high=mid-1;
      }else{
        low=mid+1;
      }
    }
    // 将low,i-1的值依次后移一位
    for(let j=i;j>low;j--){
      arr[j]=arr[j-1];
    }
    arr[low]=temp;//将待插入值插入正确位置
  }
  return arr;
}
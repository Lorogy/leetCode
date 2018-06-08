let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
insort(arr);
console.log(arr);

function insort(arr){
  for(let i=1;i<arr.length;i++){//从第二个元素开始依次处理
    let temp=arr[i];//待插入值
    let j=i-1;//从其前一个位置开始依次比较
    while(j>=0&&arr[j]>temp){//若比待插入值大，依次向后移
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=temp;//将待插入值插入正确位置
  }
  return arr;
}
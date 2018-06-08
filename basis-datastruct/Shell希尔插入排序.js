let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
shellsort(arr);
console.log(arr);

function shellsort(arr){
  let d=Math.floor(arr.length/2);// 第一次增量
  while(d>=1){// 增量最小至1
    console.log(d);
    // 此增量下shell排序，从d+1开始
    for(let i=d;i<arr.length;i++){
      // <=i并且间隔为d的一组进行插入排序
      let j=i-d;
      let temp=arr[i];//待插入值
      while(j>=0&&temp<arr[j]){//若比待插入值大，依次向后移
        arr[j+d]=arr[j];
        j=j-d;
      }
      arr[j+d]=temp;//将待插入值插入正确位置
      console.log(arr);
    }
    d=Math.floor(d/2);// 更新增量
  }
  return arr;
}
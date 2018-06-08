let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
mergesort(arr,0,arr.length-1);
console.log(arr);

// 分治法
function mergesort(arr,left,right){
  if(left<right){
    let mid=Math.floor((left+right)/2);
    mergesort(arr,left,mid);// 左边归并排序，使得左子序列有序
    mergesort(arr,mid+1,right);// 右边归并排序，使得右子序列有序
    merge(arr,left,mid,right);// 将两个有序子数组合并操作
  }else{
    return;
  }
}
function merge(arr,left,mid,right){
  console.log(left+" "+mid+" "+right);
  let temparr=[];//临时数组，合并结果
  let i=left;//左序列指针
  let j=mid+1;//右序列指针
  let t=0;//临时数组指针
  // 依次比较将最小的按顺序放入临时数组temparr
  while(i<=mid&&j<=right){
    if(arr[i]<=arr[j]){
      temparr[t++]=arr[i++];
    }else{
      temparr[t++]=arr[j++];
    }
  }
  //若左边剩余，将左边剩余元素填充进temp中
  while(i<=mid){
    temparr[t++]=arr[i++];
  }
  //若右边剩余，将右序列剩余元素填充进temp中
  while(j<=right){
    temparr[t++]=arr[j++];
  }
  t=0;
  //将temparr中的元素全部拷贝到原数组中
  while(left<=right){
    arr[left++]=temparr[t++];
  }
}
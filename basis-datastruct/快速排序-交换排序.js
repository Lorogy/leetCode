let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
quicksort(arr,0,arr.length-1);
console.log(arr);

// 分治法
function quicksort(arr,left,right){
  if(left>=right) return;
  let index=quick(arr,left,right);
  quicksort(arr,left,index-1);// 处理左边
  quicksort(arr,index+1,right);// 处理右边
}
function quick(arr,left,right){
  // 子表的一趟快速排序
  let x=arr[left];//基准值
  let i=left;
  let j=right;
  // 当i=j时，已按当前基准分好，获得基准正确位置
  while(i!=j){
    // 从右向左扫描，直至到比基准小，i<j保证最终i=j
    while(arr[j]>=x&&i<j){
      j--;
    }
    // 从左向右扫描，直至到比基准大，i<j保证最终i=j
    while(arr[i]<=x&&i<j){
      i++;
    }
    console.log(i+" "+j);
    // 交换两者
    if(i<j){
      let temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
  // 将基准放到正确位置
  arr[left]=arr[i];
  arr[i]=x;

  return i;
}
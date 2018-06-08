let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
bubsort(arr);
console.log(arr);

function bubsort(arr){
  let flag=false;
  for(let i=0;i<arr.length-1;i++){//最多len-1趟排序，i表示趟数
    flag=false;//标志位
    for(let j=0;j<arr.length-i-1;j++){//一趟冒泡排序，两两交换，最大沉底
      let temp=arr[j];
      if(temp>arr[j+1]){
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        flag=true;
      }
    }
    // 如果flag不为true，表示已是正确排序，不需要继续下一趟排序
    if(!flag) break;
  }
  return arr;
}
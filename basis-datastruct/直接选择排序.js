let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
selectsort(arr);
console.log(arr);

function selectsort(arr){
  for(let i=0;i<arr.length-1;i++){//最多len-1趟排序，i表示趟数
    var index=i;// 此趟最小值下标
    for(let j=i+1;j<arr.length;j++){// 遍历
      if(arr[j]<arr[index]) index=j; // 更新最小值下标
    }
    // 交换将此趟最小值放在正确位置
    if(i!=index){
      let temp=arr[i];
      arr[i]=arr[index];
      arr[index]=temp;
    }
  }
  return arr;
}
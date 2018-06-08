let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
heapsort(arr);
console.log(arr);

function heapsort(arr){
  // 1.建立大根堆
  // 从最后一个非叶节点（arr.len/2-1）开始依次调整，直至所有非叶节点都调整完
  for(let i=arr.length/2-1;i>=0;i--){
    adjustHeap(arr,i,arr.length);
  }
  // 2.调整堆结构，即交换顶元素0与末尾元素j
  for(let j=arr.length-1;j>0;j--){
    swap(arr,0,j);// 交换顶元素0与末尾元素j
    adjustHeap(arr,0,j);// 重新调整顶元素位置
  }
  return arr;
}
// 调整大根堆
function adjustHeap(arr,index,len){
  let temp=arr[index];// 当前元素
  for(let i=2*index+1;i<len;i=i*2+1){// 从左子节点开始，直至当前节点所有子节点调整完成
    // 若左子节点小于右子节点，i为index节点的子节点值最大的序号
    if(i+1<len&&arr[i]<arr[i+1]){
      i++;
    }
    // 若子节点最大值大于父节点，父节点更新值，重置新的调整点index，否则调整到位跳出循环
    if(arr[i]>temp){
      arr[index]=arr[i];
      index=i;
    }else {
      break;
    }
  }
  arr[index]=temp;// 将当前元素值放在正确位置
}
// 交换元素
function swap(arr,a,b){
  let temp=arr[a];
  arr[a]=arr[b];
  arr[b]=temp;
}
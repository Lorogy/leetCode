let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
mergesort(arr,0,arr.length-1);
console.log(arr);

// 分治法
function mergesort(arr,left,right){
  if(left<right){
    let mid=Math.floor((left+right)/2);
    mergesort(arr,left,mid);
    mergesort(arr,mid+1,right);
    merge(arr,left,mid,right);
  }else{
    return;
  }
}
function merge(arr,left,mid,right){
  console.log(left+" "+mid+" "+right);
  let temparr=[];
  let i=left;
  let j=mid+1;
  let t=0;
  while(i<=mid&&j<=right){
    if(arr[i]<=arr[j]){
      temparr[t++]=arr[i++];
    }else{
      temparr[t++]=arr[j++];
    }
  }
  while(i<=mid){
    temparr[t++]=arr[i++];
  }
  while(j<=right){
    temparr[t++]=arr[j++];
  }
  t=0;
  while(left<=right){
    arr[left++]=temparr[t++];
  }
}
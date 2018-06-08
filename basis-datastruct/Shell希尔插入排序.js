let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
shellsort(arr);
console.log(arr);

function shellsort(arr){
  let d=Math.floor(arr.length/2);
  while(d>=1){
    console.log(d);
    for(let i=d+1;i<arr.length;i++){
      for(let j=i;j>=0;j=j-d){
        let temp=arr[j];
        if(temp<arr[j-d]){
          arr[j]=arr[j-d];
          arr[j-d]=temp;
        }
      }
    }
    console.log(arr);
    d=Math.floor(d/2);
  }
  return arr;
}
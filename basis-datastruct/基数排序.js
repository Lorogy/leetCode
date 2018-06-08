let arr=[15,9,8,1,4,11,7,12,13,6,5,3,16,2,10,14];
console.log(arr);
radixsort(arr,0,arr.length-1,2);
console.log(arr);

function radixsort(arr,left,right,digit){
  let radix=10;// 基数0-9
  let i=0,j=0;
  let rows=[];// 存放0-9各自的数据
  let cols=[];// 一次排序结果
  // d为arr中元素最大位数，从低位到高位进行d次排序
  for(let d=1;d<=digit;d++){
    // 初始化rows[0-9]数据为0
    for(i=0;i<radix;i++){
      rows[i]=0;
    }
    // 遍历所有元素d位，记录[0-9]各自个数
    for(i=left;i<=right;i++){
      j=getDigit(arr[i],d);
      console.log(arr[i]+" "+j);
      rows[j]++;
    }
    console.log(rows);
    // 将[0-9]更新为右边界索引
    for(i=1;i<radix;i++){
      rows[i]=rows[i-1]+rows[i];
    }
    console.log(rows);
    // 从右向左将数据依次装入cols[]
    for(i=right;i>=left;i--){
      j=getDigit(arr[i],d);// 求出d位数数值
      cols[rows[j]-1]=arr[i];// 放入结果对应位置，rows[j]-1为其索引值
      rows[j]--;// 此位数据索引减一
    }
    console.log(cols);
    // 将此次排序结果更新到arr
    for(i=left,j=0;i<=right;i++,j++){
      arr[i]=cols[j];
    }
    // console.log(arr);
  }
  return arr;
}

// 获取x第d位数，比如x=123,d=1,则返回3
function getDigit(x,d){
  let y=Math.floor(x/Math.pow(10,(d-1)))%10;
  return y;
}

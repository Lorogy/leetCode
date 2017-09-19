/*Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.*/

/**
 * @param {number} x
 * @return {number}
 */
/*var intreverse = function(x) {
    var arr=[];
    var temp;
    var before=0;
    var result=0;
    for(var i=1;;i++){
        temp=(x-before)%(Math.pow(10, i))/(Math.pow(10, i-1));
        before=x%(Math.pow(10, i));
        if(before==x){
            arr.push(temp);
            break;
        }
        else{
            arr.push(temp);
        }
    }
    
    for(var i=0;i<arr.length;i++){
        result+=arr[i]*(Math.pow(10,arr.length-i-1));
    }
    
    return result;
};*/

var intreverse = function(x){
  var r=0;
  var l=x;
  while(Math.floor(l/10)){
      r=l%10+r*10;
      l=Math.floor(l/10);
  }
  r=l%10+r*10;
  l=Math.floor(l/10);
  return r;
};

var reverse=function(x){
    if(isNaN(x)||(Math.abs(x))>(Math.pow(2,31))){
        return null;
    }
    else if(x==0){
        return 0;
    }
    else{
        var result=intreverse(Math.abs(x))
        if(result>(Math.pow(2,31))){
            return 0;
        }
        else if(x>0){
            return result;
        }
        else{
            return (-result);
        }
    }
};

console.log(reverse(-100))
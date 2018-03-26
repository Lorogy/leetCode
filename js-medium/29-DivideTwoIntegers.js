/*Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var INT_MAX=2147483647,INT_MIN=-2147483648;
  var sign=(dividend>0)^(divisor>0)?-1:1;
  if(divisor==0) return INT_MAX;
  if((dividend==INT_MIN)&&(divisor==-1)) return INT_MAX;
  var m=Math.abs(dividend),n=Math.abs(divisor),res=0;
  while(m>=n){
    var t=n,p=1;
    var judge=t<<1;
    if(judge>0){
      while(m>judge){
        t=t<<1;
        p=p<<1;
        judge=t<<1;
        if(judge<0) break;
      }
    }
    res+=p;
    m-=t;
  }
  return sign==1?res:-res;
};

console.log(divide(1100540749,-1090366779));
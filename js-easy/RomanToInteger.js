/*Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var rti={
      "I":1,
      "X":10,
      "C":100,
      "V":5,
      "L":50,
      "D":500,
      "M":1000
    };
    if(!s){
      return 0;
    }
    var arr=s.split("");
    var index,next;
    var x=0;
    for(var i=0;i<arr.length;i++){
      index=arr[i];
      next=arr[i+1];
      if(next && (index=="I"||index=="X"||index=="C") && rti[index]<rti[next]){
        x=x-rti[index];
      }else{
        x=x+rti[index];
      }
    }

    return x;
};

console.log(romanToInt("MMMCDLXIX"));
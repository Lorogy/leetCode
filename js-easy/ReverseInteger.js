/*Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321*/

/**
 * @param {number} x
 * @return {number}
 */
var intreverse = function(x) {
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
};

var uintreverse=function(x){
    if(isNaN(x)){
        return null;
    }
    else if(x==0){
        return 0;
    }
    else{
        var result=intreverse(Math.abs(x))
        if(x>0){
            return result;
        }
        else{
            return (-result);
        }
    }
};

console.log(uintreverse(-123));
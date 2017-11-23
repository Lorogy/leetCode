/*Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length==0) return b;
    if(b.length==0) return a;
    var temp=0;
    var c=0;
    var sum="";
    var len=0;
    var dis=Math.abs(a.length-b.length);
    
    if(a.length>b.length){
        len=a.length;
        for(var j=0;j<dis;j++){
            b="0"+b;
        }
    }
    else if(a.length<b.length){
        len=b.length;
        for(var k=0;k<dis;k++){
            a="0"+a;
        }
    }
    else{
        len=a.length;
    }
    
    
    for(var i=len-1;i>=0;i--){
        c=parseInt(a.charAt(i))+parseInt(b.charAt(i))+temp;
        if(c==3){
            temp=1;
            c=1;
        }
        else if(c==2){
            temp=1;
            c=0;
        }
        else{
            temp=0;
        }
        sum=c.toString()+sum;
    }
    
    if(temp==1){
        sum="1"+sum;
    }
    
    return sum;
};

console.log(addBinary("11","1"));

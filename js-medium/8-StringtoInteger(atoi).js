/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var INT_MAX=2147483647,INT_MIN=-2147483648;
    var ispos=true;
    var rst=0;
    str=str.trim();
    for(var i=0;i<str.length;i++){
        var c=str.charAt(i);
        if(i==0&&(c=='+'||c=='-')){
            ispos=c=='+'?true:false;
        }else if(c>='0'&&c<='9'){
            if((rst+c)*1>INT_MAX){
                return ispos?INT_MAX:INT_MIN;
            }else{
                rst=(rst+c)*1;
            }
        }else{
            return ispos?rst:-rst;
        }
    }
    return ispos?rst:-rst;
};

console.log(myAtoi("123+959"));
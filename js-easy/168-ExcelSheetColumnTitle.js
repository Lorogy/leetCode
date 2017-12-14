/*Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n<=0) return null;
    var arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var tmp=n;
    var rst='';
    if(tmp<=26) return arr[tmp-1];
    while(true){
        if(tmp%26==0){
            rst=arr[25]+rst;
            tmp=Math.floor(tmp/26)-1;
        } 
        else{
            rst=arr[tmp%26-1]+rst; 
            tmp=Math.floor(tmp/26);
        }
        if(tmp==0) break;
    }  
    return rst;
};

console.log(convertToTitle(52));
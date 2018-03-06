/**
 * @param {string} s
 * @return {string}
 */
var l=0,len=0;
var longestPalindrome = function(s) {
    if(s.length<=1||s.length>1000) return s;
    for(var i=0;i<s.length;i++){
        localPalindrom(s,i,i);
        localPalindrom(s,i,i+1);
    }
    return s.substring(l,l+len)
};

function localPalindrom(s,j,k){
    while(j>=0&&k<s.length&&s.charAt(j)==s.charAt(k)){
        k++;
        j--;
    }
    if(len<(k-j-1)){
        l=j+1;
        len=k-j-1;
    }
}

console.log(longestPalindrome("abbc"));
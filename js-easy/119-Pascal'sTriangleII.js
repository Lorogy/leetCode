/*Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var r=[];
    for(var i=0;i<=rowIndex;i++){
        for(var j=i;j>=0;j--){
            if(j==0||i==j) r[j]=1;
            else r[j]=r[j]+r[j-1];
        }
    }
    return r;
};
console.log(getRow(5));
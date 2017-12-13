/*Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var r=[];
    for(var i=0;i<numRows;i++){
        var t=[];
        r.push(t);
        for(var j=0;j<=i;j++){
            if(i==j||j==0) r[i][j]=1;
            else{
                r[i][j]=r[i-1][j-1]+r[i-1][j];
            }
        }
    }   
    return r;
}

console.log(generate(5));

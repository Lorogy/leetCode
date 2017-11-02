/*Write a function to find the longest common prefix string amongst an array of strings.*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var result=[];
  if(!strs){
    return "";
  }
  if(strs.length==1){
    return strs[0];
  }
  for(var i=0;;i++){
    for(var j=0;j<strs.length-1;j++){
      if(!strs[j].charAt(i) || (strs[j].charAt(i)!=strs[j+1].charAt(i))){
        break;
      }
    }
    if(j==strs.length-1){  
      result.push(strs[0].charAt(i));
    }
    else{
      return result.join("");
    }
  }
};

var sarr=["c","c"];
console.log(longestCommonPrefix(sarr));
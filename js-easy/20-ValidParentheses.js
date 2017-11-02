/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var rev={
    "(":"-1",
    ")":"1",
    "[":"-2",
    "]":"2",
    "{":"-3",
    "}":"3"
  }
  var stack=new Array();
  if(!s){
    return false;
  }
  else if(s.length==1){
    return false;
  }
  for(var i=0;i<s.length;i++){
    var item=s.charAt(i);
    if(item in rev){
      if(rev[item]<0){
        stack.push(rev[item]);
      }
      else{
        var len=stack.length;
        var flag=parseInt(rev[item])+parseInt(stack[len-1]);
        if(flag==0){
          stack.pop();
        }
        else{
          return false;
        }
      }
    }
  }
  if(!stack.length){
    return true;
  }
  else{
    return false;
  }   
};

console.log(isValid("({}{})"));
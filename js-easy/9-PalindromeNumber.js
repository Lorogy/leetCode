/*Determine whether an integer is a palindrome. Do this without extra space.*/

/**
 * @param {number} x
 * @return {boolean}
 */
//先拿到每位数，从左右往中间开始比较
/*var intreverse = function(x) {
    var arr=[];
    var temp;
    var before=0;
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
    //console.log(arr) 
    return arr;
};

var isPalindrome=function(x){
    if(x<0){
        return false;
    }
    else if(isNaN(x)||x>(Math.pow(2,31))){
        return 0;
    }
    else{
        var arr=intreverse(x)
        var l=0;
        var r=arr.length-1;

        while(1){
            if(l>=r){
                return true;
            }
            else{
               if(arr[l]!=arr[r]){
                return false;
                } 

                l++;
                r--;
            }
        }
       
    }
};*/

//eg:12321,左12右123；1221，左12右12
var isPalindrome=function(x){
    if(isNaN(x)||x>(Math.pow(2,31))){
        return false;
    }
    else if(x<0 || (x!=0 && x%10==0)){
        return false;
    }
    else{
        var r=0;
        var l=x;
        while(l>r){
            r=l%10+r*10;
            l=Math.floor(l/10);

        }
        if(r==l||l==Math.floor(r/10)){
            return true;
        }
        else{
            return false
        }
    }
}

console.log(isPalindrome(100));
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var rst='';

    if(num>3999||num<1) return rst;

    var q=Math.floor(num/1000);
    var b=Math.floor(num%1000/100);
    var s=Math.floor(num%1000%100/10);
    var g=Math.floor(num%1000%100%10);

    if(q>0){
        while(q){
            rst+='M';
            q--;
      }
    }
    if(b>0){
        if(b<=3){
            while(b){
                rst+='C';
                b--;
          }
        }else if(b==4){
            rst+='CD'
        }else if(b==5){
            rst+='D'
        }else if(b==9){
            rst+='CM'
        }else{
            rst+='D'
            while(b-5){
                rst+='C';
                b--;
          }
        }
    }
    if(s>0){
        if(s<=3){
            while(s){
                rst+='X';
                s--;
          }
        }else if(s==4){
            rst+='XL'
        }else if(s==5){
            rst+='L'
        }else if(s==9){
            rst+='XC'
        }else{
            rst+='L'
            while(s-5){
                rst+='X';
                s--;
          }
        }
    }
    if(g>0){
        if(g<=3){
            while(g){
                rst+='I';
                g--;
          }
        }else if(g==4){
            rst+='IV'
        }else if(g==5){
            rst+='V'
        }else if(g==9){
            rst+='IX'
        }else{
            rst+='V'
            while(g-5){
                rst+='I';
                g--;
          }
        }
    }

    return rst;

};
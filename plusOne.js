/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    for (x=digits.length-1;  x>= 0; x--)
      {
          digits[x]++;
       if (digits[x] > 9){
           digits[x] = 0;
       } 
        else
        {
            return digits;
        }
          
      }   
    
     digits.unshift(1);
     return digits;
};
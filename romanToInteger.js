/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    romNums = s.split("");
    var value = "";
    newNums = [];
    
        for (var i = romNums.length-1; i >= 0; i--){
            
             if (romNums[i] == 'I')
            {
               romNumvalue = 1;
                
                if(romNums[i+1]){
                    
                    if( (romNums[i+1] == "V") ||  (romNums[i+1] == "X") ) {
                        romNumvalue = -1;
                    }
                     
                }
                
                newNums.push(romNumvalue);
                
                
            }
            
              else if (romNums[i] == 'V')
            {
               romNumvalue = 5;
               newNums.push(romNumvalue);
            }
            
              else if (romNums[i] == 'X')
            {
               romNumvalue = 10;
                
                  if(romNums[i+1]){
                    
                    if( (romNums[i+1] == "L") ||  (romNums[i+1] == "C") ) {
                        romNumvalue = -10;
                    }
                     
                }
                                newNums.push(romNumvalue);

            }
            
              else if (romNums[i] == 'L')
            {
               romNumvalue = 50;
               newNums.push(romNumvalue);
            }
            
             else if (romNums[i] == 'C')
            {
               romNumvalue = 100;
                
                  if(romNums[i+1]){
                    
                    if( (romNums[i+1] == "D") ||  (romNums[i+1] == "M") ) {
                        romNumvalue = -100;
                    }
                     
                }
                                newNums.push(romNumvalue);

            }
            
            else if (romNums[i] == 'D')
            {
               romNumvalue = 500;
                                newNums.push(romNumvalue);

            }
            
            else if (romNums[i] == 'M')
            {
               romNumvalue = 1000;
               newNums.push(romNumvalue);

            }
            
            
            
        }
    
    function getSum(total, num) {
  return total + Math.round(num);
}
    
    return newNums.reduce(getSum,0);

    
};
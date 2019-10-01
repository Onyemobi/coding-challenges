/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    //if the entire string is full of blank spaces
    if (s.trim().length == 0)
        {
            return 0;
        }
    
    //if its a single letter
    if (s.trim().length == 1)
        {
            return 1;
        }
    
    if (s.trim().length > 1)  {
        
     //removes the white space from beginning and end   
     newString = s.trim();
    
     for (var i = newString.length-1; i >= 0; i--)
        {
            if (newString[i] == ' ')
                {     
                  return newString.length-i-1;
                } 
            
        }    
                  return newString.length;
    }
};
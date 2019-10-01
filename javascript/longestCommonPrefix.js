/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    strs.sort();
    
    if(strs.length == 0){
        return "";
        }
    
    else if(strs.length == 1)
        {
            return strs[0];
        }
    
    else {
        
       for(i=0; i < strs[0].length; i++)
       {
       //compare the values of the first string to the one of the last one    
      if(strs[0][i] != strs[strs.length -1][i]) break;
    }
    return strs[0].substr(0,i)
        
    }
    
}
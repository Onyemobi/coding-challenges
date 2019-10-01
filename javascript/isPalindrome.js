/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    
    if (x < 0 ){
        return false;
    }
    
    // Change number to string
    var newString = Math.abs(x).toString(10);
    
    // Create an array from the string, reverse it and then rejoin it
    var newArray = newString.split("").reverse().join("");
            
    var finalNumber = Math.abs(newArray);
    
    if (finalNumber == x)
        {
            return true;
        }
    
    else {
        return false;
    }
    
    
    
};
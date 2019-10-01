/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const numbers = x;
    const threshold = Math.pow(2, 31);
    
    if (numbers < 0 ){
        var z = 'negative';
    }
    
    // Change number to string
    var newString = Math.abs(numbers).toString(10);
    
    // Create an array from the string, reverse it and then rejoin it
    var newArray = newString.split("").reverse().join("");
            
    var finalNumber = Math.abs(newArray);
    
    if (z == 'negative'){
        finalNumber = finalNumber * -1;
    }
    
    // if the integer is larger than a 32 bit one, return 0
    if (finalNumber > threshold - 1 || finalNumber < -threshold) {
        return 0
    }

    
    return finalNumber
    
};
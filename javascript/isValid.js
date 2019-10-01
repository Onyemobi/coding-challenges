/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
        parens = s.split("");
        length=s.length;
    
        if (length % 2 !== 0) {
            return false;
        }
    
        while (length > 0 && s.length) {
            s = s.replace(/\[\]|\{\}|\(\)/g, '');
            length -= 2;
        }
    
        return s === ''

};
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */

    function isPalindrome($x) {

      if ($x < 0 ){
        return false;
    }

     // Change number to string
     	$newString = abs($x);
      	$newString = strval($newString);
    
     // Create an array from the string, reverse it and then rejoin it
	  	$newArray = str_split($newString);
	    $reverseArray = array_reverse($newArray);

	 //Convert array back to string 
    	$reverseString = implode($reverseArray);
    	$reverseString = abs($reverseString);


    if ($reverseString == $x)
        {
            return true;
        }
    
    else {
        return false;
    }

	        
    }
}
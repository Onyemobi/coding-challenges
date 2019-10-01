class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function reverse($x) {

    $numbers = $x;
    $threshold = 2**31;

   
    if ($numbers < 0 ){
        $z = 'negative';
    }

    
    // Change number to string
    $newString = abs($numbers);
    $newString = strval($newString);


    // Create an array from the string and then reverse it
    $newArray = str_split($newString);
    $newArray2 = array_reverse($newArray);


    //Convert array back to string and then get absolute value
    $newArray3 = implode($newArray2);
    $finalNumber = abs($newArray3);
    
    if ($z == 'negative'){
        $finalNumber = $finalNumber * -1;
    }
    
    // if the integer is larger than a 32 bit one, return 0
    if ($finalNumber > $threshold - 1 || $finalNumber < -$threshold) {
        return 0;
    }

    
    return $finalNumber;
        
    }
}
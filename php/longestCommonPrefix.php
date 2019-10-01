class Solution {

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs) {

	sort($strs);

	$length = sizeof($strs);
    
    if($length == 0){
        return "";
        }
    
    else if($length == 1)
        {
            return $strs[0];
        }
    
    else {
        
       for($i=0; $i < $length; $i++)
       {
       //compare the values of the first string to the one of the last one    
			if($strs[0][$i] != $strs[$length-1][$i])
		
				 break;
		}
		return substr($strs[0],0,$i);
        
    }


        
    }
}
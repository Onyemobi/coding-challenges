class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {

    	$romNums = str_split($s);
	    $value = "";
	    $newNums = [];
	    $length = (strlen($s))-1;

	    for ($i = $length; $i >= 0; $i--){
            
             if ($romNums[$i] == 'I')
            {
               $romNumvalue = 1;
                
                if($romNums[$i+1]){
                    
                    if( ($romNums[$i+1] == 'V') ||  ($romNums[$i+1] == 'X') ) {
                        $romNumvalue = -1;
                    }
                     
                }

                array_push($newNums, $romNumvalue);                 
                
            }

            else if ($romNums[$i] == 'V')
            {
               $romNumvalue = 5;
                array_push($newNums, $romNumvalue);                 
            }
            
             else if ($romNums[$i] == 'X')
            {
               $romNumvalue = 10;
                
                  if($romNums[$i+1]){
                    
                    if( ($romNums[$i+1] == "L") ||  ($romNums[$i+1] == "C") ) {
                        $romNumvalue = -10;
                    }
                     
                }
                array_push($newNums, $romNumvalue);                 

            }
            
              if ($romNums[$i] == 'L')
            {
               $romNumvalue = 50;
                array_push($newNums, $romNumvalue);                 
            }
            
            else if ($romNums[$i] == 'C')
            {
               $romNumvalue = 100;
                
                  if($romNums[$i+1]){
                    
                    if( ($romNums[$i+1] == "D") ||  ($romNums[$i+1] == "M") ) {
                        $romNumvalue = -100;
                    }
                     
                }
                array_push($newNums, $romNumvalue);                 

            }
            
            else if ($romNums[$i] == 'D')
            {
               $romNumvalue = 500;
               array_push($newNums, $romNumvalue);                 

            }
            
            else if ($romNums[$i] == 'M')
            {
               $romNumvalue = 1000;
               array_push($newNums, $romNumvalue);                 

            }
            
            
            
        }

	 return array_sum($newNums);	
        
    }
}
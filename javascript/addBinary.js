/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

	 var newA = a.split("");
	 var newB = b.split("");
	 var sumArray= [];


	 //equalize the lengths of each number
	 if(newA.length > newB.length)
	 {

	 	while(newA.length != newB.length){
	 			newB.unshift(0); 
	 	}
	 }

	else{

		while(newA.length != newB.length){
	 			newA.unshift(0); 
	 	}

	}

	//fill the sumArray with zeros
	while(newA.length != sumArray.length){
	 			sumArray.push(0); 
	 	}

	//now add each one	
	for (x=newA.length-1;  x>= 0; x--){

		var sum = Number(newA[x]) + Number(newB[x]) + Number(sumArray[x]);

		 if (sum == 0){
		 	sumArray[x] = 0;
		 }

		 if (sum == 1){
		 	sumArray[x] = 1;
		 }

		 if (sum == 2){
		 	sumArray[x] = 0;

		 	if(x==0){
		 		sumArray.unshift(1);
		 	}
		 	else{
				sumArray[x-1] = 1;
		 	}
		 }

		 if (sum == 3){
		 	sumArray[x] = 1;
		 	
		 	if(x==0){
		 		sumArray.unshift(1);
		 	}
		 	else{
				sumArray[x-1] = 1;
		 	}
		 }

	 }

	 return sumArray.join().toString().replace(/\D/g,'');
   
};

var miArray=[1,3,3];
var i = 1;
//var iguales = false;
var mayor = 0;


function chequearIgualdad(Array) {

	do{
		console.log(Array);
		if (Array[i-1]!=Array[i]) {
			return false;
		}else{
			return true;
		}

		i++;
	}while(Array[i-1]==Array[i] && i<Array.length);
}


function encontrarMayorYsumar(Array){

	for (var i = 1; i < Array.length; i++) {
		if (Array[i-1]>Array[i]) {
			mayor = Array[i-1];
		}else{
			mayor = Array[i];
		}
		console.log(mayor);
	}

	for (var i = 0; i < Array.length; i++) {
		if (Array[i]!=mayor) {
			Array[i]= Array[i]+1;	
		}
		
	}

}

function otraFuncion(Array){
	while(!chequearIgualdad(Array)){
		encontrarMayorYsumar(Array);
	}
}


function laCosaEsa(Array){
	chequearIgualdad(Array);
	otraFuncion(Array);

	console.log(Array);

	
}




laCosaEsa(miArray);




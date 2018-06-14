var stringArray = ["a","b","a","b","a","a"];
var cont = 0;


function creoOtroArray(Array) {
	var newArray = [];
	for (var i = 1; i < Array.length; i++) {
		newArray[i-1] = Array[i];
	}
	//console.log(newArray);
	return newArray;
}


function compararArrays(a, b){
	var i = 0;
	console.log(a);
	console.log(b);

	if (a[i]==b[i]) {
		while(i<b.length){

			if (a[i]==b[i]) {
				cont++;
			}
		i++;
		}
	}
	console.log(cont);
	return cont;
}


function prueba(Array){
	//var Array1 = Array;
	compararArrays (Array, Array);
	var nuevoArray = creoOtroArray(Array);
	compararArrays(Array, nuevoArray);

	while(nuevoArray.length>1)		{
		nuevoArray = creoOtroArray(nuevoArray);
		compararArrays(Array, nuevoArray);

	}
		

}


prueba(stringArray);
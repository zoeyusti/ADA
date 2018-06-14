var num = 15;
var fooArray = [];


function crearArray(num) {
	for (var i = 0; i < num; i++) {
		fooArray[i] = i+1;
	}
	console.log(fooArray);
	return fooArray;
}



function chequearFoo(Array){
	for (var i = 0; i < Array.length; i++) {
		if (Array[i]%3==0 && Array[i]%5!=0) {
			Array[i] = "Foo";
		}
	}
	return Array;
}


function chequearBar(Array){
	for (var i = 0; i < Array.length; i++) {
		if (Array[i]%3!=0 && Array[i]%5==0) {
			Array[i] = "Bar";	
		}	
	}
	return Array;
}

function chequearFooBar(Array){
	for (var i = 0; i < Array.length; i++) {
		if (Array[i]%3==0 && Array[i]%5==0) {
			Array[i] = "FooBar";
		}		
	}
	return Array;
}



function fooBar(num){
	var primerPaso = crearArray(num);
	var segundoPaso = chequearBar(primerPaso);
	var tercerPaso = chequearFoo(segundoPaso);
	var cuartoPaso = chequearFooBar(tercerPaso);

	console.log(cuartoPaso);
}







fooBar(num);
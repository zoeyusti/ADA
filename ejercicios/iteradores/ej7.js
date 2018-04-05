var datos1= new Array("Fido","Gomez",26,15000.78,true);
var datos2= new Array("Gervasio","Fernandez",32,28.550,false);
var edad=2;
var apellido=1;
var casado=4;
var sueldo=3;
var aumento=0;


if (datos1[edad]<datos2[edad]) {
	console.log("Es más viejo: " +datos2[apellido]);
}
else{
	console.log("Es más viejo: " +datos1[apellido]);	
}

if (datos1[casado]) {
	console.log("Está casado: " +datos1[apellido]);
}
if (datos2[casado]) {
	console.log("Está casado: " +datos2[apellido]);
}


aumento= datos2[sueldo]*0.125;
datos1[sueldo]=datos1[sueldo]+aumento;
console.log("Fido empezará a cobrar: $" +datos1[sueldo]);

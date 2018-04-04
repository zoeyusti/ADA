var mes="";

if (mes=="Enero"||mes=="Marzo"||mes=="Mayo"||mes=="Julio"||mes=="Agosto"||mes=="Octubre"||mes=="Diciembre") {
	console.log("Este mes tiene 31 días");
}
else if (mes=="Abril"||mes=="Junio"||mes=="Septiembre"||mes=="Setiembre"||mes=="Noviembre"){
	console.log("Este mes tiene 30 días");
}
else if (mes=="Febrero") {
	console.log("Este mes tiene 28 días, al menos que sea año bisiesto");
}
else{
	console.log("Este mes ingresado no existe");
}
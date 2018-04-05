var años=10;
var aumento=0;
var sueldo=40000;


if (años<3) {
	aumento=sueldo*0.03;
}
else if (años<5&&años>=3) {
	aumento=sueldo*0.05;
}
else if (años<10&&años>=5) {
	aumento=sueldo*0.07;
}
else {
	aumento=sueldo*0.1;
}
sueldo=sueldo+aumento;
console.log("Su sueldo ahora será de: $" +sueldo);
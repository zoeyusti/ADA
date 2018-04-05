var x=new Array("a","l","f","a");
var y=new Array("a","l","f","a","j","o","r");
var i=0;
var j=0;
var cont=0;
var tam=x.length;

console.log(x);
console.log(y);

while(x[i]==y[j]){
	// console.log(x[i]);
	// console.log(y[j]);
	i++;
	j++;
}
if (x[i]!=y[j]) {
	console.log("No son iguales");
}
else{
	console.log("Son iguales");
}



if (x>y) {
	console.log("X es mayor");
}
else if (x<y) {
	console.log("Y es mayor");
}
else{
	console.log("No hay mayor");
}



/* INTENTAMOS CON EL FOR PERO CUENTA REPETIDO
DICE LA CANT DE VECES QUE SE REPITE, NO LA CANT DE LETRAS


i=0;

while(x[i]!=x[4]){
	for (var j=0; j < 7; j++) {
		if(x[i]==y[j]){
			cont++;
		}
	console.log(x[i]);
	console.log(y[j]);
	}
i++
}
console.log(cont);*/


i=0;
j=0;

while(x[i]!=x[tam]){
	while(x[i]==y[j]) {
		cont++;
		j++;
		// console.log(x[i]);
		// console.log(y[j]);
	}
i++
}
console.log("La cantidad de letras en común que tienen es de: " +cont);
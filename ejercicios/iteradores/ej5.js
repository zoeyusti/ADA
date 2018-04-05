/* FUNCIONA EN ESTE CASO, PERO NO SERIA ASI DE HACER ALGUNAS MODIFICACIONES

CODIGO NO COMENTADO TIENE LA POSTA

var x=new Array(10,24,36,7,98,11,14,20,98,14,10);
var i=1;
var mayor=x[0];
var cont=1;

console.log(x);
while(x[i]!=x[11]){
	if (mayor<x[i]) {
		mayor=x[i];
	}
	i++;
	if (mayor==x[i]) {
		cont++;
	}
}
console.log("El valor máximo es: " +mayor);
console.log(cont);*/

//ACA ESTA LA VERDAD DE LA MILANESA

var x=new Array(10,24,36,7,98,11,14,20,98,14,10);
var i=1;
var mayor=x[0];
var cont=0;
var tam=x.length;

console.log(x);
while(x[i]!=x[tam]){
	if (mayor<x[i]) {
		mayor=x[i];
	}
	i++;
}
console.log("El valor máximo es: " +mayor);
i=0;
while(x[i]!=x[tam]){
	if (mayor==x[i]) {
		cont++;
	}
	i++;
}


console.log("El mayor aparece la siguiente cantidad de veces: " +cont);


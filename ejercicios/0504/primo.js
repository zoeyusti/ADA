//Determinar si un número es primo

var num=13;
var cont=2;


while(num%cont!=0&&cont<num){
		cont++;
		//console.log(num);
		//console.log(cont);
}
if (cont==num) {
	console.log("Es primo");
}
else{
	console.log("No es primo");
}
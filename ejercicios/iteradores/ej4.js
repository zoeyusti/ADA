var x=new Array(10,24,36,7,98,11,14,20);
var i=1;
var mayor=x[0];
var pos=0;

console.log(x);
while(x[i]!=x[8]){
	if (mayor<x[i]) {
		mayor=x[i];
		pos=i;
	}
	i++;
}
console.log("El valor máximo es: " +mayor);
console.log("Empezando desde el cero, su número de posición es el: " +pos);
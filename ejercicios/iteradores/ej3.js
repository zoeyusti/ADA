var x=new Array(10,24,36,7,98,11,14,20);
var i=1;
var mayor=x[0];
var tam=x.length;

console.log(x);
while(x[i]!=x[tam]){
	if (mayor<x[i]) {
		mayor=x[i];
	}
	i++;
}
console.log("El valor máximo es: " +mayor);


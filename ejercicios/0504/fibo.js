var cont=0;
var x=1;
var y=0;

for (var i = 0; i <10; i++) {
	console.log(cont);
	y = cont;
	cont = cont+x;
	x=y;
}

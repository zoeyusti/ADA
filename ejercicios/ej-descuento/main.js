//APRENDIENDO JS
var monto=1500;
var descuento=0;
var total=0;
var tarjeta=3; //En caso de pagar con tarjeta en 3 cuotas
var recargo=0;
if(monto>500&&monto<=1000){
	descuento=monto*0.1;
}
else if(monto>1000&&monto<=1500){
	descuento=monto*0.15;
}
else if(monto>1500){
	descuento=monto*0.2;
}
else{}
total=monto-descuento;
console.log("Su descuento es de: $" + descuento);
//console.log("Deberá abonar: $" + total);

if (tarjeta==3){
	recargo=total*0.05;
	total=total+recargo;
}
if (tarjeta==6){
	recargo=total*0.1;
	total=total+recargo;
}

console.log("Su recargo es de: $" + recargo);
console.log("Deberá abonar: $" + total);
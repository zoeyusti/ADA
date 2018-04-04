var ValorProducto=100;
var PuntosCliente=50;
var categoria="premium";
var dinero=0;

if (PuntosCliente==ValorProducto) {
	console.log("Puede realizar directamente el canje");
}
else if (ValorProducto/2<=PuntosCliente) {
	if (categoria=="premium") {
		dinero=(ValorProducto-PuntosCliente)/5;
		console.log("Además del canje de puntos deberá pagar: $" +dinero);
	}
	else{
		dinero=(ValorProducto-PuntosCliente)/3;
		console.log("Además del canje de puntos deberá pagar: $" +dinero);
	}
}
else{
	console.log("Seguí ahorrando, no te alcanza");
}
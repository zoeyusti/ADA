var tarjeta="Maestro";

switch(tarjeta){
	case "MasterCard": console.log("hasta 6 cuotas s/interés"); break;
	case "Visa": console.log("hasta 9 cuotas s/interés"); break;
	case "AmEx": console.log("hasta 3 cuotas s/interés"); break;
	default: console.log("1 cuota s/interés"); break;
}
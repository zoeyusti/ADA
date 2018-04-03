/*Alimentando a los animales del zoo

Herbivoros, carnivoros
Perezosos, koala, tigre, guacamayo, elefante, boa
Cantidad de patas
A partir de la cant. de patas, kilos de comida

Mostrar pantalla, comida y cant. de kilos*/

/* Si tienen 2 patas y herbivoro 1.5 kg
Si tienen 4 patas y herbivoro 3 kg
Si tienen 4 patas y carnivoros 5 kg
No patas un cobayo
Si elefante o se llama Babar 20 kg*/

var patas=0;
var herbivoro=true;
//var carnivoro=false;
var animal="elefante";
var nombre="Babar";
var comida=0;

if (patas==0){
	comida="cobayo";
}
if (patas==2&&herbivoro==true){
	comida=1.5;
}
if (patas==4){
	if (herbivoro==true&&animal!=elefante){
		comida=3;
	}
	else{
		comida=5;
	}
}
if (animal=="elefante"||nombre=="Babar"){
	comida=20;
}

console.log("Va a comer: " + comida)
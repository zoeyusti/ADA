var a = document.getElementById('Nombreid');
var b = document.getElementById('Apellidoid');
var c = document.getElementById('Nacionalidadid');
var d = document.getElementById('Nacimientoid');
var e = document.getElementById('documentoid');
var f = document.getElementById('Calleid');
var g = document.getElementByClassName('generoid');
var h = document.getElementById('Emailid');

var lugares = [{
				"Ciudad":
				"Provincia":
				"Pais":

}]



function ValidarObligatorios() {
	
	if (a.value!=""&&b.value!=""&&c.value!=""&&d.value!=""&&f.value!=""&&g.value!=""&&h.value!="") {
		//Fue completado, esta todo bien.
		return true;
	}
}

/*function Prueba(x){
	if (x.value=="") {
		alert("COMPLETA LA COSA");
		return false;
	}
}*/



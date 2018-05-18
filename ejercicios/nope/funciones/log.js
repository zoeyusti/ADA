/*Generar función de login
Devuelva true en caso de logueo y false en caso contrario*/


function login(usuario, password){
	if (usuario=="fido" && password==1234) {
		return true;
	}
	else{
		return false;
	}
}

if (login("fido", 1234)) {
	console.log("Bienvenido");
}
else{
	console.log("Usuario inválido");
}
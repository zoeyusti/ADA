var numeritos = [9, -21, 3, 53, 0, 6, 5, 8, 89, -1, 44, -50];

console.log(numeritos);

for (var j = 0; j < numeritos.length; j++) {

	for (var i = 0; i < numeritos.length; i++) {
		if (numeritos[j]<numeritos[i]) {
			var temp = numeritos[j];
			numeritos[j] = numeritos[i];
			numeritos[i] = temp;
		}
		
	}
}

console.log(numeritos);
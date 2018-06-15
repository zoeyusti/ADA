// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

var palindrome = ["t", "a", "c", "o", "c", "a", "t"];
var capicua = [1, 2, 3, 2, 1];
var noPal = ["h", "o", "l", "a"];
var noCap = [3, 1, 4, 1, 5, 9];


function isPalindrome(Array){
	var resultado = true;
	var i = 0;
	var j = Array.length -1;

	while(i <= j && resultado != false){
		if (Array[i]==Array[j]) {
			console.log(i);
			console.log(j);
			i++;
			j--;
		}else{
			resultado = false;
		}
	}
	//return resultado;
	console.log(resultado);
}

isPalindrome(palindrome);
isPalindrome(capicua);
isPalindrome(noPal);
isPalindrome(noCap);
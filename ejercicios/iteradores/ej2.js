var NumUser=10;
var array=new Array();


for (var i = 0; i < NumUser; i++) {
	if (i%2==0) {
		array[i]=0;
	}
	else{
		array[i]=i;
	}
}
console.log(array);

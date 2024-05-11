// EJERCICIO NUMERO UNO

function cualEsMayor(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
	
}


let mayor = cualEsMayor(10, 5);

console.log(mayor); 

function soyMayor(a, b) {
	return (a > b) ? a:b;
}

let major = soyMayor(18, 16);

console.log('soy mayor de edad', major);

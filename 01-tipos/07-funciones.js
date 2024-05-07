// FUNCIONES

function saludar() {
	console.log('hola marte');
}

saludar();  // estamos llamando a la funcion
//

function suma() {
	return 2 + 2;

}


//let resultado = suma();

//console.log(resultado); esta es 1ra forma de imprimir


console.log(suma()); // 2da forma de imprimir


// PARAMETROS Y ARGUMENTOS
//
function sumar(a, b){   // el "a" es un parametros, pueden varios parametros
	return a + b + 2;

}

let resultado = sumar(5, 6); //el cinco es un argumento, pueden tener varios argumentos.
console.log(resultado);
console.log(typeof suma);





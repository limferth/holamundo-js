// las funciones tambien son objetos
//

function Usuario(nombre) {
	this.nombre = nombre;

}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Nicola');

console.log(user); 

function of(Fn, arg) {
	return new Fn(arg);
}

let user1 = of(Usuario, 'chanchito');
console.log(user1);

function returned() {
	return function() {
	console.log('hola marte');
	}
}

let saludo = returned();
saludo();



let user = {
	id: 1,
	email:'nicho@gmail.io',
	name: 'nicholas',
	activo: true,
	recuperarClave: function () {
		console.log('recuperando clave...');
	},
};

let user11 = {
	id:2,
	email: 'chanchito@gmail.io',
	name: 'chanchito',
	activo: false,
	recuperarClave: function () {
		console.log('recuperando clave ...');
	},
};


function crearUsuario(name, email) {
	return {
		email,
		name,
		recuperarClave: function () {
			console.log('recuperando clave ...');
		},
	};
};


let user1 = crearUsuario('Nicolasito', 'nico@gmail.io');
let user2 = crearUsuario('Felipe', 'feli@gmail.io');
let user3 = crearUsuario('hache', 'hache@gmail.io');

console.log(user1, user2, user3);


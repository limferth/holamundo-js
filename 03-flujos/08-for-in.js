// 

let user = {
	id:1,
	name:'limferth',
	age: 25,
};

for  (let propiedad in user) {
	console.log(propiedad, user[propiedad])
};

let animales = ['chanchito feliz', 'Daragon', 'Canguro'];

for (let indice in animales) {
	console.log(indice, animales[indice]);
} // recuerda, no utilizarlo, utiliza for of

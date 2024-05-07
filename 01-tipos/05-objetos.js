// TiPOS DE REFERENCIA
// los objetos son un agrupacion de datos que hacen sentidos tenerlos dentro.
// ejemplo = lapices uqe tiene COLOR, LONGITUD,PESO ETC.
//

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
	nombre: "Tangiro",  //para llave-valor o propiedad
	anime: "Demon Slayer",
	edad: 16,
	
};

// objeto literal;

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);


personaje,edad = 13;

let llave = 'edad';

personaje[llave] = 16;

delete personaje.anime 

console.log(personaje); //esto es para eliminar alguna propiedad o llave -valor como se diga.
//



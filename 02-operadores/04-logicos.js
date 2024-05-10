// PERADORES LOGICOS
//
//  los operadores logicos son tres AND, OR, NOT

let mayor = true;
let suscrito = true;
let menor = false;

console.log('es mayor puede acceder', mayor && suscrito);
console.log('es menor de edad', menor && suscrito);

console.log(true && true);
console.log(false &&  true);

// OR = ||

console.log('f o f es = a false', false || false);
console.log('true o true es = a true', true || true);
console.log('t o f es = true', true || false);
console.log('f o t es = true', false || true);

// NOT = !

console.log('cambia de true a false', !true);
console.log('cambia de false a true', !false);

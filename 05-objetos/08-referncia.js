
let a = 1;
let b = a;

b++;
console.log(a, b);


let c = {};
let d = c;

b.prop = 1;
console.log(c, d);

let x = 1;

function suma(n) {
	n++;
}

suma(x);
console.log(a);

let y = {prop: 1};
function suma(n){
	n.prop++;
}

suma(y);
console.log(y);


//PRIMITIVOS --> SE COPIAN
//LOS DE REFERNCIA --> SE REFERENCIAN ESTOS SON: (OBJETOS, ARRAYS, FUNCIONES)

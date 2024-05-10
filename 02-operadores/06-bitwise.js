// OPERADORES BITWISE
//
// bit: 0, 1
// byte: 8 bits
// byte: 000000000 ---> 0 
// byte: 000000001 ---> 1
// byte: 000000010 ---> 2
// byte: 000000011 ---> 3
// byte: 000000100 ---> 4
// byte8 000000101 ---> 5
// byte: 000000110 ---> 6

console.log(1 | 3);  // 00000011 buscar que en ambos exista 1 o tambien en que solo en una exista.
console.log(1 | 4);  // 00000101
console.log(3 | 5);  // 00000111
console.log(4 | 6);  // 00000110

console.log(1 & 3);	//00000001 buscar que en ambos exista 1 si o si
console.log(1 & 4);	//00000000
console.log(3 & 5);	//00000001
console.log(4 & 6);	//00000100

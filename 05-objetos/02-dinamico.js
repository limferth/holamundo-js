

const user = {id: 1};

user.name = "nicolas";
user.guardar = function () {
	console.log('Guardando', user.name);

}

user.guardar();

delete  user.name;
delete user.guardar;
console.log(user);

const user1 = object.freeze({id: 1});
user1.name ='nicoo';
user1.id = 2;
console.log(user1);

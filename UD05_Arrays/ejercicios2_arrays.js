// Ejercicio 1:
console.log('Ejercicio 1:');

let numeros = new Array(10);

numeros.fill(5);

console.log(numeros);

// Ejercicio 2:
console.log();
console.log('Ejercicio 2:');

let letras = [];

letras.unshift('A', 'B', 'C');

letras.push('D', 'E');

letras.shift();
letras.pop();

console.log(letras);

// Ejercicio 3:
console.log();
console.log('Ejercicio 3:');

let colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'violeta'];

let nuevosColores = colores.slice(1, 4);
colores.splice(3, 2, 'negro', 'blanco');

console.log(colores);
console.log(nuevosColores);

// Ejercicio 4:
console.log();
console.log('Ejercicio 4:');

let nombres = ['Ana', 'Pedro', 'Juan', 'Sofía', 'Carlos'];

nombres.sort();
console.log(nombres);

nombres.reverse();
console.log(nombres);

// Ejercicio 5:
console.log();
console.log('Ejercicio 5:');

let edades = [25, 30, 18, 40, 25, 30];

console.log(edades.indexOf(30));

console.log(edades.lastIndexOf(25));

// Ejercicio 6:
console.log();
console.log('Ejercicio 6:');

numeros = [4, 21, 33, 12, 9, 54];

console.log(numeros);

let pares = numeros.filter(function (element) {
    return element % 2 == 0;
});

console.log(pares);

// Ejercicio 7:
console.log();
console.log('Ejercicio 7:');

letras = ['a', 'b', 'c', 'd'];

// if (letras.some(function (letra) {
//     return letra === 'c';
// })) {
//     console.log('Existe la c en este array');
// } else {
//     console.log('No existe la c en este array');
// }

// if (letras.some(function (letra) {
//     return letra === 'z';
// })) {
//     console.log('Existe una letra "z"');
// } else {
//     console.log('No existe una letra "z"');
// }

console.log('¿Incluye la c?: ' + (letras.includes('c')?'La incluye':'No la incluye'));
console.log('¿Incluye la z?: ' + (letras.includes('z')?'La incluye':'No la incluye'));

// Ejercicio 8:
console.log();
console.log('Ejercicio 8:');

let data = [
    { name: 'Nacho', telephone: '966112233', age: 40 },
    { name: 'Ana', telephone: '911223344', age: 35 },
    { name: 'Mario', phone: '611998877', age: 15 },
    { name: 'Laura', telephone: '633663366', age: 17 }
];

// a)

data.push(
    { name: 'Pedro', telephone: '611944444', age: 25 },
    { name: 'Julia', phone: '633232323', age: 37 });

console.log(data);

// b)

data.sort(function (element, element2) {
    return element.age - element2.age;
})

console.log(data);

// c)

data.sort(function (element, element2){
    if (element.name > element2.name) return 1;
    if (element.name < element2.name) return -1;
})

console.log(data);

// d)
let mayores30 = data.filter(function (element){
    if(element.age > 30) return 1;
})

console.log(mayores30);


//Ejercicio 9:
console.log();
console.log('Ejercicio 9:');

function buscarProducto(nombre, productos) {

    for(let producto of productos ) {
    if(producto.nombre == nombre) {
        return producto;
    }     
}
return null;
}

let productos = [ 
    { nombre: "Laptop", categoria: "Electrónica", precio: 1500 }, 
    { nombre: "Silla", categoria: "Muebles", precio: 100 },
    { nombre: "", categoria: "Electrónica", precio: 50 }
     ];

let productoBuscado = buscarProducto("Laptop", productos);

console.log(productoBuscado);

let nulo = buscarProducto("Sombrilla", productos);

console.log(nulo);
/**
 * Crea un bucle que recorra un array de números y calcule la suma de todos ellos de forma reiterativa y recursiva. ¿Qué solución crees que es mejor?
 */

/*const numeros = [2,4,6,8,1,3,5,7,9];

let totalIter = 0;

for (numero of numeros) {
    totalIter+=numero;
}

console.log(totalIter);
console.log();

function recursiva(num) {
    // console.log(numeros);

    if(num<=0) {
        return numeros[num];
    } else {
        return numeros[num] + recursiva(num-1);
    }
}

console.log(recursiva(numeros.length-1));*/

/**
 *     2. Tienes un array de objetos que representan productos. Usa forEach() para incrementar en un 10% el precio de cada producto.
 */

const productos = [ { nombre: "Camiseta", precio: 20 }, { nombre: "Pantalón", precio: 30 }, { nombre: "Zapatos", precio: 50 } ];

productos.forEach(x=>x['precio']*10/100);

console.log(productos);

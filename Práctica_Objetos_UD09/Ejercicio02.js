/**
 * Práctica 2 (Obligatoria)
 * 
 * Los objetos de tipo Array (en definitiva, los arrays) poseen numerosos métodos 
 * que resultan muy útiles. Esta práctica consiste en añadir un método a todos 
 * los arrays para el cálculo de la media aritmética de sus elementos. Modificar
 * el prototipo de los arrays para añadir el llamado método.
 * 
 * Hace falta utilizar el método reduce() de los Arrays.
 * 
 * Añadir código que valide/pruebe el funcionamiento de los requisitos.
 */

Array.prototype.mediaAritmetica = function() {
    return this.reduce((a, b)=>{return a+b}, 0) / this.length;
}

let ejemplo1 = [0,1,2,3,4,5,6,7,8,9,10];
let ejemplo2 = [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];
let ejemplo3 = [10,20,30,40];

console.log(ejemplo1.mediaAritmetica());
console.log(ejemplo2.mediaAritmetica());
console.log(ejemplo3.mediaAritmetica());


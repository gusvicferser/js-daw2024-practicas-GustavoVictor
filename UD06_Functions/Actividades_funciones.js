/**
 * 1. Crea una función tradicional que reciba un número y retorne su cuadrado. 
 * Luego, usa esa función para mostrar el cuadrado de 5 en la consola.
 */

// function tradicional(num) {

//     return num*num;
// };

// console.log(tradicional(5));

/**
 * Crea una función anónima autoinvocada que defina una variable 
 * llamada contador y la incremente en cada invocación. Luego, 
 * intenta acceder a la variable contador fuera de la función 
 * y observa lo que sucede.
 */

// (function () {
// let contador=0;
// contador+=contador;
// console.log(contador);
// }()
// );

// console.log(contador);

/**
 * 3. Crea una función autoinvocada que reciba dos parámetros:
 * una cadena de texto y un número. Dentro de la función, 
 * concatena la cadena con el número y muestra el resultado en consola.
 */

// console.log((function (texto, numero){return texto+numero;}('Ahmed', 2)));

/**
 * 4. Crea una función flecha que sirva para devolver verdadero si un número 
 * es par o falso si no lo es. Asigna esa función a una variable y prueba 
 * la función para ver que responde correctamente.
 */

let flecha = num => num%2===0;

console.log(flecha(20));
/**
 * Práctica 2:
 * Se desea validar hasta qué punto la función Math.random es realmente aleatoria.
 * Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10.
 * Por consola mostraremos cada número del 1 al 10 y a continuación el número 
 * de veces que ha salido ese número. Por ejemplo:
 *
 * Frecuencias
 * Número 1: 1016
 * Número 2: 1019
 * Número 3: 1059
 * ....
 * Número 10: 993
 */

/* Incializamos un array de 10 posiciones, que si lo pensamos, al ser un array
 de 10, tiene 10 posiciones, que podremos usar a modo de números luego. Sólo hay
 que recordar que se debe tomar la posición 0 como la 1 y la 9 como la 10:*/
let veces = new Array(10);

/* Para que sumar más adelante surta efecto y no de un 'NaN', hemos de rellenar 
 el array de un número al menos (el 0):*/
veces.fill(0);

// Ahora hacemos el bucle que se repite 10000 veces:
for (let i = 0; i < 10000; i++) {

    // Aquí genera un aleatorio del 1 al 10:
    let aleatorio = Math.round(Math.random() * (10 - 1) + 1);
    // Como el array tiene diez posiciones del 0-9, hacemos como si fuera de 
    // 1-10 y simplemente añadimos uno a la posición menos 1:
    veces[aleatorio - 1]++;
}

// console.log(veces); // Traza

// Y ahora lo mostramos de forma bonita:
for (let numero in veces) {
    console.log(
        `Número ${parseInt(numero) + 1}: Está repetido ${veces[numero]} veces`
    );
}

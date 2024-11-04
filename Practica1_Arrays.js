/** Práctica 1:
* Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. 
* Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta 
* que no se pueden repetir los números en una misma combinación.
*/

// Iniciamos un array vacío de 50 posiciones:
let numeros = new Array(50);

// Ahora vamos a rellenar ese array con un bucle for:
for (let i = 0; i < 50; i++) {

    // Iniciamos el array de 6 que será nuestra combinación de lotería:
    let combinacion = new Array(6);

    // Y hacemos un bucle for para rellenarlo de números:
    for (let j = 0; j < 6; j++) {

        // Aquí calculamos un número aleatorio del 1 al 10:
        let aleatorio = Math.round((Math.random() * 49) + 1);

        // En este bucle nos aseguraremos de que el aleatorio no se repita:

        while (combinacion.includes(aleatorio)) {
            /*Mientras el número aleatorio ya esté en el bucle, seguimos 
            generando otro número aleatorio:*/
            aleatorio = Math.round((Math.random() * 49) + 1);

            // En el momento en que ese número nuevo no esté en el array, salimos:
            if (!combinacion.includes(aleatorio)) {
                break;
            }

        }

        /* Y lo añadimos al array en la posición que corresponde. 
        Lo hacemos así porque con array.push() rellenamos los seis huecos 
        vacíos del array original en lugar de colocar los números en las 
        posiciones:*/
        combinacion[j] = aleatorio;

    }

    /* Lo ordenamos para que quede más bonito y le ponemos la fórmula de 
    (a,b) => a-b como recomienda el IDE ya que si no lo ordena por caracteres 
    ASCII lo cual hace que 10, por ejemplo, vaya antes de 2:*/
    combinacion.sort((a, b) => a - b);

    // Luego añadimos la combinación al array principal:
    numeros[i] = combinacion;

}
// Y lo mostramos por pantalla (bonito a ser posible):
// console.log(numeros); // Traza
for (let combinaciones of numeros) {
    console.log('Los números ganadores son: ');
    console.log(combinaciones);
    console.log();
}
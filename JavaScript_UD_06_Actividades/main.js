/**
 * Crea una aplicación web que pida al usuario palabras continuamente hasta que
 * el popup se deje vacío o se cancele. 
 * 
 * A continuación, se eliminarán todas las  palabras repetidas y además se 
 * ordenarán en español, pero en orden inverso (de la Z a la A) y se mostrará 
 * el resultado por pantalla. Utilizar funciones flecha si se considera apropiado.
 */


/**
 * Función para introducir palabras hasta que el usuario decida dejar el prompt
 * vacío o pulsar cancelar. Devuelve un array:
 * @author: Gustavo Víctor
 * @version: 1.1
 * 
 * @return: array Palabras
 */
function almacenarPalabras() {

    const palabras = [];

    let answer;
    do {
         answer = window.prompt('Introduzca una palabra:');

        if (answer != null || answer != '') {
            palabras.push(answer);
            console.log(palabras)
        }

    } while (answer != null && answer != '');

    return palabras;
}

/**
 * Función para mostrar las palabras por la pantalla ordenadas a la inversa:
 * 
 * @author: Gustavo Víctor
 * @version: 1.0
 */

function actividad01() {

    const palabras = almacenarPalabras();

    palabras.sort((a,b) => a.localeCompare(b)).reverse();

    window.alert(palabras.join('\n'));
}

/**
 * Crea una aplicación web que pida al usuario palabras continuamente hasta que 
 * el popup se deje vacío o se cancele. Crear una función que recibirá todas las
 * palabras y devolverá un mapa que contenga como clave cada palabra y cuyo valor
 * será el número de veces que aparece esa palabra en el array. Mostrar los 
 * resultados por pantalla.
 * 
 * Ayuda: Como en las 2 prácticas se pide introducir las palabras y devolver el 
 * resultado de la misma forma, podéis sacar esa parte del código a un script 
 * común que utilicen las 2 prácticas (main.js).
 *
 */

/**
 * Función para introducir palabras hasta que el usuario decida dejar el prompt
 * vacío o pulsar cancelar. Almacena las palabras en un Map y luego las ordena
 * alfabéticamente en español y lo devuelve en un alert. No necesita parámetros 
 * de entrada ni devuelve nada.
 * 
 * @author: Gustavo Víctor
 * @version: 1.0
 */
function actividad02() {

    const palabras = new Map();

    let answer;
    do {
         answer = window.prompt('Introduzca una palabra:');

        if (answer === null || answer === '') {
            window.alert();
                
        } else {

            for (let palabra of palabras) {
                let veces = 0;
                for (let palabra2 of palabras) {
                    if (palabra === palabra2) {
                        veces++;
                    }
                }
                biblioteca.set(palabra, veces);
            }
            
        }

    } while (answer != null && answer != '');
}

/**
 * 
 */

function contarRepeticiones(palabras) {

    const biblioteca = new Map();

    for (let palabra of palabras) {
        let veces = 0;
        for (let palabra2 of palabras) {
            if (palabra === palabra2) {
                veces++;
            }
        }
        biblioteca.set(palabra, veces);
    }

    return biblioteca;
}
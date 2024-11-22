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
 * vacío o pulsar cancelar. Almacena las palabras en un array y luego las ordena
 * alfabéticamente en español y lo devuelve en un alert. No necesita parámetros 
 * de entrada ni devuelve nada.
 * 
 * @author: Gustavo Víctor
 * @version: 1.0
 */
function actividad01() {

    const palabras = [];

    let answer;
    do {
         answer = window.prompt('Introduzca una palabra:');

        if (answer === null || answer === '') {
            window.alert(palabras.join('\n'));
                
        } else {
            palabras.push(answer);
            palabras.sort((a,b) => a.localeCompare(b)).reverse();
            console.log(palabras);
        }

    } while (answer != null && answer != '');
}
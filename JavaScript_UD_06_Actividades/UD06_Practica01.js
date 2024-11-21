/**
 * Crea una aplicación web que pida al usuario palabras continuamente hasta que
 * el popup se deje vacío o se cancele. 
 * 
 * A continuación, se eliminarán todas las  palabras repetidas y además se 
 * ordenarán en español, pero en orden inverso (de la Z a la A) y se mostrará 
 * el resultado por pantalla. Utilizar funciones flecha si se considera apropiado.
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
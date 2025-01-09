/**
 * Práctica 2 (Opcional)
 * 
 * IMPORTANTE- En esta práctica se debe hacer el programa principal dentro de la
 * página HTML, en una etiqueta Javascript. El objetivo simplemente es para que 
 * poner en práctica el EXPORT / IMPORT de módulos javascript.
 * 
 * Crea un archivo llamado temporizador.js, el cual será un módulo que podremos 
 * importar a nuestro código javascript principal (en la página HTML)
 * Este módulo constará de dos funciones:
 * 
 * •    La función temporizador: Crea una función que reciba un número en 
 *      milisegundos y genere un temporizador que escriba el texto "Tiempo 
 *      concluido" cuando pasen esos milisegundos. Realmente la función no 
 *      escribe, genera una promesa cuyo resultado es el texto nombrado.
 *      En caso de que no se cumpla la promesa, el resultado será el texto: "El 
 *      tiempo no va bien".
 * 
 *      Se decidirá que la promesa no se ha cumplido cuando pase el doble de 
 *      tiempo que el indicado.
 * 
 *      Crea un programa que invoque esta función (con 5 segundos) y escriba por 
 *      pantalla (elemento HTML) los resultados de la promesa.
 * 
 *  •   La función cuenta (es obligatorio que esta función sea ASYNC). Esta 
 *      función será capaz de escribir una cuenta atrás y mostrarla como 
 *      elemento HTML. Los parámetros son:
 *          o El número con el que se inicia la cuenta atrás
 *          o El elemento en el que escribiremos la cuenta atrás. Por defecto se
 *              utilizará el body.
 * 
 *          o El intervalo en milisegundos en el que cambia cada número. Por 
 *              defecto valdrá 1 segundo.
 *          o Una función callback, que se ejecutará cuando la cuenta finalice.
 * 
 * Crea, además, una aplicación web que cree 2 párrafos. En el primero se 
 * contará hacia atrás desde el 6, de segundo en segundo. En el segundo se 
 * contará desde el 60 pero cada número se moverá de décima en décima.
 * 
 * Además, al llegar a cero en el segundo párrafo se escribirá la palabra "Fin".
 */

/**
 * Función temporizador para obtener una cantidad de ms y devolver cuándo
 * concluye el tiempo
 * 
 * @param ms El tiempo en ms 
 * @returns String según si ha podido completar el resultado
 */
function temp(ms) {

    return new Promise ((resolve) => {

        if(isNaN(ms)){
            reject('El tiempo no está bien');
        } else {
            let timeOut = setTimeout(resolve('Tiempo concluido'), ms);
            setTimeout(()=>{
                clearTimeout(timeOut);
                reject('El tiempo no está bien')}, ms*2);
            }
    });
}

/**
 * Función aasíncrona para contar hacia atrás los milisegundos:
 * 
 * @param startTime Número en el que se inicia la cuenta atrás
 * @param element El Elemento del DOM en el que introduciremos la cuenta atrás.
 *                Por defecto es el body.
 * @param interval El intervalo en milisegundos en el que cambia cada número.
 */
async function countBck(startTime, element, interval){
    
}





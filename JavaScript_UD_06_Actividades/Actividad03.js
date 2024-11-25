/**
 * Actividad 3:
 * 
 * El método filter de los arrays permite indicar una función callback, 
 * para aplicar un filtro a los elementos del array. [Esta parte es sólo a 
 * efectos informativos, no hace falta que hagamos nada con el método filtro 
 * de los arrays].
 * 
 * Es una buena práctica para aprender a implementar funciones callback tratar 
 * de crear nuestras propias funciones.
 * 
 * Crea una función que se llame filtro y que reciba un array y una función 
 * callback. La función callback se entenderá que sólo tiene un parámetro. 
 * Esta función se aplicará a cada elemento del array y el resultado volverá a 
 * guardarse en el mismo array.
 * 
 * Por ejemplo: Array [1,2,3,4]
 * función = multiplicar por 2
 * Resultado: [2, 4, 6, 8]
 * Crear otros dos casos: 
 * -	Dado un array de palabras en minúsculas, pasarlas a mayúsculas.
 * -	Dado un array de números, calcular el factorial de cada uno. 
 * -    (https://es.wikipedia.org/wiki/Factorial)
 */

/**
 * Función filtro que recibe un array y una función callback. EL resultado de la
 * función se guardará en el propio array.
 * 
 * @author Gustavo Víctor
 * @version 1.0
 * 
 * @param Array
 * @param function callback 
 */
function filtro(array, call) {

    for (let element in array){
        array[element] = call(array[element]);
    }

    // console.log(array);

    return array;
}

let arrayEjemplo = [1,2,3,4];

/**
 * Función para pasar al filtro inventado:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 * 
 * @param Número elemento 
 * @returns Número multiplicado por 2.
 */
function multiplicar(elemento) {
    return elemento*2;
}

arrayEjemplo = filtro(arrayEjemplo, multiplicar);

console.log(arrayEjemplo);

let palabras = ['algunas', 'maravillas', 'solo', 'se', 'aprecian', 'de', 'dia'];

/**
 * Función para pasar a mayúscula:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 * 
 * @param String palabra 
 * @returns String palabra en mayuscula.
 */
function mayusculear(palabra) {
    return palabra.toUpperCase();
}

palabras = filtro(palabras, mayusculear);

console.log(palabras);

let numeros = [4, 6, 7, 8, 9, 12];


/**
 * Función para realizar un factorial, multiplicarse por si mismo menos uno hasta
 * llegar al uno (factorial de 1! es igual a 1):
 * 
 * @author Gustavo Víctor
 * @version 1.0
 * 
 * @param Number número cualquiera. Int o Float.  
 * @returns Ese número multiplicado por si mismo menos uno.
 */
function factorial(num) {

    if (num<1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

numeros = filtro(numeros, factorial);

console.log(numeros);


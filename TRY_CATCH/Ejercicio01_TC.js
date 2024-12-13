/**
 * Ej1: Crea una función divide (a, b) que tome dos números y devuelva el resultado de
 * dividir a por b. La función debe lanzar un error si b es 0 con el mensaje "No se puede dividir
 * por cero". Luego, llama a la función dentro de un bloque try-catch y muestra un mensaje en
 * la consola si ocurre un error.
 */

function divide(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por 0');
    }
    return a / b;

}

try {
    divide(7, 0);
} catch (error) {
    console.log(`Error: ${error.message}`);
}




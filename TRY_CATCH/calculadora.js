/**
 * Ej2: Crea un módulo calculadora.js que exporte funciones básicas de una
 * calculadora: suma, resta, multiplica y divide. Importa las funciones en otro archivo y usa
 * cada una con valores de prueba.
 */

function suma(a,b) {
    return a + b;
}

function resta(a,b) {
    return a - b;
}

function multiplicar(a, b) {
    return a*b;
}

function dividir(a,b) {
    if(b!=0) {
    return a/b;
    }
    return '';
}
/**
 * Ej1: Crea una función llamada compareNumbers que reciba dos números.
 * •   La función debe devolver una promesa.
 * •   Si el primer número es mayor, resuelve la promesa con el mensaje: "El número {a}
 *     es mayor que {b}".
 * •   Si no, rechaza la promesa con el mensaje: "El número {a} no es mayor que {b}".
 *     Usa la función para comparar dos números y maneja el resultado con .then y .catch.
 */
function compareNumbers(a, b) {

    return new Promise((resolve, reject) => {

        if (a > b) {
            resolve(`El número ${a} es mayor que ${b}`);
        } else {
            reject(`El número ${a} no es mayor que ${b}`)
        }

    });
}

compareNumbers(3, 2).then(console.log).catch(console.error);

/**
 * Ej2: Crea dos funciones que devuelvan promesas:
 * • multiplyByTwo(num): Resuelve con el doble del número después de 1 segundo.
 * • addTen(num): Resuelve con el número más 10 después de 1 segundo.
 * Usa estas funciones para encadenar promesas:
 * • Dobla el número 5.
 * • Luego, súmale 10 al resultado.
 * • Muestra el resultado final.
 */
function multiplyByTwo(num) {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(num * 2)
        }, 1000);
    });
}

function addTen(num) {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(num + 10)
        }, 1000);
    })
}

multiplyByTwo(
    5
).then(
    (ans) => addTen(ans)
).then(
    (ans) => console.log(`Resultado final: ${ans}`)
).catch(console.error);

/**
 * Ej3: Crea tres funciones que devuelvan promesas:
 *      o taskA: Resuelve con "Tarea A completada" después de 1 segundo.
 *      o taskB: Rechaza con "Tarea B falló" después de 2 segundos.
 *      o taskC: Resuelve con "Tarea C completada" después de 3 segundos.
 * Ejecutar las tres tareas al mismo tiempo.
 *      o Si todas se completan, muestra los resultados.
 *      o Si alguna falla, captura el error y muéstralo.
 */

function taskA() {

    return new Promise((resolve) => {
        setTimeout(resolve('Tarea A completada'), 1000);
    });
}

function taskB() {
    return new Promise ((_, reject) => {
        setTimeout(reject('Tarea B falló'), 2000);
    });
}

function taskC() {
    return new Promise ((resolve) => {
        setTimeout(resolve('Tarea C completada'), 3000);
    });
}

let promesas = Promise.all([taskA(), taskB(), taskC()]);

promesas.then((ans) => {

    let n = 1;
    for(let promise of ans) {
        console.log(`Promesa número ${n}: ${promise}`);
        n++;
    }
}).catch(console.error);

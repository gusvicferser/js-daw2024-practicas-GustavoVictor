/**
 * Página 03 del protocolo vainilla:
 * 
 * En esta página se deben añadir las preguntas, listarlas y guardarlas en la 
 * cookie de ese usuario:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */

import * as utl from './utilities.js';

// Declaramos variables:
const container = document.getElementById('container');
const dErrors = utl.newElement('div', ['class:errors']);

/**
 * Función que muestra las preguntas. Puedes escoger si tiene o no retraso al
 * mostrarlas
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function showQuestions(user, delay) {

    console.log('Hemos llegado');
}

// Creamos una promesa para el inicio. Si existe el usuario muestra todo, si no 
// devuelve un enlace para registrarse:
let initP = new Promise((resolve, reject) => {

    let user = sessionStorage.getItem('userIn');
    if (user == utl.cookieName(user)) {
        resolve(user);
    } else {
        reject(Error('¡No existe la cookie de usuario! ¿Cómo has llegado aquí?'));
    }
});

initP.then((answer) => {

    console.log(answer);
    showQuestions(answer);


}).catch((error) => {
    console.log(error.message);
    container.innerHTML = '';
    dErrors.innerText = '¡Ha ocurrido un error inesperado!';
    utl.appendChild(dErrors);
    let bckBtn = utl.newElement('button', ['type:button']);

    bckBtn.addEventListener('click', () => {
        location.assign('/VANILLA_PROTOCOL/');
    })

    container.appendChild(bckBtn);

});


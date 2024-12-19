/**
 * Aplicación JS para cambiar la página 1 a la introducción del usuario pulsando
 * una combinación de teclas o bien esperando 5 segundos. También valida el 
 * usuario en todo momento cuando pierde el foco del input:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */


import * as utl from './utilities.js';

/**
 * Función para cambiar la pantalla de bienvenida al formulario de introducción
 * de usuario:
 * 
 * @author Gustavo Victor
 * @version 2.0
 */
function changeInput() {

    document.querySelector('h1').remove();

    let array = ['for:user'];

    let label = utl.newElement('label', array);
    label.innerText = 'USUARIO';

    array = ['type:text', 'id:user', 'name:user', 'placeholder:Introduce aquí tu usuario'];
    let input = utl.newElement('input', array);

    array = ['type:button'];
    let btn = utl.newElement('button', array);
    btn.innerText = 'Entra';

    let container = document.getElementById('container');

    let br1 = document.createElement('br');
    let br2 = document.createElement('br');

    utl.introduce(container, label, br1, input, br2, btn);

    let user = document.getElementById('user');
    let regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    utl.checkREx(user, regExp);

}



// Defino variables:
var lastKey = '';

// Evento para cuando se pulsan las dos teclas juntas y en ese orden:
document.addEventListener('keydown', function (event) {
    if (lastKey === 'Alt' && event.key === 'b') {
        changeInput();
    } else {
        lastKey = event.key;
    }
})

// Evento que, alternativamente carga la función pasados 5 segundos:
window.addEventListener('load', function () {
    this.setTimeout(changeInput, 5000);
})


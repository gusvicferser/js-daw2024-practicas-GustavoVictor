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
 * Función para comprobar si el nombre del usuario existe y, por tanto, su cookie:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function checkCookie() {

    let user = document.querySelector('input');

    if (getCookie(user.value) != '') {
        location.assign('/page2.html');
    } else {

        if (getCookie(user.value) === user.value) {
            let error = utl.newElement('div', ['class:error']);

            error.innerText = 'El usuario ya existe';

            container.appendChild(error);
        } else {

            utl.setCookie(user.value, user.value, 1);

        }
    }

}


/**
 * Función para cambiar la pantalla de bienvenida al formulario de introducción
 * de usuario y añade los eventos al nuevo display:
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

    let br1 = document.createElement('br');
    let br2 = document.createElement('br');

    utl.introduce(container, label, br1, input, br2, btn);

    let user = document.getElementById('user');
    let regExp = /^[\S]+@[\S]+\.[\S]{2,4}$/;

    utl.checkREx(user, regExp); // Chequea si cumple la expresión regular

    btn.addEventListener('click', checkCookie);

}

// Defino variables:
var lastKey = '';
var container = document.getElementById('container');

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

// 
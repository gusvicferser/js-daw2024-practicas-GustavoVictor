/**
 * Página 2 del protocolo vainilla:
 * 
 * @author Gustavo Víctor
 * @version 1.0
*/

import * as utl from './utilities.js';

// Definimos variables:
const container = document.getElementById('container');
const errors = utl.newElement('div', ['class:errors']);

/**
 * Función para cargar hacer aparecer el botón de preguntas si existe la cookie
 * de usuario:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function access() {

    try {
        const userIn = sessionStorage.getItem('userIn');
        let cookie = '';
        let oldDate = new Date();
        const h1 = document.querySelector('h1');
        const h2 = document.querySelector('h2');
        const btn = utl.newElement(
            'button',
            [
                'type:button',
                'id:questions'
            ]
        );

        if (userIn != null) {

            cookie = JSON.parse(utl.getCookie(userIn));
            console.log(cookie['lastdate']);

            oldDate.setTime(cookie['lastdate']);
            console.log('oldDate: ' + oldDate);

            h1.innerText = 'Hola ' + userIn;
            // Resulta ser que .getMonth() está indexado sobre 0...
            h2.innerText =
                'La última vez que entraste fue el ' +
                oldDate.getDate() +
                '/' +
                (oldDate.getMonth() + 1) +
                '/' +
                oldDate.getFullYear() +
                ' a las ' +
                oldDate.getHours() +
                ':' +
                (
                    oldDate.getMinutes() < 10 ?
                        '0' + oldDate.getMinutes() : oldDate.getMinutes()
                );

            btn.innerText = 'PREGUNTAS';

            btn.addEventListener('click', () => {
                location.assign('/VANILLA_PROTOCOL/page03.html')
            });

            // Una vez hemos recuperado la última fecha, hemos de establecer la actual:
            const newDate = Date.now();

            cookie['lastdate'] = newDate;
            console.log(newDate);
            console.log(cookie['lastdate']);

            cookie = JSON.stringify(cookie);
            console.log(cookie);

            // Seteamos la cookie con el nuevo tiempo:
            utl.setCookie(userIn, cookie, 1);
        } else {
            btn.innerText = 'REGISTRARSE';
            btn.addEventListener('click', () => {
                location.assign('/VANILLA_PROTOCOL/index.html')
            });

        }
        // Por último, incluímos el botón, sea para acceder o para registrarse 
        // (ahorramos código reutilizando el elemento btn):
        container.appendChild(btn); 

    } catch (error) {
        errors.innerText = 'Ha ocurrido un error inesperado';
        console.log(error);
        container.appendChild(errors);
    }

}

addEventListener('load', access);

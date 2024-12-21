/**
 * Página 2 del protocolo vainilla:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */

import * as utl from './utilities.js';

/**
 * Función para cargar hacer aparecer el botón de preguntas si existe la cookie
 * de usuario:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function access() {

    try{
    const userIn = sessionStorage.getItem('userIn');
    let cookie = '';
    let newDate = new Date();
    const btn = utl.newElement(
        'button', 
        [
            'type:button', 
            'id:questions'
        ]
    );
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');

    if(userIn!=null) {

        cookie = JSON.parse(utl.getCookie(userIn));
        console.log(cookie['lastdate']);
        
        newDate.setTime(cookie['lastdate']);
        console.log(newDate);
        
        h1.innerText = 'Hola ' + userIn + ', bienvenid@';
        h2.innerText = 
            'La última vez que entraste fue el ' +
            newDate.getDay() +
            '/' +
            newDate.getMonth() +
            '/' +
            newDate.getFullYear() +
            ' a las ' +
            newDate.getHours() + 
            ':' +
            newDate.getMinutes();
        
        btn.innerText = 'PREGUNTAS';
        
        btn.addEventListener('click', () => {
            location.assign('/VANILLA_PROTOCOL/page03.html')
        });

        // Una vez hemos recuperado la última fecha, hemos de establecer la actual:
        newDate = Date.now();

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
    container.appendChild(btn);

} catch (error) {
        errors.innerText = 'Ha ocurrido un error inesperado';
        console.log(error);
        container.appendChild(errors);
}
    
}

const container = document.getElementById('container');
const errors = utl.newElement('div', ['class:errors']);

addEventListener('load', access);

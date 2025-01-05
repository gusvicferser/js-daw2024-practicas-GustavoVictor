/**
 * Aplicación JS para cambiar la página 1 a la introducción del usuario pulsando
 * una combinación de teclas o bien esperando 5 segundos. También valida el 
 * usuario en todo momento cuando pierde el foco del input:
 * 
 * @author Gustavo Víctor
 * @version 1.4
*/


import * as utl from './utilities.js';

// Definimos variables al comienzo:
let lastKey = '';
let timeOut = ''; // He de crear aquí una variable para detenerla en caso de que el usuario pulse las teclas
const errors = utl.newElement('div', ['class:errors']);
const container = document.getElementById('container');
const regExp = /^[\S]+@[\S]+\.[\S]{2,4}$/;


/**
 * Función para comprobar si el nombre del usuario existe y, por tanto, su cookie.
 * Si no cumple la expresión regular, no se envía nada.
 * 
 * @author Gustavo Víctor
 * @version 1.4
 */
function setUserCookie() {

    try {
        const user = document.querySelector('input');

        // Traza para comprobar datos:
        // console.log(user.value);
        // console.log(utl.cookieName(user.value));
        // console.log(document.cookie.split(';'));

        // Si el usuario existe redireccionamos:
        if (utl.cookieName(user.value) === user.value) {
            // console.log('Existe la cookie'); // Traza

            /* Ha de ponerse en la session el nombre del usuario que entra para
            encuentre su cookie */
            sessionStorage.setItem('userIn', user.value);
            location.assign('/VANILLA_PROTOCOL/page02.html');
        } else {

            if (regExp.test(user.value)) {

                let lastDate = Date.now();
                // console.log(lastDate); // Traza

                const userData = {
                    user: user.value,
                    lastdate: lastDate,
                    questions: []
                };

                // Setamos el futuro valor de la cookie con JSON:
                const userJson = JSON.stringify(userData);

                // Creamos la cookie con el nombre de usuario, fecha y preguntas vacía:
                utl.setCookie(user.value, userJson, 30);

                /* Ha de ponerse en la session el nombre del usuario que entra para
                encuentre su cookie */
                sessionStorage.setItem('userIn', user.value);
                location.assign('/VANILLA_PROTOCOL/page02.html');

            } else {
                throw new Error('¡El usuario no es válido!');
            }
        }
    } catch (error) {
        errors.innerText = e.toString();
        container.appendChild(errors);
    }

}

/**
 * Función para cambiar la pantalla de bienvenida al formulario de introducción
 * de usuario y añadir a su vez los eventos al nuevo display tras crearlos:
 * 
 * @author Gustavo Victor
 * @version 2.3
*/
function changeInput() {

    try {
        // Inicializamos variables:
        const h1 = document.querySelector('h1');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');

        let array, input, label, btn;

        // Si el titulo existe, se elimina:
        if (h1 != null) {
            h1.remove();
        }

        // Etiqueta para el user:
        array = ['for:user'];
        label = utl.newElement('label', array);
        label.innerText = 'USUARIO';

        // Input para el texto:
        array = [
            'type:text',
            'id:user',
            'name:user',
            'placeholder:Introduce aquí tu usuario'
        ];
        input = utl.newElement('input', array);

        // Creación del botón:
        array = ['type:button'];
        btn = utl.newElement('button', array);
        btn.innerText = 'Entra';
        btn.disabled = true;

        // Introducimos todos los elementos en el contenedor:
        utl.introduce(container, label, br1, input, br2, btn);

        // Añadimos los eventos al input:
        input.addEventListener('focus', function () {
            btn.disabled = true;
            errors.innerText = '';
            this.select();
            this.style.border = 'none';
        });

        input.addEventListener('blur', function () {
            if (regExp.test(this.value)) {
                this.style.border = '3px solid green';
                btn.disabled = false;
            } else {
                this.style.border = '3px solid red';
                btn.disabled = true;
                errors.innerText =
                    '¡El usuario no es válido!' +
                    'El formato correcto es texto@texto.dirección ' +
                    'siendo dirección o 2 o 4 letras.';
                container.appendChild(errors);
            }
        })

        /* Para evitar fallos de seguridad, la expresión regular se ha de chequear
            tanto al evaluar la casilla como al enviar el botón, ya que si se activa
            desde el inspector, se puede enviar una expresión que no sea la buscada */
        btn.addEventListener('click', setUserCookie);

    } catch (error) {
        errors.innerText = 'Ha ocurrido un error inesperado';
        console.log(error);
        container.appendChild(errors);

    }

}


// Evento para cuando se pulsan las dos teclas juntas y en ese orden:
document.addEventListener('keydown', function (event) {
    if (lastKey === 'Alt' && event.key === 'b') {
        /* Si existe ya el input ponemos un if para que no pueda crear infinitos
            inputs:*/
        if (document.querySelector('input') == null) {
            changeInput();
        }

        clearTimeout(timeOut); // Aquí quito el tiempo si no sale dos veces la función.

    } else {
        lastKey = event.key;
    }
})

// Evento que carga la función pasados 5 segundos:
window.addEventListener('load', function () {
    timeOut = this.setTimeout(changeInput, 5000);
})

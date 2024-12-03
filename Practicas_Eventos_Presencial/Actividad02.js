/**
 * Práctica 2 (Obligatoria)
 * Muestra una página en la que muestre un formulario con dos campos: email y 
 * password, con un botón para enviar el formulario.
 * Se quiere que la aplicación valide que el email y password sean válidos una 
 * vez se pierde el foco del campo y de lo contrario, muestren un mensaje de 
 * error indicando el formato esperado.
 * Los formatos son:
    - Para el email: xxxx@yyyy.zzzz
    - Para el password: un texto de longitud entre 8 y 10 caracteres.
 * No hace falta hacer CSS. No puntúa lo bonita que sea la página.
 * Los mensajes de error se eliminarán cuando el usuario entre a modificar de 
 * nuevo el campo.
 * 
 * El botón de enviar no funcionará si las validaciones no son correctas 
 * (ponedlo en gris mientras no sean correctas).
 * 
 * Nota: utilizar el evento blur (https://www.w3schools.com/jsref/dom_obj_event.asp)
 *
 * @author Gustavo Víctor
 * @version 1.0
 */

/**
 * Función para comprobar el email
 * 
 * @returns boolean
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function checkEmail() {

    // RegExp pedido a chatGPT:
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let email = document.getElementById('email');

    if(emailRegex.test(email.value)) {
        return true;
    } else {
        return false;
    }

}

/**
 * Función para comprobar la contraseña:
 * 
 * @returns boolean
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function checkPwd() {

    // RegExp pedido a chatGPT:
    const pwdRegex = /^.{8,10}$/;

    let pwd = document.getElementById('pwd');

    if(pwdRegex.test(pwd.value)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Función para llevar a cabo la actividad:
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function actividad02() {

    let errContainer = document.getElementById('errors');

    let email = checkEmail();
    // console.log(`email: ${email}`); // Traza email

    if(!email){
        let errEmail = document.createElement('h3');
        errEmail.textContent = 'No ha introducido un email correcto (xxxx@yyyy.zzzz)';
        errContainer.appendChild(errEmail);
    }   

    let pwd = checkPwd();
    // console.log(`pwd: ${pwd}`); // Traza contraseña

    // Para mostrar un mensaje de error si la contraseña no es correcta:
    if(!pwd){
        let errPwd = document.createElement('h3');
        errPwd.textContent = 'La contraseña ha de tener entre 8 y 10 caracteres';
        errContainer.appendChild(errPwd);
    } 

    if(email && pwd) {
        // Esto está consultado en StackOverflow:
        document.getElementById('send').disabled = false;
        // console.log('Debería haberse activado el botón'); // Traza btn
    } else {
        // Obtenido de StackOverflow:
        document.getElementById('send').disabled = true;
        // console.log('Algo no va'); // Traza btn
    }
}

/**
 * Función para quitar todos los errores:
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function deleteErr() {

    // Recorre todos los títulos de h3 que uso para el error y los borra:
    document.querySelectorAll('h3').forEach(h3 => {
        h3.remove(); 
    });
}

// Para añadir un evento a los inputs cuando pierdan el foco:
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', actividad02);
});

// Para quitar todos los avisos si están enfocando:
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', deleteErr);
});

// Para mostrar un mensaje de feedback si han conseguido introducir bien los 
// inputs (en h3):
document.getElementById('send').addEventListener('click', function() {
    let msg = document.createElement('h3');
    msg.textContent = '¡Has conseguido entrar!';
    document.getElementById('errors').appendChild(msg);
})
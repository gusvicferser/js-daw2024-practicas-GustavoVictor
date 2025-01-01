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
const bckBtn = utl.newElement('button', ['type:button']);
const tQuestions = document.getElementById('tQuestions');
const qScenario = document.getElementById('qScenario');
const user = sessionStorage.getItem('userIn');
const regExp = /[0-9]{1}/;

/**
 * Función que muestra las preguntas. Puedes escoger si tiene o no retraso al
 * mostrarlas
 *  
 * @param delay Booleano para retrasar la función o no. Por defecto es falso
 * 
 * @author Gustavo Víctor
 * @version 1.0
*/
function showQuestions(delay = false) {

    if (delay) {
        // Para establecer un span que indique que se están cargando las preguntas:
        let emptySpan = utl.newElement('span', ['id:emptyQ']);
        emptySpan.textContent = 'Cargando preguntas...';
        qScenario.appendChild(emptySpan);

        setTimeout(showQuestions, 2000);

    } else {

        document.getElementById('emptyQ').remove();  // Quitamos el aviso cargando

        console.log('Else de showQuestions');

        let cookie = JSON.parse(utl.getCookie(user)); // Hay que tratarlo como JSON

        console.log(cookie); // Traza
        console.log(cookie.questions.length); // Traza

        // Si el array de preguntas no está vacío
        if (cookie.questions != null && cookie.questions.length != 0) {

            console.log(cookie.questions); // Traza

        } else {

            let test = {
                question: '¿Es esto una pregunta de ejemplo?',
                answer: 'Verdadero',
                score: '9',
                status: 'OK'
            };

            showQ(test);
        }
    }

    // }
}

/**
 * Función para añadir una pregunta a la tabla:
 * 
 * @author Gustavo Víctor
 * @version 1.0
*/
function showQ(q) {

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.textContent = q.question;
    tQuestions.appendChild(td1);

    td2.textContent = q.answer;
    tQuestions.appendChild(td2);

    td3.textContent = q.score;
    tQuestions.appendChild(td3);

    td4.textContent = q.status;
    tQuestions.appendChild(td4);


}

/**
 * Función para comprobar que todos los campos están correctos en el formulario
 * de preguntas y activar el botón de grabar si es así:
 * 
 * @returns booleano si cumple todas las condiciones
 * @author Gustavo Victor
 * @version 1.0
 */
function checkQ() {

    let qAnswer;

    if (document.querySelector('input[name="answer"]:checked') != null) {
        qAnswer = document.querySelector('input[name="answer"]:checked').value;
        console.log(`Algo: ${qAnswer}`);
    } else {
        qAnswer = 'vacio';
    }

    let qInput = document.getElementById('question');
    let qScore = document.getElementById('score');
    const recordBtn = document.getElementById('send');

    console.log(
        `Pregunta = ${qInput.value}; 
        Respuesta = ${qAnswer}; 
        Puntuación = ${qScore.value}: ${regExp.test(qScore.value)}`
    );

    if (
        qInput.value != '' &&
        (qAnswer == 'true' || qAnswer == 'false') &&
        regExp.test(qScore.value)
    ) {
        recordBtn.disabled = false;
        recordBtn.style.cursor = 'pointer';
        console.log('Btn activado');
    } else {
        
        recordBtn.disabled = true;
        console.log('Btn desactivado');
    }

}

/* Creamos una promesa para el inicio. Si existe el usuario muestra todo, si no 
devuelve un enlace para registrarse:*/
const initP = () => {

    return new Promise((resolve, reject) => {

        // Trazas:
        // console.log(user);
        // console.log(utl.cookieName(user));

        if (user == utl.cookieName(user)) {
            resolve(user);
        } else {
            reject(new Error('¡No has iniciado sesión!'));
        }
    });
}





initP().then(answer => {

    console.log(answer);
    showQuestions(true);


}).then(() => {

    console.log('Hemos');

    document.getElementById('question').addEventListener('blur', checkQ);
    document.getElementById('score').addEventListener('blur', checkQ);
    // document.querySelector(
    //     "input[name='answer']:checked"
    // ).addEventListener(
    //     'change', checkQ
    // );

    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', checkQ);
    });

    document.getElementById('back').addEventListener('click', () => {
        location.assign('/VANILLA_PROTOCOL/page02.html');
    })
    
}
).catch((error) => {
    console.log(error.message); // Traza para mí

    /* Si no existe la cookie o directamente no hay sesión iniciada da error y
    permite volver al inicio*/
    container.innerHTML = '';
    dErrors.innerText = '¡Ha ocurrido un error inesperado!';
    container.appendChild(dErrors);

    bckBtn.innerText = 'INDEX';
    dErrors.appendChild(bckBtn);

    bckBtn.addEventListener('click', () => {
        location.assign('/VANILLA_PROTOCOL/');
    })

});


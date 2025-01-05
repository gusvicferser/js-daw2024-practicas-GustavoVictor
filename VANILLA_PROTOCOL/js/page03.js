/**
 * Página 03 del protocolo vainilla:
 * 
 * En esta página se deben añadir las preguntas, listarlas y guardarlas en la 
 * cookie de ese usuario:
 * 
 * @author Gustavo Víctor
 * @version 1.8
 */

import * as utl from './utilities.js';

// VARIABLES:

// Variables de DOM existente:
const container = document.getElementById('container');
const tQuestions = document.getElementById('tQuestions');
const qScenario = document.getElementById('qScenario');
const bckBtn = document.getElementById('back');

// Elementos DOM creados:
const dErrors = utl.newElement('div', ['class:errors']);
const indexBtn = utl.newElement('button', ['type:button']);

// Usuario activo:
const user = sessionStorage.getItem('userIn');

// Expresión regular:
const regExp = /^[0-9]$/;

// Información de la cookie en una variable:
let cookie;

// Variable numérica para la cantidad de preguntas en la cookie. Inicia en 1:
let numQ = 1;

// Para controlar las preguntas que nos quedan pendientes (algo de ayuda de ChatGPT):
let remainingQ = 0;

/**
 * Función que muestra las preguntas. Puedes escoger si tiene o no retraso al
 * mostrarlas
 *  
 * @param delay Booleano para retrasar la función o no. Por defecto es falso
 * 
 * @author Gustavo Víctor
 * @version 1.2
*/
function showQuestions(delay = false) {

    let emptySpan = utl.newElement('span', ['id:emptyQ']);

    if (delay) {
        // Para establecer un span que indique que se están cargando las preguntas:
        emptySpan.textContent = 'Cargando preguntas...';
        qScenario.appendChild(emptySpan);

        setTimeout(showQuestions, 2000);

    } else {

        document.getElementById('emptyQ').remove();  // Quitamos aviso de cargando

        // Trazas:
        // console.log('Else de showQuestions'); 
        // console.log(cookie);
        // console.log(cookie.questions.length);

        // Si el array de preguntas no está vacío:
        if (cookie.questions != null && cookie.questions.length != 0) {

            // console.log(cookie.questions); // Traza

            cookie.questions.forEach(q => {
                showQ(q);
            });

        } else {
            emptySpan.textContent = 'No existen preguntas guardadas';
            qScenario.appendChild(emptySpan);
        }
    }
}

/**
 * Función para borrar todas las preguntas de la cookie:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function deleteQ() {

    cookie.questions = [];

    cookie = JSON.stringify(cookie);
    utl.setCookie(user, cookie, 30);

    // console.log('Preguntas borradas');
    location.assign(location.pathname);
}

/**
 * Función para comprobar que todos los campos están correctos en el formulario
 * de preguntas y activar el botón de grabar si es así:
 * 
 * @returns booleano si cumple todas las condiciones
 * @author Gustavo Victor
 * @version 1.1
 */
function checkQ() {

    let qAnswer;

    if (document.querySelector('input[name="answer"]:checked') != null) {
        qAnswer = document.querySelector('input[name="answer"]:checked').value;
    } else {
        qAnswer = 'vacio';
    }

    let qInput = document.getElementById('question');
    let qScore = document.getElementById('score');
    const recordBtn = document.getElementById('send');

    // Traza:
    // console.log(
    //     `Pregunta = ${qInput.value}; 
    //     Respuesta = ${qAnswer}; 
    //     Puntuación = ${qScore.value}: ${regExp.test(qScore.value)}`
    // );

    if (
        qInput.value != '' &&
        (qAnswer == 'true' || qAnswer == 'false') &&
        regExp.test(qScore.value)
    ) {
        recordBtn.disabled = false;
        recordBtn.style.cursor = 'pointer';
        // console.log('Btn Grabar activado'); // Traza
        return true;

    } else {
        recordBtn.disabled = true;
        // console.log('Btn Grabar desactivado'); // Traza
        return false;
    }
}

/**
 * Función para añadir una pregunta a la tabla
 * 
 * @returns Promesa con la pregunta
 * 
 * @author Gustavo Víctor
 * @version 1.1
*/
function showQ(q, status) {

    if(document.getElementById('emptyQ') != null) {
        document.getElementById('emptyQ').remove();
    }

    return new Promise((resolve) => {

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const id = 'Sts' + numQ;

        td1.textContent = q.question;
        tr.appendChild(td1);

        td2.textContent = q.answer ? 'Verdadero' : 'Falso';
        tr.appendChild(td2);

        td3.textContent = q.score;
        tr.appendChild(td3);

        /* Si no nos pasan status es porque no tiene, 
        así que la pregunta es de la cookie:*/
        td4.textContent = (status == '' || status == null) ? 'OK' : status;
        td4.setAttribute('id', id);
        tr.appendChild(td4);

        tQuestions.appendChild(tr);

        // console.log('Mostrando pregunta');
        // console.log(`numQ before: ${numQ}`);

        numQ++;

        resolve(q);

    });
}

/**
 * Función para añadir una pregunta:
 * 
 * @param q Una pregunta de entrada para añadirse a la cookie
 * @returns Un string con el status de la pregunta
 * 
 * @author Gustavo Víctor
 * @version 3.0 
 */
function addQ(q) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            cookie.questions.push(q);

            /* El problema que tenía era que modificaba la propia cookie haciendo
            un stringify y entonces, al añadir la segunda o tercera pregunta, 
            daba error porque push no era sobre un array sino sobre un objeto
            JSON. para ello, defino una nueva cookie solo para este punto*/
            let newCookie = JSON.stringify(cookie);

            if (utl.setCookie(user, newCookie, 30)) {
                resolve('OK');
            } else {
                reject('ERROR');
            }
        }, 5000);
    })
}

/**
 * Función para cambiar el status de la pregunta en su td de la tabla: * 
 * 
 * @param status El estado de la pregunta 
 * @param id El id de la 'td' en la que se encuentra la pregunta a modificar el sts
 * @returns Un String conforme se ha hecho o un error si no
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function stsChange(status, id) {

    return new Promise((resolve, reject) => {

        // console.log(`Status: ${status}, id: ${id}`); // Traza

        // Capturamos el elemento del status y lo modificamos:
        let statusID = document.getElementById('Sts' + id);
        statusID.innerText = status;
        // console.log(`StatusID: ${statusID.innerText}`); // Traza

        /* Si al cambiar el status es el mismo que tenemos, devolvemos un string,
        si no, lanzamos un error:*/
        if (document.getElementById('Sts' + id).innerText == status) {
            resolve('Cambiado el status de Sts' + id);
        } else {
            reject(new Error('No se ha cambiado el status'));
        }
    })
}

/**
 * Función asíncrona para realizar todo el proceso de mostrar pregunta, añadir 
 * pregunta y cambiar el status de la pregunta
 * 
 * @author Gustavo Víctor
 * @version 2.0
 */
async function newQ() {

    remainingQ++;

    // Guardamos los valores de la nueva pregunta en variables:
    let qInput = document.getElementById('question').value;
    let qScore = document.getElementById('score').value;
    let qAnswer =
        document.querySelector('input[name="answer"]:checked').value == 'true' ?
            true : false;

    // Creamos la pregunta:
    let q = {
        question: qInput,
        answer: qAnswer,
        score: qScore
    };

    // Limpiamos el formulario:
    document.getElementById('question').value = '';
    document.getElementById('score').value = '';
    document.querySelector('input[name="answer"]:checked').checked = false;
    checkQ();
    
    // Promesas ejecutándose una tras otra:
    let primera = await showQ(q, 'Guardando...');
    // console.log(`Primera: ${primera}`); // Traza
    let qChange = numQ - 1; // Aquí guardamos el número de preguntas en ese momento.
    let segunda = await addQ(primera); 
    // console.log(`Segunda: ${segunda}`); // Traza
    let tercera = await stsChange(segunda, qChange);
    // console.log(`Tercera: ${tercera}`); // Traza

    remainingQ--;

    if(remainingQ == 0){
        bckBtn.addEventListener('click', () => {
            location.assign('/VANILLA_PROTOCOL/page02.html');
        });
        bckBtn.disabled = false;
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
            cookie = JSON.parse(utl.getCookie(user));// Hay que tratarlo como JSON
            resolve(user);
        } else {
            reject(new Error('¡No has iniciado sesión!'));
        }
    });
}

// ZONA DE PROMESAS:
initP().then(answer => {

    // console.log(`Respuesta de initP: ${answer}`); // Traza
    showQuestions(true);

    /* Para evitar errores, hacemos aquí los event listener, después de chequear
    si el usuario existe*/
    document.getElementById('question').addEventListener('blur', checkQ);
    document.getElementById('score').addEventListener('blur', checkQ);

    // Sacado de ChatGPT para tomar un cambio en el selector de tipo radio:
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', checkQ);
    });

    // Añadimos el evento al botón de 'Atrás':
    bckBtn.addEventListener('click', () => {
        location.assign('/VANILLA_PROTOCOL/page02.html');
    });

    document.getElementById('send').addEventListener('click', () => {
        /* Quitamos los eventos al botón de atrás para que, aunque alguien lo
        reactive, no haga nada:*/
        bckBtn.removeEventListener('click', () => {
            location.assign('/VANILLA_PROTOCOL/page02.html');
        });
        bckBtn.disabled = true;
        // console.log('Desactivado botón atrás'); // Traza
        newQ();
    });

    document.getElementById('delete').addEventListener('click', deleteQ);

}).catch((error) => {
    // console.log(error.message); // Traza para mí

    /* Si no existe la cookie o directamente no hay sesión iniciada da error y
    permite volver al inicio*/
    container.innerHTML = '';
    dErrors.innerText = '¡Ha ocurrido un error inesperado!';
    container.appendChild(dErrors);

    indexBtn.innerText = 'INDEX';
    dErrors.appendChild(indexBtn);

    indexBtn.addEventListener('click', () => {
        location.assign('/VANILLA_PROTOCOL/');
    })

});


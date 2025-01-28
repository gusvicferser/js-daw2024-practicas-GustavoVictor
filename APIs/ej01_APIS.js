/**
 * Crear una página web que al cabo de 5 segundos de estar en ella muestre una 
 * notificación al usuario para que visite un nuevo video que se ha publicado. 
 * Para ello, crea una función timeout que reciba el número de ms como parámetro 
 * y cree una promesa con el timeout como acción. Además, que salga por pantalla 
 * una cuenta atrás de 5 a 0 segundos. Cuando la cuenta llegue a cero, se 
 * mostrará la notificación. Cuando el usuario clica en la notificación, 
 * llevarle a una página en el que se muestre el video que se adjunta en esta 
 * tarea.
 * 
 * Al hacer clic con el botón izquierdo del ratón en el video, éste se parará o 
 * se reproducirá. Cada clic cambia de un estado a otro.
 * 
 * Al hacer clic con el botón derecho del ratón en el video, debe aparecer un 
 * texto en la parte inferior que nos diga el tiempo total del vídeo en minutos 
 * y segundos.
 * 
 * Ver video con toda la práctica funcionando (adjunto).
 */

const mainDiv = document.getElementById('main');


function countDown(ms) {
    return new Promise((resolve) => {

        console.log('Inicio promesa');

        let seconds = 5;

        let interval = setInterval(() => {
            console.log(seconds);
            mainDiv.textContent = seconds;
            seconds--;

            if(seconds < 0) {
                clearInterval(interval);
            }
        }, 1000)

        console.log('En medio');

        resolve(setTimeout(() => {
            console.log('Dentro del segundo timeout');
        }, ms))
    })
}

window.addEventListener('load', countDown(5000));
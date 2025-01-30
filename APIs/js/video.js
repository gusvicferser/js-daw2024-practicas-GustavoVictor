/**
 * JS para controlar el video de la página video.html
 */

// Capturamos el vídeo y los controles:
const video = document.querySelector('video');
const controls = document.getElementById('controls');

// Ponemos el video en loop:
video.loop = true;

// Comenzamos el vídeo:
video.play();

// Le añadimos el evento para pausarlo o, si está pausado, reanudarlo:
video.addEventListener('click', function() {
    if(this.paused) {
        this.play();
    } else {
        this.pause();
    }
});

// Quitamos el menú contextual y le añadimos que muestre los minutos y segundos
// o que los quite al volver a pulsar:
video.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    if(controls.textContent.includes('segundos')) {
        controls.textContent = '';
    } else {
        controls.textContent = 
        `${parseInt(this.duration/60)} minutos 
            ${parseInt(this.duration)} segundos`;
    }  
})
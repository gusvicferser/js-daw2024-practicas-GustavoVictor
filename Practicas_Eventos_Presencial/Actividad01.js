/**
 * Javascript para cambiar la imagen de fondo como pide la Actividad 01:
 * 
 * @author Gustavo Victor
 * @version 1.0
 */

var lastKey = '';

/**
 * Función para cambiar el fondo de pantalla:
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function backImg(event) {

    console.log(event.key);

    if(lastKey === 'Alt' && event.key === 'b') {
        document.getElementById('imagen').style.backgroundImage = 'none';
        document.getElementById('imagen').style.backgroundImage = `url(https://picsum.photos/2000/1000?${Math.random()})`;
    } 

    console.log(`lastKey: ${lastKey} // key: ${event.key}`);

    lastKey = event.key;

}

document.body.addEventListener('keydown', backImg);
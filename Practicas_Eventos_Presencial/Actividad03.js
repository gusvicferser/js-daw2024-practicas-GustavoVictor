/**
 * Práctica 3 (Opcional)
 * Crea una página que muestre dos capas del mismo tamaño (200px X 100px). 
 * La primera capa mostrará el texto: "Soy arrastrable" y tendrá fondo amarillo. 
 * La segunda mostrará el texto: "Soy el destino" y tendrá fondo blanco.
 * 
 * La aplicación permitirá arrastrar la primera en la segundo.
 * Durante el arrastre, la primera capa se mostrará con una opacidad del 50% y 
 * al arrastrar sobre la segunda, ésta (el destino) se cambiará a fondo rojo. 
 * Al soltar en la segunda capa la primera, la primera desaparece y en la 
 * segunda aparece el texto "Lo has logrado".
 * 
 * Nota: utilizar los eventos drag y drop 
 * (https://www.w3schools.com/jsref/dom_obj_event.asp)
 * 
 * @author Gustavo Victor
 * @version 1.0
 */

/**
 * Función para cambiar el div al soltar el otro:
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function dropped() {

    capa2.textContent = '¡Lo has logrado!';

    capa1.remove();
}

// Si los defino aquí como constantes puedo usarlos dentro de las funciones:
const capa1 = document.getElementById('capa1');
const capa2 = document.getElementById('capa2');

// Para cambiar la opacidad del primer div:
capa1.addEventListener('dragstart', function() {this.style.opacity = '50%'});
capa1.addEventListener('dragend', function() {this.style.opacity = '100%'});

// Para cambiar el color del fondo si entra o sale el div agarrado:
capa2.addEventListener('dragenter', function() {this.style.backgroundColor = 'red'});
capa2.addEventListener('dragleave', function() {this.style.backgroundColor = 'white'});

// Esta línea al parecer es necesaria ya que, de lo contrario, los navegadores
// modernos no admitirían esa área para soltar el objeto agarrado:
capa2.addEventListener('dragover', function(event) {event.preventDefault()});
capa2.addEventListener('drop', dropped);

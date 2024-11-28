/**
 * Ej1. Haz un programa que cuando se pulse un botón “Nuevo número”, añada un 
 * elemento con un número aleatorio a una lista desordenada (elemento UL).
 */

/**
 * Función para añadir un elemento a la lista sin ordenar:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function addList() {

    let list = document.getElementById('lista');
    let adding = document.createElement('li');

    let numeroRandom = Math.floor((Math.random()*100)+1);

    adding.textContent = numeroRandom;

    list.appendChild(adding);
}

document.getElementById('ej01').addEventListener('click', addList);

/**
 * Ej2. Haz un programa que mediante eventos y el uso del objeto event, te 
 * muestre en todo momento la posición actual del ratón en pantalla. Para 
 * mostrarlo modificaremos de forma dinámica un elemento XHTML (Ejemplo, un <p>) 
 * que nos muestre la posición actual del ratón.
 */

/**
 * Funcion para ver las coordenadas de ratón:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function detectCursor(event) {

    let cursor = document.getElementById('cursor');
    let x = event.clientX;
    let y = event.clientY;
    let text = "X: " + x + " // Y: " + y;
    
    cursor.textContent = text;

}

document.addEventListener('mousemove', detectCursor);

/**
 * Ej3. Haz un programa que tenga 3 elementos <p> y al hacer clic sobre ellos 
 * desaparezcan (se oculten) y al hacer clic derecho los elimine. También deberá 
 * tener un botón “Reaparecer” que hará que aparezcan todos los elementos 
 * desaparecidos (pero no los eliminados).
 */

const parrafos = document.querySelectorAll('p');

parrafos.forEach(parrafo => {
    parrafo.addEventListener('click', () => { parrafo.style.display = 'none';});
    parrafo.addEventListener('contextmenu', () => { parrafo.remove();})
});

document.getElementById('reapear').addEventListener('click', 
    () => {parrafos.forEach(parrafo => { parrafo.style.display = 'block';})
});


/**
 * Ej4. Crea un menú desplegable (select). El usuario debe seleccionar una 
 * opción del menú y, se realizará una acción dependiendo de la opción elegida. 
 * Las acciones disponibles son:
    1. Saludar: Muestra un mensaje de saludo.
    2. Crear Caja: generará una caja de color rojo con el texto “nueva caja”.
    3. Mostrar Fecha Actual: Muestra la fecha y hora actual.
    4. Generar Número Aleatorio: Genera un número aleatorio entre 1 y 100.
 * Finalmente crea un botón restablecer para restablecer la página a su estado 
 * inicial.
 */

const option = document.getElementById('options');

/**
 * Función para escoger una opción:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function action(){

    let selectedOpt = document.getElementById('options');

    if(selectedOpt==null){}
}

option.addEventListener('change', action);


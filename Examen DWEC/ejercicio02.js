/**
 * Función para mostrar el ejercicio:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function show() {

    // Capturamos el contenedor
    let container = document.getElementById('container');

    // Mostramos el container o lo ocultamos:
    if (container.style.display != 'block') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }



}


document.getElementById('ej02').addEventListener('click', show);

var bloquesT = 0;

/**
 * Función para el ejercicio 02:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function ejercicio02() {

    console.log(this.value);

    let color = this.value;

    console.log('red');

    bloquesT = addBlock(bloquesT, color);

    let textTotal = document.getElementById('total');
    
    textTotal.innerText = `Total Bloques: ${bloquesT}`;
}

/**
 * Función para añadir un elemento al div con id panel:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function addBlock(bloquesT, color) {

    let panel = document.getElementById('panel');

    console.log('red');

    let block = document.createElement('div');

    block.setAttribute('class', 'bloques');
    block.setAttribute('id', 'blk' + bloquesT); 
    block.style.backgroundColor = color;
    block.style.padding = '10px';
    block.style.width = '50px';
    block.textContent = color;

    bloquesT += 1;

    console.log(bloquesT);

    panel.appendChild(block);

    

    return bloquesT;

}


document.getElementById('options').addEventListener('change', ejercicio02);


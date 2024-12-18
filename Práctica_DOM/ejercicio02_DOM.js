/**
 * Práctica 2 (Obligatoria)
 * Crea una página que muestre una lista de palabras (mete 10 palabras tú mismo,
 * fijas y desordenadas, no es necesario que el usuario las introduzca). 
 * Pregunta al usuario (con la función confirm), después de 3 segundos en la 
 * página, si quieres que la lista salga ordenada alfabéticamente. Si acepta, 
 * borra la lista que existía y muestra la lista ahora ordenada alfabéticamente.
 */

let palabras = [
    "Tarta",
    "Pez",
    "Cómics",
    "Sueños",
    "Pelea",
    "Tesoro",
    "Tiempo",
    "Magia",
    "Espacio",
    "Batalla"
];

/**
 * Función para desplegar la lista con un array:
 * 
 * @param {Array} array 
 */
function acoplar(array) {

    let ul = document.getElementById('list');

    ul.innerHTML = '';

    array.forEach(element => {

        let li = document.createElement('li');
        li.innerText = element;
        ul.appendChild(li);

    });
}

acoplar(palabras);

setTimeout(() => { confirm("¿Quieres ordenar la lista?") ? acoplar(palabras.sort()) : ''; }, 3000)



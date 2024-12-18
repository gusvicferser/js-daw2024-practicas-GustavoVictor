/**
 * Crea una página HTML que permita al usuario ingresar su nombre en un campo de
 * texto. Al hacer clic en un botón "Guardar", guarda el nombre en una cookie 
 * con una duración de 7 días. Al cargar la página, si ya existe la cookie, 
 * muestra un mensaje de bienvenida con el nombre del usuario en lugar del campo
 * de texto.
 * 
 * Nota: Si necesitas recargar la página puedes usar: location.reload();
 */

/**
 * Función proporcionada por la profesora para crear una cookie con JavaScript:
 * 
 * @param cname "Nombre de la cookie"
 * @param cvalue "Valor o texto de la cookie"
 * @param exdays "Días de duración especificado en int"
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/**
 * Función para devolver el valor de una cookie:
 * 
 * @param {String} cname 
 * @returns Valor de la cookie en cuestión
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Función para borrar una cookie creada por nosotros:
 * 
 * @param cname Nombre de la cookie a borrar
 */
function deleteCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

/**
 * Función sacada de W3 School y modificada para este ejercicio. Comprueba si 
 * hay cookie de 'User' y, si es así, quita el formulario y saluda:
 * 
 * @author (Corrección) Gustavo Víctor
 * @version 1.0
 */
function checkCookie() {
    let user = getCookie("User");
    let msg = document.getElementById('welcome');
    let form = document.getElementById('petition');
    console.log(user);

    if (user) {
        form.style.display = 'none';

        let h1 = document.createElement('h1');
        h1.innerText = 'Bienvenido, ' + getCookie('User');
        msg.appendChild(h1);
    }
}

/**
 * Función para el ejercicio 01 del DOM. Toma el nombre introducido en la caja
 * siempre que no esté vacío y crea una cookie con ese nombre para luego recargar
 * la página:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function ej01() {

    let userName = document.getElementById('userName').value;

    if (userName != '') {
        setCookie('User', userName, 7);
    }

    location.reload();
}


document.getElementById('btn').addEventListener('click', ej01);
document.getElementById('delete').addEventListener('click', function() {
    deleteCookie('User'); // Esta es la única manera de que aparezca el formulario de nuevo.
    location.reload(); // Y recargar la página habiendo eliminado las cookies.
})
window.addEventListener('load', checkCookie); // Me costó encontrar que con document no funciona correctamente.
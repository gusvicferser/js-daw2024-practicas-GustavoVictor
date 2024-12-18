/**
 * Ej2: Crea una página que muestre el número de visitas que has realizado en la página. La
 * cookie que creas caducará en un mes. Si se visita la página más de 10 veces, el contador
 * se pondrá a cero y se borrará la cookie existente.
 * 
 * Nota: Los ejercicios de cookies solo funcionarán si los ejecutáis con liveserver. Si los
 * ejecutáis desde local se usa el protocolo file en vez de http, y no funcionará.
 * 
 */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// setCookie('prueba', 1, 30);

// console.log(getCookie('prueba'));

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

function deleteCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

/**
 * Función que añade 1 visita de la página:
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function addVisit() {

    let cookie = getCookie('prueba');

    cookie = parseInt(cookie) + 1;
    setCookie('prueba', parseInt(cookie), 30);

}

if (getCookie('prueba') <= 0) {

    setCookie('prueba', 1, 30);
    console.log(getCookie('prueba'));
    document.querySelector('b').innerHTML = getCookie('prueba');

} else {

    if (getCookie('prueba') < 10) {
        addVisit();
        console.log(getCookie('prueba'));
    } else {
        deleteCookie('prueba'); // La eliminamos
        setCookie('prueba', 1, 30); // Para que no ponga el <b> vacío, la reiniciamos.
    }
    document.querySelector('b').innerHTML = getCookie('prueba');
}

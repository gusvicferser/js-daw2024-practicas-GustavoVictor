/**
 * JS para las utilidades a usar en cada página del proyecto:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */

/**
 * Función para crear un elemento y sus atributos:
 * 
 * @param {string} element El elemento que queremos crear: 
 * @param {array} atributes Un array como un JSON con atributo:valor
 * 
 * @author Gustavo Victor
 * @version 1.0
 */
function newElement(domElement, domAtributes) {

    let dom = document.createElement(domElement);

    if (domAtributes != null || domAtributes != '') {
        domAtributes.forEach(element => {
            let atribute = element.substring(0, element.search(':'));
            let value = element.substring(element.search(':') + 1, element.length);
            dom.setAttribute(atribute, value);
        });
    }

    return dom;
}

/**
 * Función para meter todos los elementos en un elemento del DOM:
 * 
 * @param {string} domElement El elemento en el cual vamos a introducir los elementos 
 * @param {...*} domElements Array de elementos a introducir
 */
function introduce(domElement, ...domElements) {

    if (domElements != null || domElements != '') {
        domElements.forEach(element => {
            domElement.appendChild(element);
        })
    }
}

/**
 * Función para comprobar si un elemento cumple una expresión regular cambiar el 
 * borde de color:
 * 
 * @param {DOM element} domElement Elemento del DOM que queremos verificar
 * @param {Reg Exp} regExp Una expresión regular para verificar  
 * @returns boolean (True si lo ha conseguido, False si no)
 * 
 * @author Gustavo Victor
 * @version 1.0
*/
function checkREx(domElement, regExp) {

    if (domElement != null || domElement != '') {
        domElement.addEventListener('focus', function () {
            this.select();
            this.style.border = 'none';
        })
        domElement.addEventListener('blur', function () {

            if (regExp.test(this.value)) {
                this.style.border = '3px solid green';
            } else {
                this.style.border = '3px solid red';
            }
        })
    }
}

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


// Exportamos el utilities:
export {
    newElement,
    introduce,
    checkREx,
    setCookie,
    getCookie,
    deleteCookie
}

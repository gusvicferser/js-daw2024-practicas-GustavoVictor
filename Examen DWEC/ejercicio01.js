/**
 * Ejercicio 1:
 */

/**
 * Función que pide años al usuario hasta que se deje vacío o se cancele:
 * 
 * @returns Array de años
 * 
 * @author Gustavo Víctor
 * @version 1.0
 * 
 */
function askNum() {

    let years = [];
    let answer;
    let reg_exp = /^\d{4}$/;

    do {

        answer = window.prompt("Introduzca un año (YYYY)");

        console.log(answer);

        if (answer !== null) {

            if (answer !== '') {

                if (reg_exp.test(answer)) {
                    years.push(answer);
                    console.log(`Palabra añadida: ${answer}`);


                } else {
                    window.alert(
                        'No se ha introducido un número correcto, vuelva a probar');
                }

            }
        }

    } while (answer != null && answer != '');

    return years;
}

/**
 * Función para filtrar los años que pertenecen al siglo XXI:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function centXXI(array) {

    let xxi = array.filter(function(num) {
        if(num>2000 && num<2100) {
            return num;
        }
    });

    return xxi;

}

/**
 * Función para devolver si un año es bisiesto:
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function bisiesto(year) {

    return year%4==0;

}


/**
 * Función del ejercicio 01 (Ordena un array y muestra por pantalla 
 * sin repeticiones):
 * 
 * 
 * @author Gustavo Víctor
 * @version 1.0
 */
function ejercicio01() {

    let array = askNum();

    array.sort((a, b) => { return b - a }); // Ordenamos

    set = new Set(array); // Quitamos repetidos

    array= [...set]; // Para poder hacer Join necesito devolverlo a array

    for (let key in array) {

        if(bisiesto(array[key])) {
            array[key] += ': es bisiesto'; // Señalamos si es bisiesto.
        }
    }

    window.alert(array.join('\n'));

    let xxi = centXXI(array);

    window.alert(`Son del siglo XXI:\n${xxi.join('\n')}`); // Mostramos los del siglo XXI

}

document.getElementById('ej01').addEventListener('click', ejercicio01);

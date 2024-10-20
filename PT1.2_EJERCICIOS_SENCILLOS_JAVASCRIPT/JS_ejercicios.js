// Ejercicio 01: Devuelve tu nombre
function ejercicio01() {

    let nombreUsuario = window.prompt('¿Cómo te llamas?');

    window.alert('¡Hola ' + nombreUsuario + '!');
}

// Ejercicio 02: Cuenta las 'a' minúsculas
function ejercicio02() {

    let frase = window.prompt('Introduce una frase:');
    let numAs = 0;
    let largo = frase.length;

    console.log(frase, numAs, largo);

    for (let i=0; i<=largo; i++) {
        if(frase.charAt(i)=='a') {
            numAs+=1;
            // console.log(numAs);
        }
    }

    if(numAs==0){
        window.alert('No se han encontrado letras "a"');
    } else if (numAs==1){
        window.alert('La frase: "' + frase + '" contiene ' + numAs + ' letra "a"');
    } else {
        window.alert('La frase: "' + frase + '" contiene ' + numAs + ' letras "a"');
    }
}

// Ejercicio 03: Cuenta las 'a' minúsculas y mayúsculas
function ejercicio03() {

    let frase = window.prompt('Introduce una frase:');
    let numAs = 0;
    let largo = frase.length;

    console.log(frase, numAs, largo);

    for (let i=0; i<=largo; i++) {
        if(frase.charAt(i)=='a' | frase.charAt(i)=='A') {
            numAs+=1;
            // console.log(numAs);
        }
    }

    if(numAs==0){
        window.alert('No se han encontrado letras "a" o "A"');
    } else if (numAs==1){
        window.alert('La frase: "' + frase + '" contiene ' + numAs + ' letra "a" o "A"');
    } else {
        window.alert('La frase: "' + frase + '" contiene ' + numAs + ' letras "a" o "A"');
    }
}

// Ejercicio 04: ¿De qué color quieres el fondo?
function ejercicio04() {

    let color = window.prompt('¿A qué color quiere cambiar el fondo? ("R" para rojo, "V" para verde, "A" para azul)')

    if (color!='R' && color!='V' && color!='A') {
        window.alert('¡No ha introducido un color válido!')
    } else {
        if(color=='R') {
            document.body.style.backgroundColor='red';
            document.body.style.color='azure';
            console.log('Rojo');
        } else if(color=='V') {
            document.body.style.backgroundColor='green';
            document.body.style.color='orange';
            console.log('Verde');
        } else if (color=='A') {
            document.body.style.backgroundColor='blue';
            document.body.style.color='orange';
            console.log('Azul');
        }
    }
}

// Ejercicio 05: ¿De qué color quieres el fondo? (Segunda parte con botones):

function ejercicio05(color) {

    if(color=='red') {
        document.body.style.backgroundColor='red';
        document.body.style.color='azure';
        console.log('Rojo');
    } else if(color=='green') {
        document.body.style.backgroundColor='green';
        document.body.style.color='orange';
        console.log('Verde');
    } else if (color=='blue') {
        document.body.style.backgroundColor='blue';
        document.body.style.color='orange';
        console.log('Azul');
    } else {

    }

    
}

// Ejercicio 06: "El div cambiante..."
let divCambiante = document.getElementById('ej06');

function cambiaDiv(){

    divCambiante.style.cursor='progress';
    divCambiante.style.backgroundColor='green';
}

divCambiante.addEventListener("mouseover", cambiaDiv);


// Ejercicio 7: "Ahora arregla lo que has hecho"
function devuelveDiv(){

    divCambiante.style.backgroundColor='white';
}

divCambiante.addEventListener("mouseout", devuelveDiv);


// Ejercicio 8: "¿Quién es el mayor?":
function comprobarMayor() {

    let valor1 = parseFloat(document.getElementById('primer_numero').value);

    let valor2 = parseFloat(document.getElementById('segundo_numero').value);

    let valor3 = parseFloat(document.getElementById('tercer_numero').value);

    // console.log('Numero 1: ' + valor1 + ', Numero 2: ' + valor2 + ', Numero 3: ' + valor3);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        window.alert("¡Error Crítico! ¡Debe introducir tan solo números!")
    } else {

        if (valor1>valor2) {
            if (valor1>valor3) {
                window.alert('El primer número es el mayor: ' + valor1);
                // console.log('1');
            } else {
                window.alert('El tercer número es el mayor: ' + valor3);
                // console.log('2');
            }

        } else {
            if (valor2>valor3) {
                window.alert('El segundo número es el mayor: ' + valor2);
                // console.log('3');
            } else {
                window.alert('El tercer número es el mayor: ' + valor3);
                // console.log('4');
            }
        }
    }

    // console.log('Numero 1: ' + valor1 + ', Numero 2: ' + valor2 + ', Numero 3: ' + valor3);
}

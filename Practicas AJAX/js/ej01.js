/**
 * La página https://fakerapi.it/ permite obtener datos aleatorios de personas 
 * pensando en que los desarrolladores y otros profesionales puedan utilizarlos 
 * en sus pruebas y test. En todo caso la idea es hacer peticiones vía GET a la
 * URL:
 *      https://fakerapi.it/api/v2/persons?_quantity=1
 * 
 * Se pueden pasar parámetros para indicar cuántos usuarios aleatorios deseamos, 
 * el sexo, política de contraseñas, páginas, formato de respuesta, etc. En la 
 * página de documentación viene un ejemplo de la estructura ]SON de las 
 * respuestas.
 * 
 * Como resumen indicamos que es un objeto formado por una propiedad: data.
 * 
 * Es un array donde cada elemento lo forma un objeto con los datos del usuario
 * aleatorio.
 * 
 * La aplicación mostrará nombre, apellido, email, dirección y país al que 
 * pertenece el usuario. Cada vez que actualicemos la página, se pedirá otro 
 * usuario. Ejemplo de resultado:
 */

const FAKE_API = 'https://fakerapi.it/api/v2/persons?_quantity=1';

fetch(FAKE_API).then(
    (answer) => {
        console.log(answer);
        if (answer.ok) return answer.json(); 
        else throw new Error(answer.status());
    }
).then((answer) => {
    console.log(answer);
    document.getElementById('name').textContent = answer.data[0].firstname;
    document.getElementById('surname').textContent = answer.data[0].lastname;
    document.getElementById('email').textContent = answer.data[0].email;
    document.getElementById('address').textContent = answer.data[0].address.street;
    document.getElementById('country').textContent = answer.data[0].address.country;

}).catch ((error) => {
    console.log(`Error: ${error}`);
})




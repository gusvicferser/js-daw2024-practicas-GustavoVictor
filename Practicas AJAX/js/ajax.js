const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    processFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    // console.log(element);
  });
}

function processFetch(numsecs, user) {

  // Data la iniciamos fuera y así podemos acceder a ella:
  let data;

  fetch(`${BASE_URL}${user}?delay=${numsecs}`)
    .then((response) => {
      // console.log(response);
      if (response.ok) return response.json();
      else throw new Error(response.status);
    })
    .then((response) => {
      // console.log(response);
      document.getElementById('id').textContent = response.data.id;
      document.getElementById('email').textContent = response.data.email;
      // console.log(response.data);

      // Para poder usar fetch no podemos encadenarlo sin más:
      fetch(POSTMAN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(response.data)
      }).then((answer) => {

        let algo = answer.json();
        // console.log(algo);
        if (answer.ok) return algo;
        else throw new Error(answer.status);
        
      }).then((answer) => {
        
        // La propiedad que envía de vuelta el servidor está dentro de 'json':
        console.log(answer.json);
        document.getElementById('name').textContent = answer.json.first_name;
        document.getElementById('status').textContent = 'Success: 200';
        
      })

    }).catch((error) => {
      console.log(`Error: ${error}`);
      document.getElementById('status').textContent = error;
    })

}

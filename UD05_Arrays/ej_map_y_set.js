// Ejercicio 1:
console.log('Ejercicio 1:');
let numeros = [120, 109, 106, 45, 97, 103];

let [num1, num2, ...resto] = numeros;

console.log(`Numero 1: ${num1}, Numero 2: ${num2}, y el resto: ${resto}`);

// Ejercicio 2:
console.log();
console.log('Ejercicio 2:');

let valores = [100, 2, 3, 4, 50, 6, 7, 8, 90, 100, 90, 7, 50, 3, 2];

let unicos = new Set(valores);

console.log(valores);
console.log(unicos);

// Ejercicio 3:
console.log();
console.log('Ejercicio 3:');

let algunos = new Set(['alberto', 'catalina', 'pedro', 'cristobal']);

algunos.add('luis');
console.log((algunos.has('cristobal')) ? 'Contiene a Cristobal' : 'No contiene ningún Cristobal');
algunos.delete('cristobal');
console.log(algunos);

// Ejercicio 4:
console.log();
console.log('Ejercicio 4:');

const personas = new Map();
personas.set('Alberto', 25).set('Ana', 28).set('Victor', 26).set('Catalina', 41);
console.log(...personas);
personas.set('Catalina', 31);
console.log(...personas);

// Ejercicio 5:
console.log();
console.log('Ejercicio 5:');

function contarOcurrencias(palabras) {

    const biblioteca = new Map();

    for (let palabra of palabras) {
        let veces = 0;
        for (let palabra2 of palabras) {
            if (palabra === palabra2) {
                veces++;
            }
        }
        biblioteca.set(palabra, veces);
    }

    return biblioteca;
}

let prueba = [
    'Zaragoza',
    'Pamplona',
    'Orense',
    'Cuenca',
    'Murcia',
    'Huelva',
    'La Rioja',
    'Zaragoza',
    'Cuenca',
    'Cuenca',
    'Huelva',
    'Huelva',
    'Huelva',
    'Orense'
];

console.log(...contarOcurrencias(prueba));

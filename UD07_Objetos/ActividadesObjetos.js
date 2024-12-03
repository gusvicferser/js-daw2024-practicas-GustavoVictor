/**
 * Ej1. Crea un objeto llamado persona con las siguientes propiedades:
    • nombre: "Juan"
    • edad: 30
    • profesion: "Ingeniero"
    • Un método presentarse que devuelva una cadena de texto presentando a la
        persona con su nombre y profesión.
 * Llama al método presentarse e imprime el resultado en la consola
 */

let Juan = {
    nombre:'Juan',
    edad:30,
    profesion: 'Ingeniero',
    presentarse : function () {
        return `¡Hola, soy ${this.nombre} y soy ${this.profesion}!`;
    },
    // Método nuevo de cumplirAnios:
    cumplirAnios : function () {
        this.edad+=1;
    }
    
}

console.log(Juan.presentarse());
console.log(); // Espacio

/**
 * Ej2. Modifica el objeto persona del ejercicio anterior para incluir un método cumplirAnios
    que incremente la edad de la persona en 1 utilizando el objeto this. Llama al método
    cumplirAnios e imprime la edad actualizada.
 */

Juan.cumplirAnios();
console.log(Juan.edad);
console.log(); // Espacio

/**
 * Ej3. Crea un objeto llamado libro con las siguientes propiedades:
    • titulo: "Cien Años de Soledad"
    • autor: "Gabriel García Márquez"
    • paginas: 417
    • añoPublicacion: 1967
 * Utiliza un bucle para recorrer todas las propiedades del objeto e imprime cada propiedad y
 * su valor.
 */

let libro = {

    titulo: 'Cien Años de Soledad',
    autor: 'Gabriel García Márquez',
    paginas : 417,
    añoPublicacion: 1967,
};

for(let propiedad in libro) {
    console.log(`${propiedad.toUpperCase()} : ${libro[propiedad]}`);
};
console.log();

/**
 * Ej4. Crea una función constructora llamada Coche que tenga las propiedades:
    • marca
    • modelo
    • año
 * Un método detalles que devuelva una cadena de texto con la marca, el modelo 
 * y el año del coche.
 * Crea dos instancias de Coche y llama al método detalles para cada una.
 */

function Coche(marca, modelo, año) {

    this.marca = marca,
    this.modelo = modelo,
    this.año = año,
    this.detalles = () => {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`};
    // Método añadido del ejercicio 5:
    this.encender = () => {
        return `El coche ${this.marca} ${this.modelo} ha sido encendido`;
    }

}

let mazda = new Coche('Mazda', 3, 2014);
let peugeot = new Coche('Peugeot', 1008, 2010);

console.log(mazda.detalles());
console.log(peugeot.detalles());
console.log();

/**
 * Ej5. Utiliza el ejercicio anterior del constructor Coche. Ahora añade un método al prototipo
 * de Coche llamado encender, que imprima "El coche [marca] [modelo] ha sido encendido".
 * Llama al método encender en alguna de las instancias de Coche.
 */

console.log(mazda.encender());
console.log(peugeot.encender());
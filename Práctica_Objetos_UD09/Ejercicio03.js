/**
 * Práctica 3 (Opcional)
 * Crea un tipo de objeto que sirve para representar ordenadores. Sus propiedades serán:
    • Marca, un texto
    • Modelo, un texto
    • Memoria RAM, un número que indica los GB de capacidad
    • Capacidad de disco duro, un número que indica el GB de capacidad
    • Pulgadas de pantalla, un número que indica Pulgadas
    Métodos de los ordenadores:
    • toString, sirve para obtener en forma de texto los detalles del ordenador
 * Al crear un ordenador se pueden indicar todos sus valores, pero por defecto (sin ser
 * obligado indicarlos) se toman como valores: 17 pulgadas, 512 GB de disco duro y 4 GB de
 * RAM. La marca y modelo sí son necesarias.
 * Crea otro tipo de objeto que represente a los ordenadores portátiles. Los que heredan todo
 * lo que tiene un ordenador y añaden una nueva propiedad: autonomía, que es un número
 * que expresa horas. Se construye este objeto de la misma forma que los ordenadores, pero
 * puede añadirse la autonomía, que por defecto son 4 horas. Por defecto, todos los portátiles
 * son de 12 pulgadas, 4 GB de RAM y disco duro de 256 GB. Además, el toString de un portátil
 * añade la autonomía a los detalles.
 */

function Ordenador(marca, modelo, memoria, discoDuro, pulgadas) {
    this.marca = marca,
        this.modelo = modelo,
        this.memoria = isNaN(memoria) || memoria < 1 ? 4 : memoria,
        this.discoDuro = isNaN(discoDuro) || discoDuro < 1 ? 512 : discoDuro,
        this.pulgadas = isNaN(pulgadas) || pulgadas < 1 ? 17 : pulgadas,
        this.toString = () => {
            return `El ordenador de marca ${marca} y modelo ${modelo} 
                tiene ${memoria} GB de memoria RAM, ${discoDuro} de GB de disco duro
                y ${pulgadas} pulgadas`;
        }
}

// function Portatil

let hp = new Ordenador('hp', '550X', 16, 1000, 19.5);

console.log(Ordenador.prototype);

Portatil.prototype.pulgadas = this.pulgadas = isNaN(pulgadas) || pulgadas < 1 ? 12 : pulgadas;
Portatil.prototype.memoria = this.memoria = isNaN(memoria) || memoria < 1 ? 4 : memoria;
Portatil.prototype.discoDuro = this.discoDuro = isNaN(discoDuro) || discoDuro < 1 ? 256 : discoDuro;
Portatil.prototype.autonomia = this.autonomia = isNaN(autonomia) || autonomia < 1 ? 4 : autonomia;
Portatil.prototype.toString = function () {
    return `El portátil de marca ${marca} y modelo ${modelo} 
                tiene ${memoria} GB de memoria RAM, ${discoDuro} de GB de disco duro
                y ${pulgadas} pulgadas`;
}



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


class Ordenador {

    constructor (marca, modelo, memoria, discoDuro, pulgadas) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = isNaN(memoria) ? 4 :  memoria < 1 ? 4 : memoria;
        this.discoDuro = isNaN(discoDuro) ? 512 : discoDuro < 1 ? 512 : discoDuro;
        this.pulgadas = isNaN(pulgadas) ? 17 : pulgadas < 1 ? 17 : pulgadas ;
    }

    toString() {
        return `El ordenador de marca ${this.marca} y modelo ${this.modelo}
        tiene ${this.memoria} GB de memoria RAM, ${this.discoDuro} de GB de disco duro
        y ${this.pulgadas} pulgadas`;
    }
}

class Portatil extends Ordenador {
    constructor (marca, modelo, memoria, discoDuro, pulgadas, autonomia) {
        super(marca, modelo, memoria, discoDuro, pulgadas);
        this.autonomia = isNaN(autonomia) ? 4 : autonomia < 1 ? 4 : autonomia;
    }

    toString() {
        return super.toString() + ` y además como portátil tiene ${this.autonomia}
        horas de autonomia`;
    }
}

// function Portatil

let hp = new Ordenador('hp', '550X', 32, 1000, 15.6);

console.log(hp.toString());

let hpPortatil = new Portatil('hp', '1150B', 16, 512, 'you', 10);

console.log(hpPortatil.toString());




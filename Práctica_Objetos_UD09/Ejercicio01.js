/**
 * Crea objetos que representen rectángulos. Estos deben cumplir las siguientes
 * características:
 * • Propiedades del rectángulo: Deben tener ancho (width) y alto (height) como
 * propiedades. Estas representarán las dimensiones del rectángulo.
 *
 * • Validación en el constructor: La construcción de los rectángulos se realizará con
 * una función constructora que recibe dos números (ancho y alto). Si alguno no es un
 * número o es menor o igual a cero, se asignará un valor por defecto de 1.
 *
 * • Método cambiarDimensiones: Este método recibe dos números y permite
 * cambiar las dimensiones del rectángulo.
 *
 * • Método calcularArea: Este método devuelve el área del rectángulo (ancho x alto).
 *
 * • Método copia: Este método devuelve un nuevo objeto que es una copia del
 * rectángulo.
 *
 * • Método comparar: Este método recibe otro rectángulo y devuelve:
 *   o "mayor" si el área del rectángulo actual es mayor.
 *   o "menor" si es menor.
 *   o "igual" si las áreas son iguales.
 *    
 * Añadir código para validar que todos los requisitos funcionan correctamente.
 */

// Fijamos las características del constructor como si fuese una función:
function Rectangulo(width, height) {

    width=parseFloat(width);
    height=parseFloat(height);
    // Definir las variables que llegan y asignarle un valor por defecto:
    this.width = (width===NaN || width<=0)? 1 : width,
    this.heigth =  (height===NaN || height<=0)? 1 : height,
    // Método para cambiar las dimensiones:
    this.cambiarDimensiones = (numA, numB) => { 
        this.width = numA; 
        this.height = numB;
    }, 
    // Para calcular el área con los datos de el mismo rectángulo:
    this.calcularArea = () => {
        return this.width*this.height;
    },
    // Función para copiar este rectángulo: 
    this.copia = () => {
        return new Rectangulo(this.width, this.height);
    }, 
    // Función para comparar rectángulo:
    this.comparar = (rectangulo) => {

        if(rectangulo.calcularArea()>this.calcularArea()) {
            return 'Mayor';
        } else if (rectangulo.calcularArea===this.calcularArea()) {
            return 'Igual';
        } else {
            return "Menor";
        }
    } 
}

let rect1 = new Rectangulo('mentira', 20);
console.log(`Rectángulo 1: ${rect1}`);

rect1.cambiarDimensiones(15.5, 2.3);
console.log(
    `Dimensiones cambiadas: ${rect1}, 
    área calculada: ${rect1.calcularArea()}`);

let rect2 = rect1.copia();
rect1.cambiarDimensiones(5, 10);

console.log(
    `El segundo rectángulo es: ${rect2}, 
    que es ${rect1.comparar(rect2)}`
);


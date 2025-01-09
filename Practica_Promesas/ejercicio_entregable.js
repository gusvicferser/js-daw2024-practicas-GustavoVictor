/**
 * Ej4: Simula el flujo de procesamiento de un pedido en una tienda en línea. 
 * Sigue estos pasos:
 *  1. Verificar disponibilidad:
 *      o Crea una función checkStock(productId, quantity) que devuelva una
 *          promesa.
 *      o Si el producto tiene suficiente stock (mínimo igual a la cantidad 
 *          solicitada), resuelve la promesa con el mensaje: "Stock disponible 
 *          para el producto {productId}".
 *      o Si no, rechaza la promesa con el mensaje: "Stock insuficiente para el
 *          producto {productId}".
 *  2. Calcular total:
 *      o Crea una función calculateTotal(productId, quantity) que devuelva una
 *          promesa.
 *      o Calcula el precio total multiplicando el precio del producto por la 
 *          cantidad.
 *      o Resuelve la promesa con el mensaje: "Total para {quantity} unidades de
 *          {productId}: ${total}".
 *  3. Confirmar pedido:
 *      o Crea una función confirmOrder(productId) que devuelva una promesa.
 *      o Después de 2 segundos, resuelve la promesa con el mensaje: "Pedido
 *          confirmado para el producto {productId}".
 *  4. Simula el flujo completo:
 *      o Usa estas funciones para simular el flujo completo de un pedido con los
 *          siguientes pasos:
 * 
 *  ▪ Verificar el stock.
 *  ▪ Calcular el total si hay stock.
 *  ▪ Confirmar el pedido si todo lo anterior fue exitoso.
*/

// Datos iniciales:
const products = {
    1: {
        name: "Laptop",
        price: 1000,
        stock: 5
    },
    2: {
        name: "Mouse",
        price: 20,
        stock: 10
    },
    3: {
        name: "Keyboard",
        price: 50,
        stock: 0
    },
};

// Verificar la cantidad de stock:
function checkStock(productId, quantity) {

    return new Promise((resolve, reject) => {
        if (products[productId].stock > quantity) {
            resolve(`Stock disponible para el producto ${products[productId].name}`);
        } else {
            reject(`Stock insuficiente para el producto ${products[productId].name}`);
        }
    })
}

// Calcular el total:
function calculateTotal(productId, quantity) {

    return new Promise((resolve, reject) => {

        let total = parseInt(products[productId].price) * quantity;
        resolve(
            `Total para ${quantity} unidades de ${products[productId].name}: ${total}`
        );
    });
}

// Confirmar pedido:
function confirmOrder(productId) {

    return new Promise((resolve, reject) => {
        setTimeout(
            resolve(
                `Pedido confirmado para el product ${products[productId].name}`
            ), 2000)
    })
}

checkStock(2, 5).then((answer) => {
    console.log(answer);
    return calculateTotal(2, 5);
}).then((answer) => {
    console.log(answer);
    return confirmOrder(2);
}).then(
    console.log
).catch(
    console.error
);
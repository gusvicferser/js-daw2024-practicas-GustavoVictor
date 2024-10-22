// Fill:

// const a = new Array(10);
// a.fill(5);
// console.log(a);

// Push y Unshift:

// const a = ['bea', 'marta'];
// a.push('sara', 'antonio'); // Añade al final del array
// console.log(a);
// a.unshift('pepe', 'alberto'); // Añade al principio
// console.log(a);

// Shift y Pop:

// a.shift(); // Elimina el primero
// console.log(a);
// a.pop(); // Elimina el último
// console.log(a);

// Join:

// console.log(a.join()); // El Join y el toString() no modifican el vector, por lo que se ponen en el console.log
// console.log(a.join(' - ')) // Si se pone algo dentro del join es lo que nos permite verlo con ese separador.

// Concat:

// let aA = ["a", "b", "c"];
// let bA = ["d", "e", "f"];
// let cA = aA.concat (bA);
// console.log (cA); // Print ["a", "b", "c", "d", "e", "f"]
// console.log (aA); // Print ["a", "b", "c"]. El array a no ha sido modificado

// Slice:

// let aB = ["a", "b", "c", "d", "e", "f"];
// let bB = aB.slice (1, 3); // (posición inicial → incluida, posición final → excluida)
// console.log (bB); // Print ["b", "c"]
// console.log (aB); // Print ["a", "b", "c", "d", "e", "f"]. El vector original no se modifica
// console.log (aB.slice (3)); // Devuelve de la posición 3 hasta el final → ["d", "e", "f"]

// Splice: Splice elimina las posiciones y deja las que se salgan del rango que le proporciones.
// Además, las posiciones eliminadas pueden ser guardadas en otro array (el b, por ejemplo).

// let a = ["a", "b", "c", "d", "e", "f"];
// let b = a.splice (1, 3); // Elimina 3 elementos desde la posición 1 ("b", "c", "d")
// console.log (a); // Print ["a", "e", "f"]
// a.splice (1,1, "g", "h"); // Elimina 1 elemento en la posición 1 ("e"), e inserta "g", "h" en esa posición
// a.splice (1,0, "i", "j"); // Empezando en la posición 1 ("e"), no borra nada e inserta "i", "j" en la primera posición.
// console.log (a); // Print ["a", "g", "h", "f"]
// a.splice (3, 0, "i"); // En la posición 3, no elimina nada, e inserta "i"
// console.log (a); // Print ["a", "g", "h", "i", "f"]
// console.log (b); // Print ["b", "c", "d"]

// Sort:

// let a = ["2", "3", "10", "20", "111"];
// a.sort (); // Ordena el vector original ALFABÉTICAMENTE
// console.log (a); // Print ["10", "111", "2", "20", "3"]

// Every y Some (devuelve un true si TODOS lo son o si uno o más lo son, respectivamente):

// Funciones flecha, hacen que el lenguaje sepa que está refiriéndose a una función:





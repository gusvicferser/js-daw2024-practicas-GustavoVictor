let vector = [1, 2, 3, 4];
// Estos tres puntos son de propagación o spread:
let [a, b, c, d] = [...vector];  

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log();

// Si son menos variables de las que hay:
[a, b, c] = [...vector];

console.log(a);
console.log(b);
console.log(c);
console.log();

// Si son más:
vector = [1, 2, 3];

[a, b, c, d] = [...vector];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log();


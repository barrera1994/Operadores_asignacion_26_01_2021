//Operadores de concatenacion
let altura = 1.80;
let edad = 27;
let nombre="andres barrera";

console.log("primera manera de concatenar (+) "+nombre+edad);
console.log("segunda manera de concatenar ('')"+""+altura+edad);
let con=(nombre.concat(altura));
console.log("tercera manera de concatenar (concat)"+con);
console.log("cuarta manera de concatenar (,)",altura,edad);
console.log("quinta manera de concatenar (`${}`)");
console.log(`${nombre} ${altura}`);

//operador de decremento 
let x = 10;
console.log(`decremento (--) ${x--} valor inicial ${x}`);

 x = 10;
console.log(`division (/) ${x/2} valor inicial ${x} `);

 x = 10;
console.log(`exponencial (**) ${x**2} valor inicial ${x} `);

 x = 10;
console.log(`incremento (++) ${x++} valor inicial ${x} `);

 x = 10;
console.log(`multiplicacion (*) ${x*2} valor inicial ${x} `);

 x = 10;
console.log(`residuo de una division (%) ${x%2} valor inicial ${x} `);

x = -10;
console.log(`unary (-) ${-x} valor inicial ${x} `);
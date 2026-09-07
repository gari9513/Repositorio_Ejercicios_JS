/* Ejercicio 1. Ficha de un estudiante 
    Identificar los tipos de datos de la información almacenada.
    - Mostrar cada variable en consola.
    - Usa typeof para mostrar cada tipo de dato.
    - Observa que tipo de dato se obtiene para cada grupo.
*/
 const nombre = "Andrea";
 let edad = 21;
 const carrera = "Informática";
 let promedio = 8.7;
 let inscrito = true;
 let grupo;

 console.log(nombre, "tipo de dato: ", typeof(nombre))
 
 console.log(edad, "tipo de dato: ", typeof(edad))

 console.log(carrera, "tipo de dato:", typeof(carrera))

 console.log(promedio, "tipo de dato:", typeof(promedio))
 
 console.log(inscrito, "tipo de dato: ", typeof(inscrito))

 console.log(grupo, "tipo de dato:", typeof(grupo))

console.log("\n")
 /* Ejercicio 2. Compra de 3 productos
 Calcula el importe de cada producto y el total general.
 - Calcula precio x cantidad para cada producto.
 - Calcula el total de cada compra.
 - Muestra el resumen con template strings
 */

 const producto1 = "Teclado";
 const precio1 = 850;
 const cantidad1= 2;

 const producto2 = "Mouse";
 const precio2 = 450;
 const cantidad2 = 1;

 const producto3 = "Monitor";
 const precio3 = 3200;
 const cantidad3 = 1;

 let calculoXproducto1 = precio1 * cantidad1
 let calculoXproducto2 = precio2 * cantidad2
 let calculoXproducto3 = precio3 * cantidad3

 const totalCompra = calculoXproducto1 + calculoXproducto2 + calculoXproducto3

console.log(`Resumen de compra:`)
console.log(`- ${producto1}, precio ${precio1} x ${cantidad1} pz = ${calculoXproducto1} `)
console.log(`- ${producto2}, precio ${precio2} x ${cantidad2} pz = ${calculoXproducto2} `)
console.log(`- ${producto3}, precio ${precio3} x ${cantidad3} pz = ${calculoXproducto3} `)
console.log(`Total de la compra: ${totalCompra}`)
console.log("\n")
/* Ejercicio 3. Comparación de valores
Compra dos valores que parecen iguales, pero tienen tipos de datos diferentes.
- Realiza ==, ===, != y !==.
- Agrega tambien < y >.
- Muestra todos los resultados en consola. 
*/

const numero1 = 50;
const numero2 = "50";

console.log(`${numero1} == '${numero2}': ${numero1 == numero2}`)

console.log(`${numero1} === '${numero2}': ${numero1 === numero2}`)

console.log(`${numero1} != '${numero2}': ${numero1 != numero2}`)

console.log(`${numero1} !== '${numero2}': ${numero1 !== numero2}`)

console.log(`${numero1} < '${numero2}': ${numero1 < numero2}`)

console.log(`${numero1} > '${numero2}': ${numero1 > numero2}`)

console.log("\n")

/* Ejercicio 4. Acceso básico a una plataforma 
Construye expresiones que representen diferentes reglas de acceso.
- Comprueba si es mayor de edad.
- Combina edad, cuentaActiva y correoVerificado con &&.
- Crea otra expresion usando ||.
- Utiliza ! al menos una vez.
- No uses if en este ejercicio.
*/

const edad1 = 22;
const cuentaActiva = true;
const correoVerificado = true;
const tieneSuscripcion = false;

console.log(`¿El usuario es mayor de edad?: ${edad > 18}`);

console.log(`¿Su cuenta esta en orden?: ${cuentaActiva && correoVerificado && !tieneSuscripcion}`)

console.log(`¿Puede utilizar su cuenta?: ${cuentaActiva || tieneSuscripcion}`)

console.log("\n");

/* Ejercicio 5. Operaciones aritmèticas.
Realiza diferentes operaciones con dos nùmeros.
- Calcula suma, resta, multiplicacion, division, residuo y potencia.
- Guarda cada resultado en una variable y muestralos en consola.
*/

let suma = 0;
let resta = 0;
let mult = 0;
let div = 0;
let rest = 0;
let pot = 0;

const a = 25;
const b = 6;

suma = a + b;
resta = a - b;
mult = a * b;
div = a / b;
rest = a % b;
pot = a ** b;

console.log(`Resultado de suma: ${suma}`);
console.log(`Resultado de resta: ${resta}`);
console.log(`Resultado de multiplicar: ${mult}`);
console.log(`Resultado de dividir: ${div}`);
console.log(`Resultado de residuo: ${rest}`);
console.log(`Resultado de potencia: ${pot}`);





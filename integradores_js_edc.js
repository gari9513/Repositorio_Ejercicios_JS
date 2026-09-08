/* Ejercicio 21. Sistema de venta
Determina si una compra se puede realizar y calcula el precio final.
- La compra solo procede si disponible es true y stock >= cantidad.
• Si subtotal >= 2000 aplica 10% de descuento.
• Usa operadores aritméticos, lógicos, relacionales y condicionales.
• Muestra un resumen con template strings.
*/
const producto = {
 nombre: "Teclado mecánico",
 precio: 1200,
 cantidad: 2,
 stock: 5,
 disponible: true
};

let subtotal = producto.precio * producto.cantidad;
let descuento = 0;
let total = 0;

if (producto.disponible === true && producto.stock>0){
    if (subtotal >= 2000){
        descuento = subtotal * .10;
        total = subtotal - descuento;
        console.log(`Total de compra: $${total}`);
    } else {
        console.log(`No tienes descuentos, el total de tu compra es: $${subtotal}`);
    };
} else {
    console.log("El producto no esta disponible");
};
console.log("\n");


/* Ejercicio 22. Perfil y acceso de estudiante
Evalúa el acceso y rendimiento de un estudiante
- Puede acceder si está inscrito y su correo está verificado.
• Clasifica el promedio: Excelente (9-10), Bueno (8-8.9), Suficiente (6-7.9) o Insuficiente
(<6).
• Usa objetos, &&, if/else if/else y template strings.
*/
const estudiante = {
 nombre: "Mariana",
 edad: 19,
 promedio: 8.8,
 inscrito: true,
 correoVerificado: true
};

if (estudiante.inscrito && estudiante.correoVerificado){
    if (estudiante.promedio >= 9){
        console.log("Excelente");
    } else if (estudiante.promedio >= 8){
        console.log("Bueno.");
    } else if (estudiante.promedio >= 6){
        console.log("Suficiente");
    } else {
        console.log("Insuficiente.");
    };
} else {
    console.log("El estudiante no esta inscrito.");
};
console.log("\n");


/* Ejercicio 23. Tienda en línea
Calcula una compra con tres productos diferentes.
- Calcula el importe de cada producto.
• Usa condicionales para indicar disponibilidad.
• Calcula el total general.
• Usa un ternario para indicar «Envío gratis» si el total supera $1500; de lo contrario «Envío
con costo».
• No uses arreglos ni bucles.
*/
const producto1 = {
 nombre: "Mouse",
 precio: 450,
 cantidad: 2,
 disponible: true
};

const producto2 = {
 nombre: "Teclado",
 precio: 900,
 cantidad: 1,
 disponible: true
};

const producto3 = {
 nombre: "Webcam",
 precio: 650,
 cantidad: 1,
 disponible: false
};

let import1 = 0;
let import2 = 0;
let import3 = 0;
let totalCompra = 0;

import1 = producto1.cantidad * producto1.precio;
import2 = producto2.cantidad * producto2.precio;
import3 = producto3.cantidad * producto3.precio;

if (producto1.cantidad > 0 && producto.disponible){
    if (producto2.cantidad > 0 && producto2.disponible){
        if (producto3.cantidad > 0 && producto3.disponible){
            totalCompra = import1 + import2 + import3;
        };
    };
} else {
    console.log("Productos no disponibles.");
};

console.log("\n");


/* Ejercicio 24. Cotización de computadora
Combina objetos y calcula el precio final con descuento.
- Crea un nuevo objeto cotizacion utilizando spread.
• Calcula el subtotal de computadora y accesorios.
• Más de $20000: 10% de descuento; más de $15000: 5%; en otro caso 0%.
• Usa if/else if/else y template strings.
*/
const computadora = {
 marca: "ASUS",
 modelo: "Vivobook",
 precio: 16800
};

const accesorios = {
 mouse: 450,
 mochila: 850,
 baseEnfriadora: 700
};

const product = {
    ...computadora,
    ...accesorios
};

let subt = product.precio + product.mouse + product.mochila + product.baseEnfriadora;
let desc = 0;
let totalC = 0;

if (subt >= 20000){
    desc = subt * .10;
    totalC = subt - desc;
    console.log(`La compra total de su compra con el descuento dado es de $${totalC}`);
} else if (subt >= 15000) {
    desc = subt * .05;
    totalC = subt - desc;
    console.log(`El total de su compra con el descuento es de $${totalC}`);
} else {
    console.log(`No obtiene ningun descuento, el total de su compra es de $${subt}`);
};

console.log("\n");


/* Ejercicio 25. Registro de una cuenta
Valida los datos necesarios para registrar una cuenta.
- nombre debe tener al menos 3 caracteres.
• password debe tener al menos 8 caracteres.
• edad debe ser >= 18.
• aceptaTerminos debe ser true.
• Combina .length, operadores relacionales, && y un condicional.
• Muestra qué ocurre con el registro.
*/
const usuario = {
 nombre: "Carlos",
 correo: "carlos@email.com",
 password: "Java1234",
 edad: 21,
 aceptaTerminos: true
};

const long1 = 3;
const long2 = 8;

console.log("Registro de cuenta:");

if (usuario.nombre.length >= long1 && usuario.password.length >= long2 && usuario.edad >= 18 && usuario.aceptaTerminos){
    console.log("La cuenta se registro con exito.");
} else {
    console.log("La cuenta no puede ser registrada porque no cumple con los requisitos.");
};
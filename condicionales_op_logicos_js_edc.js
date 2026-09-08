/* Ejercicio 12. Mayor o menor de edad.
Determina si una persona es mayor de edad.
- Usa if y else.
- 18 o mas debe mostrar <<Mayor de edad>> */
const edad = 17;

if (edad >= 18){
    console.log("<<Mayor de edad>>")
} else {
    console.log("<<Menor de edad>>")
};

console.log("\n");


/* Ejercicio 13. Clasificación de calificación
Clasifica una calificación utilizando varias condiciones.
- 9 a 10: Excelente.
• 8 a menos de 9: Muy bien.
• 6 a menos de 8: Aprobado.
• Menor de 6: No aprobado.
• Usa if, else if y else.
 */
const calificacion = 8.6;

if (calificacion >= 9) {
    console.log("Excelente.");
} else if (calificacion >= 8) {
    console.log("Muy bien.");
} else if (calificacion >= 6) {
    console.log("Aprobado.");
}  else {
    console.log("No aprobado");
};

console.log("\n");



/* Ejercicio 14. Descuento de una compra
Calcula el descuento correspondiente al monto de una compra
- $3000 o más: 15%.
• $1500 a $2999.99: 10%.
• Menos de $1500: sin descuento.
• Calcula totalFinal.
*/
const totalCompra = 2750;
let descuento = 0;
let totalFinal = 0;

if (totalCompra >= 3000){
    console.log("Tienes un descuento del 15%, el total de tu compra es:");
    descuento = totalCompra * .15;
    totalFinal = totalCompra - descuento;
    console.log(`El total de su compra es: ${totalCompra}`);
} else if (totalCompra >= 1500 && totalCompra <= 2999.99) {
    console.log("Tienes un descuento del 10%")
    descuento = totalCompra * .10;
    totalFinal = totalCompra - descuento;
    console.log(`El total de su compra es: ${totalFinal}`);
} else {
    console.log("Sin descuento.");
};

console.log("\n");


/* Ejercicio 15. Inicio de sesión
Determina si un usuario puede acceder a una plataforma.
- Las tres condiciones deben ser true.
• Usa && dentro de un if.
• Muestra un mensaje de acceso permitido o denegado.
*/
const usuarioCorrecto = true;
const passwordCorrecto = true;
const cuentaActiva = true;

if (usuarioCorrecto === true && passwordCorrecto === true){
    console.log("Puedes acceder a la plataforma.")
} else if (passwordCorrecto === true && cuentaActiva === true) {
    console.log("Tienes acceso a la plataforma")
} else if (usuarioCorrecto === true && cuentaActiva ===true) {
    console.log("Tienes acceso a la plataforma.")
} else {
    console.log("Acceso denegado")
}

console.log("\n");

/* Ejercicio 16. Entrada a un evento
Una persona puede entrar si es mayor de edad y además tiene boleto o invitación.
- Combina && y ||.
• Utiliza paréntesis para agrupar correctamente las condiciones.
• Usa if y else.
*/
const edad2 = 20;
const tieneBoleto = false;
const tieneInvitacion = true;

if (edad >= 18 && tieneBoleto || tieneInvitacion) {
    console.log("Puedes entrar al evento");
} else {
    console.log("No puedes entrar al evento.");
}
console.log("\n");


/* Ejercicio 17. Validación de cuenta
Evalúa varias condiciones de una cuenta de usuario.
- El usuario debe ser mayor de edad.
• La cuenta NO debe estar bloqueada.
• El correo debe estar verificado.
• Usa ! y && dentro de una condición.
*/

const edad3 = 25;
const cuentaBloqueada = false;
const correoVerificado = true;

if (edad3 >= 18 && !cuentaBloqueada && correoVerificado){
    console.log("Tienes la cuenta validada.");
} else {
    console.log("Cuenta invalida.");
};
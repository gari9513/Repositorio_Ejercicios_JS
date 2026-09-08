/* Ejercicio 18. Estado de inventario
Obtén el estado de un producto sin usar if. 
- Si stock > 0, el resultado debe ser «Disponible».
• En caso contrario, «Agotado».
• Usa operador ternario.
*/
const stock = 8;

console.log(stock>0 ? "Disponible" : "No disponible.");
console.log("\n");

/* Ejercicio 19. Aprobado o no aprobado
Determina el resultado académico con una sola expresión.
- 6 o más: Aprobado.
• Menos de 6: No aprobado.
• Usa un operador ternario.
*/
const calificacion = 7.4;

console.log(calificacion>=6 ? "Aprobado" : "No aprobado");
console.log("\n");

/* Ejercicio 20. Costo de envío
Calcula si una compra tiene envío gratis.
- Si totalCompra >= 1000, el envío cuesta 0.
• En caso contrario cuesta 99.
• Resuelve la selección con ternario.
• Calcula el total incluyendo envío.
*/
const totalCompra = 1350;
const costoEnvioNormal = 99;

console.log(totalCompra>=1000 ? `Su envio es gratis, por lo que el total de su compra es $${totalCompra}` : `El total de su compra con el envio incluido es de: $${totalCompra + costoEnvioNormal}`);
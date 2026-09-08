/* Ejercicio 6. Manipulación de un string.
Obten diferentes resultados a partir de una cadena de texto.

- Obten longitud
- Convierte a Mayusculas y minusculas.
- Reemplaza JS por Pyhton
- Extrae la palabra JS sin modificar el string original.
*/
const curso = "Curso de JavaScript Moderno";

console.log(curso.toUpperCase());
console.log(curso.toLowerCase());
console.log(curso.substring(9, 19));
console.log("\n");


/* Ejercicio 7. Nombre completo.
Construye un nombre completo mediante concatenacion y template strings.

- Crea una version usando +
- Crea otra usando template strings
- Muestra ambas
*/
const nombre1 = "Gabriel";
const apellidoPaterno = "García";
const apellidoMaterno = "Márquez";

let nombreCompleto1 = nombre1 + " " + apellidoPaterno + " " + apellidoMaterno;
let nombreCompleto2 = `${nombre1} ${apellidoPaterno} ${apellidoMaterno}`;

console.log(nombreCompleto1);
console.log(nombreCompleto2);
console.log("\n");

/* Ejercicio 8. Objeto producto.
Modifica y consulta las propiedades de un objeto.

- Muestra nombre y precio.
- Cambia el precio a 3200.
- Agrega stock con valor de 15.
- Elimina categoria.
- Muestra el objeto final.
*/
const producto = {
    nombre : "Monitor",
    marca : "Samsung",
    precio : 3500,
    disponible : true,
    categoria : "Tecnología" 
};

console.log(producto.nombre, producto.precio);
producto.precio = 3200;
producto.stock = 15;
delete producto.categoria;
console.log(producto);
console.log("\n");


/* Ejercicio 9. Objeto anidado.
Accede a la informacion almacenada dentro de un objeto interno.

- Muestra procesador y RAM
- Crea un mensaje con marca, modelo y almacenamiento usando template strings.
*/
const computadora = {
    marca : "Levono",
    modelo : "ThinkPad",
    precio : 18500,
    hardware : {
        procesador : "Intel Core i7",
        ram : "16 GB",
        almacenamiento : "512 GB SSD"
    }
};

console.log(computadora.hardware.procesador, computadora.hardware.ram);
console.log(`La computadora ${computadora.marca} ${computadora.modelo} tiene un almacenamiento de ${computadora.almacenamiento}.`)
console.log("\n");

/* Ejercicios 10. Desestructuracion.
Extrae las propiedades de un objeto  hacia variables independientes.

- DEsestructura nombre, carrera y promedio.
- Muestra tres variables
*/
const estudiante = {
    nombre : "Laura",
    edad : 22,
    carrera : "Informática",
    promedio : 9.2,
    semestre : 6
};

const {nombre, carrera, promedio} = estudiante;

console.log(nombre, carrera, promedio);
console.log("\n");


/* Ejercicio 11. Spread operator
Caombina la informacion de dos objetos.

- Crea un nuevo objeto laptop usando...
- Agrega disponible: true al nuevo objeto.
- Muestra los tres objetos
*/
const producto2 = {
    nombre : "Laptop",
    precio : 15000
};

const especificaciones = {
    ram : "16 GB",
    almacenamiento : "512 GB",
    color : "Negro"
};

const nuevoObjeto = {
    ...producto2, 
    ...especificaciones,
    disponible : true,
};

console.log(nuevoObjeto);

//condicionales
//pedir nombre de persona
let nombre = prompt("Ingresa tu Nombre");

let edad = prompt("Ingresa tu edad");

//mostramos el nombre de la persona 
//alert("Tu nombre es " + nombre + " y tu edad es " + edad);

//condicional para mostrar un mensajes
//que pasa si no tiene el igual
//que pasa si no ingresan datos (programacion defensiva--validaciones)
if (edad >= 18) {
    alert("bienvenidos a pa pagina de peliculas violentas");
} else {
    alert("bebe ser mayor de edad para ver nuestras peliculas violentas");
}


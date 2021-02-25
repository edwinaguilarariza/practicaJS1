//ejercicio de la semana
//creamos variable para almacenar  el dia a la semana
let dia = prompt("ingresa un dia de la semena");
//convertir lo que escriba el usuario en minusculas
dia = dia.toLowerCase();
//validamos el dia si es entre semana o fin de semana
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "miércoles" || dia == "jueves" || dia == "viernes" ) {  // ==comparar
    alert("es un dia entre semana");
} else { 
    if (dia == "sabado" || dia == "sábado" || dia == "domingo" ) {
        alert("es un fin de semana");
    } else {
        alert("porfavor ingresar un dia a la semana");
    }
}

    






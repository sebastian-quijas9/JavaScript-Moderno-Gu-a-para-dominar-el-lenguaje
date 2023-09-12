

//----------------------------------  ALERT ALERTAS EN PANTALLA ---------------------------------
alert ("Holaaaa");

//----------------------------------  PROMPT     DARLE A ESCRIBIR AL USUARIO----------------------------------

let nombre = prompt("Cual es tu nombre?");
if(nombre == null){
    nombre = "Se cambia ";
}
console.log(nombre);


//----------------------------------  CONFIR     SIRVE PARA CONFIRMAR----------------------------------
let select = confirm("Estas seguro de borrar esto?");

if(select == false){
    select = "Se elimino"
}else {
    select = "Se acepto"
}


console.log(select);



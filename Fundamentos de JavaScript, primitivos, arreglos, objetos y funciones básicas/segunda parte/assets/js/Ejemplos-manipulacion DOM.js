
// Manipulacion del Dom--Se cambia el titulo por Sebastian//
document.querySelector(".titulo").innerText = "Sebastian"

// ------------------Crear un boton dentro de un div-------
const divBotones = document.querySelector('#divBotones');
const botonNuevo = document.createElement("button");
// ------------------Pone el boton-------
divBotones.append(botonNuevo)
// ------------------Se le agrega El texto al boton-------
botonNuevo.innerText = 'destruccion'
// ------------------Se le agrega estilos al boton-------
botonNuevo.classList.add("btn")
botonNuevo.classList.add("btn-success")



// ------------------Se le pone el placehoSe almacena el input en una variable para utilizarla-------

const input = document.createElement("input");
// ------------------Se crea el input-------
document.body.append(input)
// ------------------Se le agrega la clase a el placeholder-------

input.classList.add("form-control");
// ------------------Se le pone el placeholder a el input-------
input.placeholder = "hola mundo"

// Dias de semana abrimos a las 11


const dia = 1; //Domingo
const horaActual = 10;


let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
// if ( [0, 6].includes(dia))  {
//     console.log("Fin de semana");
//     horaApertura = 9;
// } else {
//     console.log("Dia apertura");
//     horaApertura = 11;
// }


horaApertura = ( [0, 6].includes(dia)) ? 9 : 11;


// if (horaActual >= horaApertura) {
//     mensaje = "Esta abierto";
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las  ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura ? "esta abierto" : `Esta cerrado, hoy abrimos a las  ${horaApertura}`);


console.log({ horaApertura, mensaje });
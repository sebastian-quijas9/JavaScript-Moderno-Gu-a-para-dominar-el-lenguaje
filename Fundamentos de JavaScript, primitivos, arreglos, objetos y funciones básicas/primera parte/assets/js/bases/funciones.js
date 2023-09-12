function saludar(nombre) {
  console.log("Hola " + nombre);
  return 1;
}

//Funciones anonimas
const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};
//Funciones de flechaa
const saludarFlecha = () => {
  console.log("Hola flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};



//Es igual que la funcion de saludarFlecha2 nada mas que esta tiene parentesis
const saludarFlecha3 = (nombre) => {
  console.log("Hola " + nombre);
};

saludar("sebastian");
saludar2("Jose");
saludarFlecha();
saludarFlecha2("Meli");
saludarFlecha3("Hola");



function sumar(a,b){
    return a + b;
}

//Function flecha
// const  sumar2 = (a,b) => {
//     return a + b;
// }


const  sumar2 = (a,b) => a + b;
console.log(sumar2(1,5));

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random ();


console.log(getAleatorio());
console.log(getAleatorio2());

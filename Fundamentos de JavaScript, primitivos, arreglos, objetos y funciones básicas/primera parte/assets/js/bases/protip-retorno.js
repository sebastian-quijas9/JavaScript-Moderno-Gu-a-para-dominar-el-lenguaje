

// function crearPersona(nombre , apellido){
//     return{nombre, apellido}
// }


const crearPersona = (nombre , apellido) => ({nombre, apellido})





const persona = crearPersona( "Sebastian", "Quijas");


console.log(persona);




function imprimeArgumentos(){
    console.log(arguments);
}


const imprimeArgumentos2 = ( edad, ...arguments) =>{
    // console.log(arguments);
    return arguments;
}


imprimeArgumentos(10,true,false,"sebastian","hola");
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true,false,"sebastian","hola");
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona( "Sebastian", "Quijas");
console.log({nuevoApellido});


const tony = {
    nombre: "Sebastian",
    codeName: "IronMan",
    vivo: true,
    edad: 40,
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
  };

//   const imprimePropiedades = (personaje) =>{
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
//   }



const imprimePropiedades = ({nombre, codeName,vivo ,edad =0, trajes}) =>{
    
    
    
    console.log(nombre);
       console.log(codeName);
       console.log(vivo);
       console.log(edad);
       console.log(trajes);
      }


  imprimePropiedades(tony);
const personaje = {
  nombre: "Sebastian",
  codeName: "IronMan",
  vivo: true,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "2453, 23545",
    ubicacion: "Ciclades 2453"
  }
};

console.log(personaje);
console.log("nombre: ", personaje.nombre);
console.log("codeName: ", personaje.codeName);
if(personaje.vivo == true){
    personaje.vivo = "Vivo";
}else{
    personaje.vivo = "Muerto";
}
console.log("vivo: ", personaje.vivo);
console.log("Coordenadas: ", personaje.coords);
console.log("Latitude: ", personaje.coords.lat);
console.log("Longitud: ", personaje.coords["lng"]);
console.log("Trajes:", personaje.trajes);
console.log("Num. Trajes:", personaje.trajes.length);
console.log(personaje["trajes"][0]);
console.log(personaje["trajes"][1]);
console.log(personaje.trajes[2]);
console.log( personaje.direccion["zip"]);
console.log( personaje.direccion.ubicacion);



//MAS DETALLES

//Eliminar valor de un json
delete personaje.edad;
console.log(personaje);



personaje.casado = true;



const entriesPares = Object.entries (personaje);
console.log(entriesPares);


//Las propiedades del json
const propiedades = Object.getOwnPropertyNames(personaje);

//los valores del json
const valores = Object.values(personaje)
console.log({propiedades});
console.log({valores});
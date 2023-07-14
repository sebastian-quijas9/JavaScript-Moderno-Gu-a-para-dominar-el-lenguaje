
let juegos = ["zelda", "Mario", "Metroid", "Chrono"];

// console.log("Largo: ", juegos.length);



let primero = juegos[0];
let ultimo = juegos[juegos.length -1];

// console.log({primero, ultimo});


juegos.forEach( (elemento, indice, array)=> {
    console.log({elemento, indice, array});
});



//Insertar nuevo elemento el push al final del array
let nueva = juegos.push("D-Zero");
console.log({nueva, juegos});

//Insertar nuevo elemento el unshift al principio del array
nueva = juegos.unshift("Fire Emblem");
console.log({nueva, juegos});

//borrar elemento del array
let juegoBorrado =  juegos.pop();
console.log({juegoBorrado, juegos});


console.log(juegos);

//Elimina dos elementos del arraya con el splice (pos, 2 )
//pos es 1 y el 2 signiifica que despues del array 1 se eliminen 2 
let pos = 1;
let juegosBorrados =juegos.splice( pos, 2);
console.log({juegosBorrados, juegos});


//Busqueda del elemento del array exacto, para saber la ubicacion
let metroidIndex = juegos.indexOf("Metroid");
console.log({metroidIndex});

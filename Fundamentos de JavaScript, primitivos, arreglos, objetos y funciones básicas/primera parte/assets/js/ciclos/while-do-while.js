const carros = ['ford', 'mazda', 'honda', 'toyota'];

let i = 0;

// while( i < carros.length){
//     console.log( carros[i]) ;
//     i++;
// }

console.warn("While");

while( carros[i]){
    if(i === 1 ){
        i++
        break;
    }
    console.log( carros[i]) ;
    i++;
}


console.warn("Do While");

let j = 0;

do {
    console.log(carros[j]);
    j++
} while ( carros[j]);
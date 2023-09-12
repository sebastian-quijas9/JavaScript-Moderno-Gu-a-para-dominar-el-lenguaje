

const regresaTrue = () =>{
    console.log("regresa true");
    return true;
}




const regresaFalse = () =>{
    console.log("regresa false");
    return false;
}



console.warn("Not o la negacion")

console.log(true);
console.log(!true);
console.log( !regresaFalse() );

console.warn("and"); //True si todos los valores son verdaderos


console.log( true && true);
console.log( true && !false);



console.log("==============");

console.log( regresaFalse() && regresaTrue() );
console.log(  regresaTrue() && regresaFalse()  );


console.warn("OR");
console.log(true || false);


console.log("Assignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = true && "Hola mundo" && 150;


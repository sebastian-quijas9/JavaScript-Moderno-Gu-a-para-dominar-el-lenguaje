
const prueba = [
    'es una prueba 1',
    'es una prueba 2',
    'es una prueba 3',
    'es una prueba 4',
]


console.warn("For tradicional");


for (let i = 0; i < prueba.length; i++) {
    console.log(prueba[i]);

}



console.warn("For in");

for (let e in prueba) {
    console.log(prueba[e]);
}



//mas facil de utilizar
console.warn("For of");
for (let f of prueba){
    console.log(f);
}

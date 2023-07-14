// const arr = new Array(10);

// const arr = [];

// console.log(arr);

let videoJuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log(videoJuegos);

let mario = videoJuegos[0];
let mega = videoJuegos[1];
let chro = videoJuegos[2];
console.log(mario);
console.log(mega);
console.log(chro);

let arregloCosas = [
    true,
    123,
    'Sebastian',
    1+10,
    function(){},
    ()=>{},
    {a:1},
    ["x", "Megaman", "Zero", "Dr. Light", [
        "Dr. Willy",
        "Woodman"
    ]]
];


console.log(arregloCosas);

//Se obtiene el array dentro de otro Array
console.log(arregloCosas[7][3]);


//Se obtiene el array dentro de otro Array dentro de otro array
console.log(arregloCosas[7][4][1]);

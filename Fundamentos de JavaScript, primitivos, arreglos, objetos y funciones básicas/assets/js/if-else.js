let a = 5;

if (a < 10) {
  console.log();
}

const hoy = new Date();
let dia = hoy.getDay();
console.log(dia);

dia = 2; //0: domingo, 1:lunes......

const diasLetras = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
};

const diasLetras2 = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

console.log(diasLetras2[dia] || "no hay dia");

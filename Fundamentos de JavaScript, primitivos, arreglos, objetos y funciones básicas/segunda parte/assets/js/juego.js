// 2C = two of Clubs (Treboles)
// 2D = two of Diamonds (Diamantes)
// 2C = two of Hearts (Corazones)
// 2C = two of Spades (Espadas)

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias del HTML

const btnPedir = document.querySelector("#btnPedir");
const puntosHTML = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");


//Esta funcion permite barajear las cartas y con el .shuffle las barajea
const crearDeck = () => {
  for (let i = 2; i < 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  //   console.log(deck);

  deck = _.shuffle(deck);
  console.warn("Cata barajeada");
  console.log(deck);
  return deck;
};

crearDeck();

//Esta funcion me permite tomar una carta

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  const carta = deck.pop();
  // console.log(deck);
  // console.log(carta); //carta debe de ser de la baraja

  return carta;
};

// pedirCarta();

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;

  //   let puntos = 0;

  //   if (isNaN(valor)) {
  //     puntos = valor === "A" ? 11 : 10;
  //   } else {
  //     puntos = valor * 1;
  //   }
  //   console.log(puntos);
};

const valor = valorCarta(pedirCarta());

console.log({ valor });

//Eventos
//Se llama Callback
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  console.log(puntosJugador)
  puntosHTML[0].innerText = puntosJugador;

  //  <img class="carta" src="assets/cartas/2C.png" alt=""> 

  const imgCarta = document.createElement("img");
  imgCarta.classList.add("carta");
  imgCarta.src = `assets/cartas/${carta}.png`
  divCartasJugador.append(imgCarta);


  if(puntosJugador>21){
    btnPedir.classList.add("disabled");
  }else if(puntosJugador === 21){
    console.log("ganaste");
  }


});

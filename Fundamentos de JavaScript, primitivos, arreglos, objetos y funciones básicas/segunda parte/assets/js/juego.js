
//esta funcion inicial es para que no sea tan vulnerable

(() => {
  "use strict"; //investigar para que sirve

  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];

  let puntosJugador = 0;
  let puntosComputadora = 0;

  //Referencias del HTML

  const btnPedir = document.querySelector("#btnPedir");

  const btnDetener = document.querySelector("#btnDetener");
  const btnNuevo = document.querySelector("#btnNuevo");

  const puntosHTML = document.querySelectorAll("small");
  const divCartasJugador = document.querySelector("#jugador-cartas");
  const divCartasComputadora = document.querySelector("#computadora-cartas");

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

  //Turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();
      puntosComputadora = puntosComputadora + valorCarta(carta);
      console.log(puntosComputadora);
      puntosHTML[1].innerText = puntosComputadora;

      //  <img class="carta" src="assets/cartas/2C.png" alt="">

      const imgCarta = document.createElement("img");
      imgCarta.classList.add("carta");
      imgCarta.src = `assets/cartas/${carta}.png`;
      divCartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("nadie gana ");
      } else if (puntosMinimos > 21) {
        alert("computadora gana");
      } else if (puntosComputadora > 21) {
        alert("jugador gana");
      } else {
        alert("Computadora gana");
      }
    }, 10);
  };

  const valor = valorCarta(pedirCarta());

  console.log({ valor });

  //Eventos
  //Se llama Callback
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    console.log(puntosJugador);
    puntosHTML[0].innerText = puntosJugador;

    //  <img class="carta" src="assets/cartas/2C.png" alt="">

    const imgCarta = document.createElement("img");
    imgCarta.classList.add("carta");
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.log("ganaste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
    }
  });

  //Todo: borrar

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
  });

  btnNuevo.addEventListener("click", () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  });
})();

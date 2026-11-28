
/*
====================================================================
CONFIGURACIÓN READMIND — ARCHIVOS .MIND Y PERSONAJES
====================================================================
Un solo archivo targets.mind contiene los 74 objetivos de
Colores Mitológicos: 37 en español y 37 en inglés.

El usuario solamente selecciona el libro, no el idioma.
====================================================================
*/

/* 0. LIBROS DISPONIBLES */
window.READMIND_BOOKS = [
  {
    id: "egipto",
    name: "Colores Mitológicos",
    file: "targets.mind",
    image: "./assets/web/book1.png"
  },
  {
    id: "dinosaurios",
    name: "Colores Prehistóricos",
    file: "targets2.mind",
    image: "./assets/web/book2.png"
  },
  {
    id: "robots",
    name: "Colores Robóticos",
    file: "targets3.mind",
    image: "./assets/web/book3.png"
  }
];

/* 1. ARCHIVOS .MIND */
window.READMIND_FILES = [
  "targets.mind",
  "targets2.mind",
  "targets3.mind"
];

/* 2. TIEMPO DE BÚSQUEDA */
window.READMIND_SCAN_SECONDS = 8;

/* 3. PERSONAJES Y OBJETIVOS */

const personajesES = [
  "ESFINGE",
  "ANUBIS",
  "MANTICORA",
  "CERBERO",
  "FÉNIX",
  "MEDUSA",
  "HIDRA",
  "MINOTAURO",
  "QUIMERA",
  "CÍCLOPE",
  "DRAGÓN",
  "HOMBRE LOBO",
  "VAMPIRO",
  "GÁRGOLA",
  "FAUNO",
  "JÖRMUNGARDR",
  "KRAKEN",
  "DULLAHAN",
  "BANSHEE",
  "SELKIE",
  "TIAMAT",
  "WENDIGO",
  "YETI",
  "KITSUNE",
  "KAPPA",
  "ONI",
  "CHUPACABRAS",
  "GARUDA",
  "BASILISCO",
  "ALICORNO"
];

const personajesEN = [
  "SPHINX",
  "ANUBIS",
  "MANTICORE",
  "CERBERUS",
  "PHOENIX",
  "MEDUSA",
  "HYDRA",
  "MINOTAUR",
  "CHIMERA",
  "CYCLOPS",
  "DRAGON",
  "WEREWOLF",
  "VAMPIRE",
  "GARGOYLE",
  "FAUN",
  "JÖRMUNGARDR",
  "KRAKEN",
  "DULLAHAN",
  "BANSHEE",
  "SELKI",
  "TIAMAT",
  "WENDIGO",
  "YETI",
  "KITSUNE",
  "KAPPA",
  "ONI",
  "CHUPACABRA",
  "GARUDA",
  "BASILISK",
  "ALICORN"
];

const especialesES = [
  "SECRETO",
  "MAPA MITOLÓGICO",
  "¿SABÍAS ESTO?",
  "TICTAC",
  "EL VIAJE MITOLÓGICO",
  "DICCIONARIO",
  "MUSICA"
];

const especialesEN = [
  "SECRET",
  "MYTHOLOGICAL MAP",
  "DID YOU KNOW THIS?",
  "TICTAC",
  "THE MYTHOLOGICAL JOURNEY",
  "DICTIONARY",
  "MUSIC"
];

const descripcionesES = [
  "¡Lo encontramos! Descubrí el secreto final.",
  "¡Lo encontramos! Viajemos juntos por el mundo.",
  "¡Lo encontramos! Descubrí más de sus historias.",
  "¡Lo encontramos! Cronómetro Mitológico.",
  "¡Lo encontramos! Viajemos jugando.",
  "¡Lo encontramos! Descubrí significados de palabras.",
  "¡Lo encontramos! Bailá con nosotros."
];

const descripcionesEN = [
  "We found it! Discover the final secret.",
  "We found it! Let’s travel the world together.",
  "We found it! Discover more of their stories.",
  "We found it! Mythological Chronometer.",
  "We found it! Let’s travel while we play.",
  "We found it! Discover the meanings of words.",
  "We found it! Dance with us."
];

const urlContenido =
  "https://readmindbk.github.io/Mythological_Colors_Synopsis";

const objetivos = [];

/* 30 PERSONAJES EN ESPAÑOL: ÍNDICES 0 AL 29 */
personajesES.forEach((nombre, i) => {
  const objetivo = {
    file: "targets.mind",
    index: i,
    name: nombre,
    book: "Colores Mitológicos",
    description:
      "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: `./assets/mito/${i + 1}.jpg`,
    url: urlContenido
  };

 /* DATOS DE AUDIO XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
  if (i === 0) {
    objetivo.cover = "./assets/mito_book/CM_portada1.png";
    objetivo.audio = "./assets/mito_book/CM_audio1.mp3";
    objetivo.page = "./assets/mito_book/CM1.html";
  }

  if (i === 1) {
    objetivo.cover = "./assets/mito_book/CM_portada2.png";
    objetivo.audio = "./assets/mito_book/CM_audio2.mp3";
    objetivo.page = "./assets/mito_book/CM2.html";
  }
  if (i === 2) {
    objetivo.cover = "./assets/mito_book/CM_portada3.png";
    objetivo.audio = "./assets/mito_book/CM_audio3.mp3";
    objetivo.page = "./assets/mito_book/CM3.html";
  }

  if (i === 3) {
    objetivo.cover = "./assets/mito_book/CM_portada4.png";
    objetivo.audio = "./assets/mito_book/CM_audio4.mp3";
    objetivo.page = "./assets/mito_book/CM4.html";
  }
  if (i === 4) {
    objetivo.cover = "./assets/mito_book/CM_portada5.png";
    objetivo.audio = "./assets/mito_book/CM_audio5.mp3";
    objetivo.page = "./assets/mito_book/CM5.html";
  }

  if (i === 5) {
    objetivo.cover = "./assets/mito_book/CM_portada6.png";
    objetivo.audio = "./assets/mito_book/CM_audio6.mp3";
    objetivo.page = "./assets/mito_book/CM6.html";
  }
  if (i === 6) {
    objetivo.cover = "./assets/mito_book/CM_portada7.png";
    objetivo.audio = "./assets/mito_book/CM_audio7.mp3";
    objetivo.page = "./assets/mito_book/CM7.html";
  }

  if (i === 7) {
    objetivo.cover = "./assets/mito_book/CM_portada8.png";
    objetivo.audio = "./assets/mito_book/CM_audio8.mp3";
    objetivo.page = "./assets/mito_book/CM8.html";
  }
  if (i === 8) {
    objetivo.cover = "./assets/mito_book/CM_portada9.png";
    objetivo.audio = "./assets/mito_book/CM_audio9.mp3";
    objetivo.page = "./assets/mito_book/CM9.html";
  }

  if (i === 9) {
    objetivo.cover = "./assets/mito_book/CM_portada10.png";
    objetivo.audio = "./assets/mito_book/CM_audio10.mp3";
    objetivo.page = "./assets/mito_book/CM10.html";
  }
  if (i === 10) {
    objetivo.cover = "./assets/mito_book/CM_portada11.png";
    objetivo.audio = "./assets/mito_book/CM_audio11.mp3";
    objetivo.page = "./assets/mito_book/CM11.html";
  }

  if (i === 11) {
    objetivo.cover = "./assets/mito_book/CM_portada12.png";
    objetivo.audio = "./assets/mito_book/CM_audio12.mp3";
    objetivo.page = "./assets/mito_book/CM12.html";
  }
  if (i === 12) {
    objetivo.cover = "./assets/mito_book/CM_portada13.png";
    objetivo.audio = "./assets/mito_book/CM_audio13.mp3";
    objetivo.page = "./assets/mito_book/CM13.html";
  }

  if (i === 13) {
    objetivo.cover = "./assets/mito_book/CM_portada14.png";
    objetivo.audio = "./assets/mito_book/CM_audio14.mp3";
    objetivo.page = "./assets/mito_book/CM14.html";
  }
  if (i === 14) {
    objetivo.cover = "./assets/mito_book/CM_portada15.png";
    objetivo.audio = "./assets/mito_book/CM_audio15.mp3";
    objetivo.page = "./assets/mito_book/CM15.html";
  }

  if (i === 15) {
    objetivo.cover = "./assets/mito_book/CM_portada16.png";
    objetivo.audio = "./assets/mito_book/CM_audio16.mp3";
    objetivo.page = "./assets/mito_book/CM16.html";
  }
  if (i === 16) {
    objetivo.cover = "./assets/mito_book/CM_portada17.png";
    objetivo.audio = "./assets/mito_book/CM_audio17.mp3";
    objetivo.page = "./assets/mito_book/CM17.html";
  }

  if (i === 17) {
    objetivo.cover = "./assets/mito_book/CM_portada18.png";
    objetivo.audio = "./assets/mito_book/CM_audio18.mp3";
    objetivo.page = "./assets/mito_book/CM18.html";
  }
  if (i === 18) {
    objetivo.cover = "./assets/mito_book/CM_portada19.png";
    objetivo.audio = "./assets/mito_book/CM_audio19.mp3";
    objetivo.page = "./assets/mito_book/CM19.html";
  }

  if (i === 19) {
    objetivo.cover = "./assets/mito_book/CM_portada20.png";
    objetivo.audio = "./assets/mito_book/CM_audio20.mp3";
    objetivo.page = "./assets/mito_book/CM20.html";
  }
  if (i === 20) {
    objetivo.cover = "./assets/mito_book/CM_portada21.png";
    objetivo.audio = "./assets/mito_book/CM_audio21.mp3";
    objetivo.page = "./assets/mito_book/CM21.html";
  }

  if (i === 21) {
    objetivo.cover = "./assets/mito_book/CM_portada21.png";
    objetivo.audio = "./assets/mito_book/CM_audio21.mp3";
    objetivo.page = "./assets/mito_book/CM21.html";
  }
  if (i === 22) {
    objetivo.cover = "./assets/mito_book/CM_portada22.png";
    objetivo.audio = "./assets/mito_book/CM_audio22.mp3";
    objetivo.page = "./assets/mito_book/CM22.html";
  }

  if (i === 23) {
    objetivo.cover = "./assets/mito_book/CM_portada23.png";
    objetivo.audio = "./assets/mito_book/CM_audio23.mp3";
    objetivo.page = "./assets/mito_book/CM23.html";
  }
  if (i === 24) {
    objetivo.cover = "./assets/mito_book/CM_portada24.png";
    objetivo.audio = "./assets/mito_book/CM_audio24.mp3";
    objetivo.page = "./assets/mito_book/CM24.html";
  }
  if (i === 25) {
    objetivo.cover = "./assets/mito_book/CM_portada25.png";
    objetivo.audio = "./assets/mito_book/CM_audio25.mp3";
    objetivo.page = "./assets/mito_book/CM25.html";
  }
  if (i === 26) {
    objetivo.cover = "./assets/mito_book/CM_portada26.png";
    objetivo.audio = "./assets/mito_book/CM_audio26.mp3";
    objetivo.page = "./assets/mito_book/CM26.html";
  }
  if (i === 27) {
    objetivo.cover = "./assets/mito_book/CM_portada27.png";
    objetivo.audio = "./assets/mito_book/CM_audio27.mp3";
    objetivo.page = "./assets/mito_book/CM27.html";
  }
  if (i === 28) {
    objetivo.cover = "./assets/mito_book/CM_portada288.png";
    objetivo.audio = "./assets/mito_book/CM_audio28.mp3";
    objetivo.page = "./assets/mito_book/CM28.html";
  }
  if (i === 29) {
    objetivo.cover = "./assets/mito_book/CM_portada29.png";
    objetivo.audio = "./assets/mito_book/CM_audio29.mp3";
    objetivo.page = "./assets/mito_book/CM29.html";
  }
  if (i === 30) {
    objetivo.cover = "./assets/mito_book/CM_portada30.png";
    objetivo.audio = "./assets/mito_book/CM_audio30.mp3";
    objetivo.page = "./assets/mito_book/CM30.html";
  }

  objetivos.push(objetivo);
});

/* 7 CONTENIDOS ESPECIALES EN ESPAÑOL: ÍNDICES 30 AL 36 */
especialesES.forEach((nombre, i) => {
  objetivos.push({
    file: "targets.mind",
    index: 30 + i,
    name: nombre,
    book: "Colores Mitológicos",
    description: descripcionesES[i],
    image: `./assets/mito/${31 + i}.jpg`,
    url: urlContenido
  });
});

/* 30 PERSONAJES EN INGLÉS: ÍNDICES 37 AL 66 */
personajesEN.forEach((nombre, i) => {
  objetivos.push({
    file: "targets.mind",
    index: 37 + i,
    name: nombre,
    book: "Mythological Colors",
    description:
      "We found it! Discover its history and its secret.",
    image: `./assets/mito/${38 + i}.jpg`,
    url: urlContenido
  });
});

/* 7 CONTENIDOS ESPECIALES EN INGLÉS: ÍNDICES 67 AL 73 */
especialesEN.forEach((nombre, i) => {
  objetivos.push({
    file: "targets.mind",
    index: 67 + i,
    name: nombre,
    book: "Mythological Colors",
    description: descripcionesEN[i],
    image: `./assets/mito/${68 + i}.jpg`,
    url: urlContenido
  });
});

/* LISTA FINAL QUE UTILIZA EL ESCÁNER */
window.READMIND_TARGETS = objetivos;

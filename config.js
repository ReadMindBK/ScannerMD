
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
    objetivo.codeTime = "1:44";
    objetivo.codeLetter = "N";
    objetivo.page = "./assets/mito_book/CM1.html";
  }

  if (i === 1) {
    objetivo.cover = "./assets/mito_book/CM_portada2.png";
    objetivo.audio = "./assets/mito_book/CM_audio2.mp3";
    objetivo.codeTime = "1:44";
    objetivo.codeLetter = "E";
    objetivo.page = "./assets/mito_book/CM2.html";
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

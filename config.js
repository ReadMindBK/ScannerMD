/*
====================================================================
CONFIGURACIÓN READMIND — ARCHIVOS .MIND Y PERSONAJES
====================================================================

CÓMO AGREGAR UN LIBRO NUEVO:
1. Compilá los dibujos de ese libro en el compilador de MindAR.
2. Descargá el archivo y poné un nombre nuevo: targets2.mind,
   targets3.mind, targets4.mind, etc.
3. Subí el archivo .mind a la misma carpeta que index.html.
4. Agregá el nombre exacto del archivo en READMIND_FILES.
5. Agregá debajo los personajes correspondientes en READMIND_TARGETS.

IMPORTANTE SOBRE LOS ÍNDICES:
- El primer dibujo que cargaste en un .mind tiene index: 0.
- El segundo dibujo de ESE MISMO .mind tiene index: 1.
- Cada archivo .mind vuelve a empezar desde el índice 0.
- El campo file debe coincidir exactamente con el nombre del archivo.

EJEMPLO:
targets.mind  -> La Esfinge (0), Anubis (1)
targets2.mind -> Dragón (0), Fénix (1)
targets3.mind -> Robot (0)

El escáner revisa los archivos de READMIND_FILES en orden y pasa
automáticamente al siguiente si no encuentra un dibujo.
====================================================================
*/

/* 0. LIBROS DISPONIBLES EN LA PANTALLA PRINCIPAL
   Cada botón carga exclusivamente el .mind indicado aquí.
   Cambiá los nombres si tus archivos tienen otros nombres. */
window.READMIND_BOOKS = [
  { id: "egipto", name: "Colores Mitológicos", file: "targets.mind", image: "./assets/web/book1.png" },
  { id: "dinosaurios", name: "Colores Prehistóricos", file: "targets2.mind", image: "./assets/web/book2.png" },
  { id: "robots", name: "Colores Robóticos", file: "targets3.mind", image: "./assets/web/book3.png" }
];

/* 1. LISTA DE ARCHIVOS .MIND
   Agregá un nombre por cada nuevo archivo que publiques. */
window.READMIND_FILES = [
  "targets.mind",
  "targets2.mind",
  "targets3.mind"
];

/* 2. TIEMPO DE BÚSQUEDA POR ARCHIVO
   Segundos que el escáner busca en cada .mind antes de pasar al siguiente.
   Podés probar 6, 8, 10 o 12 segundos. */
window.READMIND_SCAN_SECONDS = 8;

/* 3. PERSONAJES Y DESTINOS
   Cada personaje debe indicar:
   file        = archivo .mind que contiene su imagen.
   index       = posición de la imagen dentro de ese archivo (empieza en 0).
   name        = nombre mostrado en la tarjeta.
   book        = nombre del libro.
   description = texto breve que aparece al reconocerlo.
   image       = miniatura de la tarjeta.
   url         = página que se abre al tocar DESCUBRIR CONTENIDO.
*/
window.READMIND_TARGETS = [
  {
    file: "targets.mind",
    index: 0,
    name: "ESFINGE",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/1.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 1,
    name: "ANUBIS",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/2.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 2,
    name: "MANTICORA",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/3.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 3,
    name: "CERBERO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/4.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 4,
    name: "FÉNIX",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/5.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 5,
    name: "MEDUSA",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/6.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 6,
    name: "HIDRA",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/7.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 7,
    name: "MINOTAURO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/8.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 8,
    name: "QUIMERA",
    book: "Colores Mitológicos",
    description:"¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/9.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 9,
    name: "CÍCLOPE",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/10.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 10,
    name: "DRAGÓN",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/11.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 11,
    name: "HOMBRE LOBO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/12.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 12,
    name: "VAMPIRO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/13.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 13,
    name: "GÁRGOLA",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/14.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 14,
    name: "FAUNO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/15.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 15,
    name: "JÖRMUNGARDR",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/16.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 16,
    name: "KRAKEN",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/17.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 17,
    name: "DULLAHAN",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/18.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 18,
    name: "BANSHEE",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/19.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 19,
    name: "SELKIE",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/20.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 20,
    name: "TIAMAT",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/21.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 21,
    name: "WENDIGO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/22.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 22,
    name: "YETI",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/23.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 23,
    name: "KITSUNE",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/24.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 24,
    name: "KAPPA",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/25.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 25,
    name: "ONI",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/26.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 26,
    name: "CHUPACABRAS",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/27.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 27,
    name: "GARUDA",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/28.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 28,
    name: "BASILISCO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/29.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 29,
    name: "ALICORNO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí su historia y su secreto.",
    image: "./assets/mito/30.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 30,
    name: "SECRETO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí el secreto final.",
    image: "./assets/mito/31.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 31,
    name: "MAPA MITOLÓGICO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Viajemos juntos por el mundo.",
    image: "./assets/mito/32.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 32,
    name: "¿SABÍAS ESTO?",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí más de sus historias.",
    image: "./assets/mito/33.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 33,
    name: "TICTAC",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Cronometro Mitológico.",
    image: "./assets/mito/34.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 34,
    name: "EL VIAJE MITOLÓGICO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Viajemos jugando.",
    image: "./assets/mito/35.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 35,
    name: "DICCIONARIO",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Descubrí significados de palabras.",
    image: "./assets/mito/36.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 36,
    name: "MUSICA",
    book: "Colores Mitológicos",
    description: "¡Lo encontramos! Baila con nosotros.",
    image: "./assets/mito/37.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 37,
    name: "SPHINX",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/38.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 38,
    name: "ANUBIS",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/39.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 39,
    name: "MANTICORE",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/40.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 40,
    name: "CERBERUS",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/41.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 41,
    name: "PHOENIX",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/42.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 42,
    name: "MEDUSA",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/43.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 43,
    name: "HYDRA",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/44.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 44,
    name: "MINOTAUR",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/45.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 45,
    name: "CHIMERA",
    book: "Mythological Colors",
    description:"We found it! Discover its history and its secret.",
    image: "./assets/mito/46.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 46,
    name: "CYCLOPS",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/47.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 47,
    name: "DRAGON",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/48.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 48,
    name: "WEREWOLF",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/49.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 49,
    name: "VAMPIRE",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/50.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 50,
    name: "GARGOYLE",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/51.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 51,
    name: "FAUN",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/52.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 52,
    name: "JÖRMUNGARDR",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/53.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 53,
    name: "KRAKEN",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/54.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 54,
    name: "DULLAHAN",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/55.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 55,
    name: "BANSHEE",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/56.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 56,
    name: "SELKI",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/57.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 57,
    name: "TIAMAT",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/58.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 58,
    name: "WENDIGO",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/59.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 59,
    name: "YETI",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/60.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 60,
    name: "KITSUNE",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/61.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 61,
    name: "KAPPA",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/62.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 62,
    name: "ONI",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/63.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 63,
    name: "CHUPACABRA",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/64.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 64,
    name: "GARUDA",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/65.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 65,
    name: "BASILISK",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/66.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 66,
    name: "ALICORN",
    book: "Mythological Colors",
    description: "We found it! Discover its history and its secret.",
    image: "./assets/mito/67.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 67,
    name: "SECRET",
    book: "Mythological Colors",
    description: "We found it! I discovered the final secret.",
    image: "./assets/mito/68.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 68,
    name: "MYTHOLOGICAL MAP",
    book: "Mythological Colors",
    description: "We found it! Let’s travel the world together.",
    image: "./assets/mito/69.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 69,
    name: "DID YOU KNOW THIS?",
    book: "Mythological Colors",
    description: "We found it! Discover more of their stories.",
    image: "./assets/mito/70.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 70,
    name: "TICTAC",
    book: "Mythological Colors",
    description: "We found it! Mythological Chronometer.",
    image: "./assets/mito/71.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 71,
    name: "THE MYTHOLOGICAL JOURNEY",
    book: "Mythological Colors",
    description: "We found it! Let’s travel while we play.",
    image: "./assets/mito/72.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 72,
    name: "DICTIONARY",
    book: "Mythological Colors",
    description: "We found it! Discover the meanings of words.",
    image: "./assets/mito/73.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },  
  {
    file: "targets.mind",
    index: 73,
    name: "MUSIC",
    book: "Mythological Colors",
    description: "We found it! Dance with us.",
    image: "./assets/mito/74.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  }
 
 
];

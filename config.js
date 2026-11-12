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

/* 1. LISTA DE ARCHIVOS .MIND
   Agregá un nombre por cada nuevo archivo que publiques. */
window.READMIND_FILES = [
  "targets.mind"
  // Cuando subas el segundo libro, agregá una coma arriba y esta línea:
  // ,"targets2.mind"
  // Para un tercer archivo:
  // ,"targets3.mind"
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
    name: "La Esfinge",
    book: "Colores Mitológicos",
    description: "¡Encontramos a la Esfinge! Descubrí su historia y sus secretos.",
    image: "./assets/1.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 1,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/2.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  }

  /*
  EJEMPLO PARA AGREGAR PERSONAJES DEL SEGUNDO LIBRO:
  ,{
    file: "targets2.mind",
    index: 0,
    name: "Dragón",
    book: "Colores Fantásticos",
    description: "¡Encontramos al Dragón!",
    image: "./assets/dragon.jpg",
    url: "https://TU-PAGINA-DEL-DRAGON"
  },
  {
    file: "targets2.mind",
    index: 1,
    name: "Fénix",
    book: "Colores Fantásticos",
    description: "¡Encontramos al Fénix!",
    image: "./assets/fenix.jpg",
    url: "https://TU-PAGINA-DEL-FENIX"
},
  {
    index: 2,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/3.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 3,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/4.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 4,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/5.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 5,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/6.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 6,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/7.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 7,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/8.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 8,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/9.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 9,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/10.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 10,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/11.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 11,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/12.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 12,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/13.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 13,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/14.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 14,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/15.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 15,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/16.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 16,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/17.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 17,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/18.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 18,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/19.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 19,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/20.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 20,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/21.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 21,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/22.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 22,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/23.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 23,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/24.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 24,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/25.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 25,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/26.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 26,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/27.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 27,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/28.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 28,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/29.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  },
  {
    index: 29,
    name: "Anubis",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/30.jpg",
    url: "REEMPLAZAR_POR_URL_FINAL_ANUBIS"
  }
  */
];

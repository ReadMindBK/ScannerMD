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
    name: "1",
    book: "Colores Mitológicos",
    description: "¡Encontramos a la Esfinge! Descubrí su historia y sus secretos.",
    image: "./assets/1.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 1,
    name: "2",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/2.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 2,
    name: "3",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/3.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 3,
    name: "4",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/4.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 4,
    name: "5",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/5.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 5,
    name: "6",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/6.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 6,
    name: "7",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/7.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 7,
    name: "8",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/8.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 8,
    name: "9",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/9.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 9,
    name: "10",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/10.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 10,
    name: "11",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/1.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 11,
    name: "12",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/12.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 12,
    name: "13",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/13.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 13,
    name: "14",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/14.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 14,
    name: "15",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/15.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 15,
    name: "16",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/16.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 16,
    name: "17",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/17.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 17,
    name: "18",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/18.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 18,
    name: "19",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/19.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 19,
    name: "20",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/20.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 20,
    name: "21",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/21.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 21,
    name: "22",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/22.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 22,
    name: "23",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/23.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 23,
    name: "24",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/24.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 24,
    name: "25",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/25.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 25,
    name: "26",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/26.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 26,
    name: "27",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/27.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 27,
    name: "28",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/28.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 28,
    name: "29",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/29.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  },
  {
    file: "targets.mind",
    index: 29,
    name: "30",
    book: "Colores Mitológicos",
    description: "¡Encontramos a Anubis! Descubrí su historia y sus secretos.",
    image: "./assets/30.jpg",
    url: "https://readmindbk.github.io/Mythological_Colors_Synopsis"
  }

];

// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hace tiempo que no agarro a nadie de la mano", time: 0.1 },
  { text: "Hace tiempo que no envio Buenos dias, te amo", time: 4 },
  { text: "Pero tú me tiene' enredao, me envolví", time: 8 },
  { text: "Iba por mi camino y me perdí", time: 11 },
  { text: "Mi mirada cambió cuando tus ojos vi", time: 15 },
  { text: "Bye-bye a los culo', ni me despedí", time: 17 },
  { text: "Yo no te busqué, no", time: 20 },
  { text: "Chocamo' en el trayecto", time: 26 },
  { text: "Con tu alma es la que yo conecto", time: 27 },
  { text: "Tranquila, no tiene que ser perfecto, no", time: 31 },
  { text: "Aquí no existe el pecado", time: 35 },
  { text: "Y equivocarse es bonito", time: 38 },
  { text: "Los errore' son placere'", time: 41 },
  { text: "Igual que to' tus besito'", time: 44 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 47 },
  { text: "Que con eso yo estoy bien", time: 52 },
  { text: "Hoy he vuelto a nacer", time: 53 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 59 },
  { text: "Que con eso yo estoy bien", time: 63 },
  { text: "Hoy he vuelto a nacer", time: 67 },
  { text: "Tú y yo, tú y yo, tú y yo", time: 71 },
  { text: "Tú y yo, tú y yo, tú y yo", time: 77 },
  { text: "Tú y yo, tú y yo", time: 87 },
  { text: "Tú y yo, tú y yo", time: 91 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

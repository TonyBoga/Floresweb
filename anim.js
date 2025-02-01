// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hace tiempo que no agarro a nadie de la mano", time: 0.5 },
  { text: "Hace tiempo que no envio Buenos dias, te amo", time: 7 },
  { text: "Pero tú me tiene' enredao, me envolví", time: 12 },
  { text: "Iba por mi camino y me perdí", time: 16 },
  { text: "Mi mirada cambió cuando tus ojos vi", time: 18 },
  { text: "Bye-bye a los culo', ni me despedí", time: 22 },
  { text: "Yo no te busqué, no", time: 25 },
  { text: "Chocamo' en el trayecto", time: 28 },
  { text: "Con tu alma es la que yo conecto", time: 30 },
  { text: "Tranquila, no tiene que ser perfecto, no", time: 33 },
  { text: "Aquí no existe el pecado", time: 37 },
  { text: "Y equivocarse es bonito", time: 40 },
  { text: "Los errore' son placere'", time: 43 },
  { text: "Igual que to' tus besito'", time: 46 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 49 },
  { text: "Que con eso yo estoy bien", time: 54 },
  { text: "Hoy he vuelto a nacer", time: 57 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 61 },
  { text: "Que con eso yo estoy bien", time: 65 },
  { text: "Hoy he vuelto a nacer", time: 69 },
  { text: "Tú y yo, tú y yo, tú y yo", time: 73 },
  { text: "Tú y yo, tú y yo, tú y yo", time: 79 },
  { text: "Tú y yo, tú y yo", time: 89 },
  { text: "Tú y yo, tú y yo", time: 93 },
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
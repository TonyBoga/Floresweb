// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hace tiempo que no agarro a nadie de la mano", time: 15 },
  { text: "Hace tiempo que no envio Buenos dias, te amo", time: 18 },
  { text: "Pero tú me tiene' enredao, me envolví", time: 27 },
  { text: "Iba por mi camino y me perdí", time: 32 },
  { text: "Mi mirada cambió cuando tus ojos vi", time: 33 },
  { text: "Bye-bye a los culo', ni me despedí", time: 41 },
  { text: "Yo no te busqué, no", time: 47 },
  { text: "Chocamo' en el trayecto", time: 54 },
  { text: "Con tu alma es la que yo conecto", time: 59 },
  { text: "Tranquila, no tiene que ser perfecto, no", time: 67 },
  { text: "Aquí no existe el pecado", time: 72 },
  { text: "Y equivocarse es bonito", time: 78 },
  { text: "Los errore' son placere'", time: 83 },
  { text: "Igual que to' tus besito'", time: 91 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 97 },
  { text: "Que con eso yo estoy bien", time: 104 },
  { text: "Hoy he vuelto a nacer", time: 108 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 144 },
  { text: "Que con eso yo estoy bien", time: 148 },
  { text: "Hoy he vuelto a nacer", time: 153 },
  { text: "Tú y yo, tú y yo, tú y yo", time: 158 },
  { text: "Tú y yo, tú y yo", time: 164 },
  { text: "Tú y yo, tú y yo", time: 169 },
  { text: "Tú y yo, tú y yo", time: 176 },
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
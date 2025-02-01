document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel .torn-image");
    let currentIndex = 0;

    // Mostrar la primera imagen al inicio
    images[currentIndex].classList.add("active");

    // Cambiar imágenes cada 3 segundos
    setInterval(() => {
        // Ocultar la imagen actual
        images[currentIndex].classList.remove("active");

        // Cambiar al siguiente índice
        currentIndex = (currentIndex + 1) % images.length;

        // Mostrar la siguiente imagen
        images[currentIndex].classList.add("active");
    }, 3000);
});

// Obtener el audio y el botón
const audio = document.getElementById("background-audio");
const audioControl = document.getElementById("audio-control");
const audioIcon = document.getElementById("audio-icon");

// Inicializar el audio en reproducción
audio.volume = 0.5; // Ajusta el volumen inicial (0 a 1)

// Alternar reproducción/pausa al hacer clic en el botón
audioControl.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        audioIcon.textContent = "⏸"; // Cambiar ícono a pausa
    } else {
        audio.pause();
        audioIcon.textContent = "▶"; // Cambiar ícono a play
    }
});
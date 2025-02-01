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
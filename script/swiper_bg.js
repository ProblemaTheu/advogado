document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-slider img");
    let currentImage = 0;

    function changeImage() {
        images[currentImage].classList.remove("active");
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add("active");
    }

    setInterval(changeImage, 5000); 
});

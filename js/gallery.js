// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            let newImageSrc = thumbnail.dataset.largeVersion;
            // Preload large images
            let largeImage = new Image();
            largeImage.src = newImageSrc;

            const CURRENT_CLASS = "current";

            // Change which image is current.
            document.querySelector(".current").classList.remove(CURRENT_CLASS);
            thumbnail.parentNode.classList.add(CURRENT_CLASS);

            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;

            // Set clicked image as main image.
            mainImage.style.opacity = 0.8;

            setTimeout(function () {
                mainImage.style.opacity = 1;
                mainImage.setAttribute("src", newImageSrc);
                mainImage.setAttribute("alt", thumbnail.alt);
            }, 200);
        });
    });
}
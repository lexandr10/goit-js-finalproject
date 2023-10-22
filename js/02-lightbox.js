import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imagesGallery = document.querySelector(".gallery");
function getItem(arr) {
  return arr
    .map(
      ({ preview, original, description }) => ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      </li>`
    )
    .join("");
}

imagesGallery.insertAdjacentHTML("afterbegin", getItem(galleryItems));

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

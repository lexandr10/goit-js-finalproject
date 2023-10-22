import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesGallery = document.querySelector(".gallery");
function getItem(arr) {
  return arr
    .map(
      ({ preview, original, description }) => ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image js-img" data-source="${original}" src="${preview}" alt="${description}" />
  </a>
      </li>`
    )
    .join("");
}
imagesGallery.insertAdjacentHTML("afterbegin", getItem(galleryItems));
imagesGallery.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
  if (evt.currentTarget === evt.target) {
    return;
  }
  const currentItem = evt.target.closest(".js-img");
  const idItem = currentItem.dataset.source;
  const item = galleryItems.find(({ original }) => original === idItem);
  getModal(item);
}
function getModal({ preview, original, description }) {
  const instance = basicLightbox.create(`
     <img class="gallery__image" src="${original}" alt="${description}">
`);
  instance.show();
}

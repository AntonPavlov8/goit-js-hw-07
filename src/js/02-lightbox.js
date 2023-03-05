import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  galleryItem.innerHTML = `<a class="gallery__link" href=${element.original} >
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a>`;
  gallery.append(galleryItem);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

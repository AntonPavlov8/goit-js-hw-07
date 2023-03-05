import { galleryItems } from "./gallery-items.js";

function findParent(url) {
  const gg = galleryItems.find((ww) => ww.preview === url);
  return gg.original;
}
const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  galleryItem.innerHTML = `<a class="gallery__link" >
    <img
      class="gallery__image"
      src=${element.preview}
      alt=${element.description}
    />
  </a>`;
  gallery.append(galleryItem);
});

gallery.addEventListener("click", (e) => {
  let largerPhoto = findParent(e.target.src);
  const instance = basicLightbox.create(
    `<img src=${largerPhoto} width="800" height="600">`
  );

  instance.show();
});

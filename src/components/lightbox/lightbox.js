export function Lightbox(images) {
  let currentIndex = 0;
  const div = document.createElement("div");
  div.className = "lightbox";

  // Gallery markup (main image + thumbnails)
  div.innerHTML = `
    <div class="lightbox__main">
      <img src="${
        images[0].full
      }" alt="Product image" class="lightbox__image" tabindex="0" />
    </div>
    <div class="lightbox__thumbnails">
      ${images
        .map(
          (img, index) => `
        <img src="${img.thumbnail}"
             data-full="${img.full}"
             alt="Thumbnail ${index + 1}"
             class="lightbox__thumb${index === 0 ? " is-active" : ""}"
             tabindex="0" />
      `
        )
        .join("")}
    </div>
    <div class="lightbox__modal" aria-modal="true" role="dialog" style="display:none;">
      <button class="lightbox__close" aria-label="Close">
        <img src="/ecommerce-product-page/assets/images/icon-close.svg" alt="Close X"/>
      </button>
      <button class="lightbox__chevron lightbox__chevron--prev" aria-label="Previous">
        <img src="/ecommerce-product-page/images/icon-previous.svg" alt="Previous"/>
      </button>
      <div class="lightbox__modal-content">
        <img src="" alt="Enlarged image" class="lightbox__modal-image"/>
      </div>
      <div class="lightbox__thumbnails">
        ${images
          .map(
            (img, index) => `
          <img src="${img.thumbnail}"
               data-full="${img.full}"
               alt="Thumbnail ${index + 1}"
               class="lightbox__modal-thumb${index === 0 ? " is-active" : ""}"
               tabindex="0" />
        `
          )
          .join("")}
      </div>
      <button class="lightbox__chevron lightbox__chevron--next" aria-label="Next">
        <img src="/ecommerce-product-page/assets/images/icon-next.svg" alt="Next"/>
      </button>
    </div>
  `;

  // DOM references
  const mainImage = div.querySelector(".lightbox__image");
  const thumbs = div.querySelectorAll(".lightbox__thumb");
  const modal = div.querySelector(".lightbox__modal");
  const modalImg = div.querySelector(".lightbox__modal-image");
  const modalThumbs = div.querySelectorAll(".lightbox__modal-thumb");
  const closeBtn = div.querySelector(".lightbox__close");
  const prevBtn = div.querySelector(".lightbox__chevron--prev");
  const nextBtn = div.querySelector(".lightbox__chevron--next");

  // Thumbnail navigation (main gallery)
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener("click", () => setActive(idx));
    thumb.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") setActive(idx);
    });
  });

  // Thumbnail navigation (modal gallery)
  modalThumbs.forEach((thumb, idx) => {
    thumb.addEventListener("click", () => setActive(idx));
    thumb.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") setActive(idx);
    });
  });

  function setActive(idx) {
    currentIndex = idx;
    mainImage.src = images[idx].full;

    // Update main gallery thumbnails
    thumbs.forEach((t) => t.classList.remove("is-active"));
    thumbs[idx].classList.add("is-active");

    // Update modal gallery thumbnails
    modalThumbs.forEach((t) => t.classList.remove("is-active"));
    modalThumbs[idx].classList.add("is-active");

    // Update modal image if open
    if (modal.style.display === "flex") {
      modalImg.src = images[idx].full;
    }
  }

  // Open modal on main image click
  function openModal() {
    modal.style.display = "flex";
    modalImg.src = images[currentIndex].full;
  }

  mainImage.addEventListener("click", openModal);
  mainImage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") openModal();
  });

  // Carousel next/prev
  function showIndex(delta) {
    let next = (currentIndex + delta + images.length) % images.length;
    setActive(next);
  }

  prevBtn.addEventListener("click", () => showIndex(-1));
  nextBtn.addEventListener("click", () => showIndex(1));

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowRight") showIndex(1);
      if (e.key === "ArrowLeft") showIndex(-1);
      if (e.key === "Escape") modal.style.display = "none";
    }
  });

  // Close modal
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  return div;
}

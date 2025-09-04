import "./layout.js"; // loads styles

import { Navbar } from "./components/navbar/navbar.js";
import { CartModal } from "./components/cart-modal/cart-modal.js";
import { addItem } from "./store/cartStore.js";
import { Lightbox } from "./components/lightbox/lightbox.js";
import { fetchProductData } from "./utils/fetchData.js";

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.querySelector("#app");
  const basePath = import.meta.env.BASE_URL;

  // Create Navbar and Cart Modal
  const navbar = Navbar();
  const cartModal = CartModal();
  if (app) app.append(navbar, cartModal);

  // Lightbox Componnet Set Up
  const productContainer = document.createElement("div");
  productContainer.id = "product-container";
  productContainer.className = "product-container";
  app.appendChild(productContainer);

  // Toggle cart modal manually (clicking the cart icon)
  const cartToggleBtn = document.querySelector("#cart-toggle");
  cartToggleBtn?.addEventListener("click", () => {
    const cartModalEl = document.querySelector("#cart-modal");
    cartModalEl?.classList.toggle("is-visible");
  });

  try {
    const products = await fetchProductData();

    const fallSneakers = products.find(
      (p) => p.slug === "fall-limited-sneakers"
    ); // match your data.json slug
    if (fallSneakers) {
      // ✅ This is the key part to actually render the Lightbox
      const lightboxEl = Lightbox(
        fallSneakers.images.map((img) => ({
          thumbnail: `${basePath}/${img.thumbnail}`,
          full: `${basePath}/${img.full}`,
        }))
      );
      productContainer.appendChild(lightboxEl);
      
    }
  } catch (error) {
    console.error("❌ Could not load Lightbox images:", error);
  }

  // ──────────────
  // Add demo cart items for testing
  // ──────────────
  addItem(
    {
      slug: "fall-sneakers",
      name: "Fall Limited Edition Sneakers",
      price: 125,
      image: `${basePath}/assets/images/image-product-1-thumbnail.jpg`,
    },
    3
  );

  addItem(
    {
      slug: "summer-sneakers",
      name: "Summer Sneakers",
      price: 95,
      image: `${basePath}/assets/images/image-product-1-thumbnail.jpg`,
    },
    2
  );
});
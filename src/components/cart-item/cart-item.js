import { removeItem } from "../../store/cartStore";

export function CartItem({ slug, name, price, qty, image }) {
  const div = document.createElement("div");
  div.className = "cart-item";
  div.dataset.slug = slug;

  const total = price * qty;

  div.innerHTML = `
    <img src="${image}" alt="${name}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${name}</p>
      <p class="cart-item__line">
        <span class="cart-item__price">$${price.toLocaleString()} x ${qty}</span>
        <span class="cart-item__total">$${total.toLocaleString()}</span>
      </p>
    </div>
    <button class="cart-item__remove" aria-label="Remove ${name}">
      <img src="/ecommerce-product-page/assets/images/icon-delete.svg" alt="Remove item" />
    </button>
  `;

  div.querySelector(".cart-item__remove").addEventListener("click", () => {
    removeItem(slug);
  });

  return div;
}

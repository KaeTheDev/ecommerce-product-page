import { createButton } from "../button/button";
import { getState } from '../../store/cartStore';
import { CartItem } from "../cart-item/cart-item";

export function CartModal() {
  const modal = document.createElement("div");
  modal.id = "cart-modal";
  modal.className = "cart-modal";

  function render() {
    const { items } = getState(); // just get items

    modal.innerHTML = `
      <div class="cart-modal__header">
        <h2 class="cart-modal__title">Cart (${items.length})</h2>
      </div>

      <div class="cart-modal__items"></div>

      <div class="cart-modal__checkout"></div>
    `;

    const list = modal.querySelector(".cart-modal__items");

    if (items.length === 0) {
      list.innerHTML = `<p class="cart-modal__empty">Your cart is empty.</p>`;
    } else {
      // Render each cart item
      items.forEach(item => {
        list.appendChild(
          CartItem({
            ...item,
            onRemove: slug => {
              const index = items.findIndex(i => i.slug === slug);
              if (index > -1) items.splice(index, 1); // remove from array
              render(); // re-render modal
            }
          })
        );
      });
    }

    // Checkout Button shows summary alert
    const checkoutBtn = createButton({ label: 'Checkout', variant: 'primary' });
    checkoutBtn.addEventListener('click', () => {
      if (items.length === 0) {
        alert('Your cart is empty. Add something before checking out!');
      } else {
        const summary = items
          .map(item => `${item.name}\n$${item.price.toLocaleString()} x ${item.qty} = $${(item.price * item.qty).toLocaleString()}`)
          .join('\n\n');

        const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

        alert(`Order Summary:\n\n${summary}\n\nTotal: $${total.toLocaleString()}`);
      }
    });

    modal.querySelector(".cart-modal__checkout").appendChild(checkoutBtn);
  }

  render();
  document.addEventListener('cart:updated', render); // re-render automatically when cart changes

  return modal;
}
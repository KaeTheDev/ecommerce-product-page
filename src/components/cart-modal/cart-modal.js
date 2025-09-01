import { createButton } from "../button/button";

export function CartModal() {
    const modal = document.createElement("div");
    modal.id = "cart-modal";
    modal.className = "cart-modal";

    function render() {
        modal.innerHTML = `
        <div class="cart-modal__header">
            <h2 class="cart-modal__title">Cart</h2>
        </div>

        <div class="cart-modal__items"></div>

        <div class="cart-modal__checkout"></div>
        `;

        const list = modal.querySelector(".cart-modal__items");


        // For now, just show empty
        list.innerHTML = `
        <p class="cart-modal__empty">Your cart is empty.</p>
        `;

        // Checkout Button (inactive right now)
        const checkoutBtn = createButton({ label: "Checkout", variant: "primary"});
        checkoutBtn.addEventListener("click", () => {
            alert("Your cart is empty. Add something before checking out!");
        });

        modal.querySelector(".cart-modal__checkout").appendChild(checkoutBtn);
    }
    render();

    return modal;
}
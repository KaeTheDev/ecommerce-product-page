import './layout.js'; // loads styles

import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');

    // Create Navbar and Cart Modal
    const navbar = Navbar();
    const cartModal = CartModal();

    if(app) app.append(navbar, cartModal);

    // Toggle cart modal manually (clicking the cart icon)
    const cartToggleBtn = document.querySelector('#cart-toggle');
    cartToggleBtn?.addEventListener('click', () => {
        const cartModalEl = document.querySelector('#cart-modal');
        cartModalEl?.classList.toggle('is-visible');
    });
});
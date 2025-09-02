import './layout.js'; // loads styles

import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { addItem } from './store/cartStore.js'; // make sure cartStore is set up

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');

    const basePath = '/ecommerce-product-page';

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

    // ──────────────
    // Add demo cart items for testing
    // ──────────────
    addItem({
        slug: 'fall-sneakers',
        name: 'Fall Limited Edition Sneakers',
        price: 125,
        image: `${basePath}/assets/images/image-product-1-thumbnail.jpg`

    }, 3);

    addItem({
        slug: 'summer-sneakers',
        name: 'Summer Sneakers',
        price: 95,
        image: `${basePath}/assets/images/image-product-1-thumbnail.jpg`
    }, 2);
});
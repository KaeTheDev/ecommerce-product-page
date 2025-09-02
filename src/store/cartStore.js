// src/store/cartStore.js
// ======================================================
// Central cart store – keeps data in memory, syncs to
// localStorage, and notifies the UI via 'cart:updated' and
// 'cart:itemAdded' events.
// ======================================================

const STORAGE_KEY = 'e-commerce-product-page';

// Load state from localStorage or fallback
let state = load();

Object.defineProperty(state, 'total', {
    get(){
        return state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    },
});

function load() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { items: []}
    } catch {
        return { items: [] };
    }
}

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: state }));
}

// ────────────────
// Cart API
// ────────────────

export function addItem(product, qty = 1){
    if (!product?.slug) return;

    const line = state.items.find(i => i.slug === product.slug);
    if(line){
        line.qty += qty;
    } else {
        state.items.push({
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            qty,
        });
    }

    save();
    document.dispatchEvent(
        new CustomEvent('cart:itemAdded', { detail: { product, qty, items: state.items }})
    );
}

export function updateQty(slug, qty) {
    const line = state.items.find(i => i.slug == slug);
    if(!line) return;
    line.qty = Math.max(1, qty);
    save();
}

export function removeItem(slug){
    state.items = state.items.filter(i => i.slug !== slug);
    save();
}

export function clearCart(){
    state.items = [];
    save();
}

export function getState(){
    return state;
}
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function l(){const a=document.createElement("header");a.className="navbar";const t="/ecommerce-product-page";a.innerHTML=`
    <nav class="navbar__container">

      <!-- Left side -->
      <div class="navbar__left">
        <button class="navbar__toggle" aria-label="Open Menu">
          <img src="${t}/assets/images/icon-menu.svg" alt="hamburger menu"/>
        </button>

        <a href="./" class="navbar__logo">
          <img src="${t}/assets/images/logo.svg" alt="sneakers logo"/>
        </a>

        <ul class="navbar__links">
           <button class="navbar__close" aria-label="Close Menu">
            <img src="${t}/assets/images/icon-close.svg" alt="close menu"/>
          </button>
          <li class="navbar__link-item"><a href="#" class="navbar__link">Collections</a></li>
          <li class="navbar__link-item"><a href="#" class="navbar__link">Men</a></li>
          <li class="navbar__link-item"><a href="#" class="navbar__link">Women</a></li>
          <li class="navbar__link-item"><a href="#" class="navbar__link">About</a></li>
          <li class="navbar__link-item"><a href="#" class="navbar__link">Contact</a></li>
        </ul>
      </div>

      <!-- Right side -->
      <div class="navbar__right">
        <button id="cart-toggle" class="navbar__cart" aria-label="Cart">
          <img src="${t}/assets/images/icon-cart.svg" alt="cart"/>
        </button>

        <a href="#" class="navbar__avatar">
          <img src="${t}/assets/images/image-avatar.png" alt="profile pic"/>
        </a>
      </div>

    </nav>
  `;const n=a.querySelector(".navbar__toggle"),r=a.querySelector(".navbar__close"),e=a.querySelector(".navbar__links");return n.addEventListener("click",()=>{e.classList.toggle("is-open")}),r.addEventListener("click",()=>{e.classList.remove("is-open")}),a}function o({label:a,variant:t="primary",type:n="button",icon:r=""}){const e=document.createElement("button");return e.className=`btn btn--${t}`,e.type=n,e.innerHTML=`
      <span class="btn__label">${a}</span>
      ${r?`<span class="btn__icon">${r}</span>`:""}
    `,e}function i(){const a=document.createElement("div");a.id="cart-modal",a.className="cart-modal";function t(){a.innerHTML=`
        <div class="cart-modal__header">
            <h2 class="cart-modal__title">Cart</h2>
        </div>

        <div class="cart-modal__items"></div>

        <div class="cart-modal__checkout"></div>
        `;const n=a.querySelector(".cart-modal__items");n.innerHTML=`
        <p class="cart-modal__empty">Your cart is empty.</p>
        `;const r=o({label:"Checkout",variant:"primary"});r.addEventListener("click",()=>{alert("Your cart is empty. Add something before checking out!")}),a.querySelector(".cart-modal__checkout").appendChild(r)}return t(),a}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("#app"),t=l(),n=i();a&&a.append(t,n),document.querySelector("#cart-toggle")?.addEventListener("click",()=>{document.querySelector("#cart-modal")?.classList.toggle("is-visible")})});

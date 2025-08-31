(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function i(){const t=document.createElement("header");t.className="navbar";const a="/ecommerce-product-page";t.innerHTML=`
    <nav class="navbar__container">

      <!-- Left side -->
      <div class="navbar__left">
        <button class="navbar__toggle" aria-label="Open Menu">
          <img src="${a}/assets/images/icon-menu.svg" alt="hamburger menu"/>
        </button>

        <a href="./" class="navbar__logo">
          <img src="${a}/assets/images/logo.svg" alt="sneakers logo"/>
        </a>

        <ul class="navbar__links">
           <button class="navbar__close" aria-label="Close Menu">
            <img src="${a}/assets/images/icon-close.svg" alt="close menu"/>
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
          <img src="${a}/assets/images/icon-cart.svg" alt="cart"/>
        </button>

        <a href="#" class="navbar__avatar">
          <img src="${a}/assets/images/image-avatar.png" alt="profile pic"/>
        </a>
      </div>

    </nav>
  `;const n=t.querySelector(".navbar__toggle"),r=t.querySelector(".navbar__close"),e=t.querySelector(".navbar__links");return n.addEventListener("click",()=>{e.classList.toggle("is-open")}),r.addEventListener("click",()=>{e.classList.remove("is-open")}),t}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#app"),a=i();t&&t.append(a)});

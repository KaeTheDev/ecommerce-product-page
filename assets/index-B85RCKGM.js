(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();function i(){const s=document.createElement("header");s.className="navbar",s.innerHTML=`
    <nav class="navbar__container">

      <!-- Left side -->
      <div class="navbar__left">
        <button class="navbar__toggle" aria-label="Open Menu">
          <img src="public/assets/images/icon-menu.svg" alt="hamburger menu"/>
        </button>

        <a href="./" class="navbar__logo">
          <img src="public/assets/images/logo.svg" alt="sneakers logo"/>
        </a>

        <ul class="navbar__links">
           <button class="navbar__close" aria-label="Close Menu">
            <img src="public/assets/images/icon-close.svg" alt="close menu"/>
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
          <img src="public/assets/images/icon-cart.svg" alt="cart"/>
        </button>

        <a href="#" class="navbar__avatar">
          <img src="public/assets/images/image-avatar.png" alt="profile pic"/>
        </a>
      </div>

    </nav>
  `;const t=s.querySelector(".navbar__toggle"),n=s.querySelector(".navbar__close"),r=s.querySelector(".navbar__links");return t.addEventListener("click",()=>{r.classList.toggle("is-open")}),n.addEventListener("click",()=>{r.classList.remove("is-open")}),s}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#app"),t=i();s&&s.append(t)});

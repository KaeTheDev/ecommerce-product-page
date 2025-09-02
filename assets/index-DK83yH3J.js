(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function g(){const e=document.createElement("header");e.className="navbar";const t="/ecommerce-product-page";e.innerHTML=`
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
  `;const n=e.querySelector(".navbar__toggle"),r=e.querySelector(".navbar__close"),a=e.querySelector(".navbar__links");return n.addEventListener("click",()=>{a.classList.toggle("is-open")}),r.addEventListener("click",()=>{a.classList.remove("is-open")}),e}function _({label:e,variant:t="primary",type:n="button",icon:r=""}){const a=document.createElement("button");return a.className=`btn btn--${t}`,a.type=n,a.innerHTML=`
      <span class="btn__label">${e}</span>
      ${r?`<span class="btn__icon">${r}</span>`:""}
    `,a}const d="e-commerce-product-page";let c=p();Object.defineProperty(c,"total",{get(){return c.items.reduce((e,t)=>e+t.price*t.qty,0)}});function p(){try{return JSON.parse(localStorage.getItem(d))||{items:[]}}catch{return{items:[]}}}function u(){localStorage.setItem(d,JSON.stringify(c)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:c}))}function m(e,t=1){if(!e?.slug)return;const n=c.items.find(r=>r.slug===e.slug);n?n.qty+=t:c.items.push({slug:e.slug,name:e.name,price:e.price,image:e.image,qty:t}),u(),document.dispatchEvent(new CustomEvent("cart:itemAdded",{detail:{product:e,qty:t,items:c.items}}))}function v(e){c.items=c.items.filter(t=>t.slug!==e),u()}function b(){return c}function f({slug:e,name:t,price:n,qty:r,image:a}){const s=document.createElement("div");s.className="cart-item",s.dataset.slug=e;const i=n*r;return s.innerHTML=`
    <img src="${a}" alt="${t}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${t}</p>
      <p class="cart-item__line">
        <span class="cart-item__price">$${n.toLocaleString()} x ${r}</span>
        <span class="cart-item__total">$${i.toLocaleString()}</span>
      </p>
    </div>
    <button class="cart-item__remove" aria-label="Remove ${t}">
      <img src="/ecommerce-product-page/assets/images/icon-delete.svg" alt="Remove item" />
    </button>
  `,s.querySelector(".cart-item__remove").addEventListener("click",()=>{v(e)}),s}function h(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function t(){const{items:n}=b();e.innerHTML=`
      <div class="cart-modal__header">
        <h2 class="cart-modal__title">Cart (${n.length})</h2>
      </div>

      <div class="cart-modal__items"></div>

      <div class="cart-modal__checkout"></div>
    `;const r=e.querySelector(".cart-modal__items");n.length===0?r.innerHTML='<p class="cart-modal__empty">Your cart is empty.</p>':n.forEach(s=>{r.appendChild(f({...s}))});const a=_({label:"Checkout",variant:"primary"});a.addEventListener("click",()=>{if(n.length===0)alert("Your cart is empty. Add something before checking out!");else{const s=n.map(l=>`${l.name}
$${l.price.toLocaleString()} x ${l.qty} = $${(l.price*l.qty).toLocaleString()}`).join(`

`),i=n.reduce((l,o)=>l+o.price*o.qty,0);alert(`Order Summary:

${s}

Total: $${i.toLocaleString()}`)}}),e.querySelector(".cart-modal__checkout").appendChild(a)}return t(),document.addEventListener("cart:updated",t),e}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app"),t="/ecommerce-product-page",n=g(),r=h();e&&e.append(n,r),document.querySelector("#cart-toggle")?.addEventListener("click",()=>{document.querySelector("#cart-modal")?.classList.toggle("is-visible")}),m({slug:"fall-sneakers",name:"Fall Limited Edition Sneakers",price:125,image:`${t}/assets/images/image-product-1-thumbnail.jpg`},3),m({slug:"summer-sneakers",name:"Summer Sneakers",price:95,image:`${t}/assets/images/image-product-1-thumbnail.jpg`},2)});

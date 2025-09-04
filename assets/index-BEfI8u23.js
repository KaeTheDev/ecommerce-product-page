(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();function L(){const e=document.createElement("header");e.className="navbar";const t="/ecommerce-product-page";e.innerHTML=`
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
  `;const s=e.querySelector(".navbar__toggle"),l=e.querySelector(".navbar__close"),a=e.querySelector(".navbar__links");return s.addEventListener("click",()=>{a.classList.toggle("is-open")}),l.addEventListener("click",()=>{a.classList.remove("is-open")}),e}function $({label:e,variant:t="primary",type:s="button",icon:l=""}){const a=document.createElement("button");return a.className=`btn btn--${t}`,a.type=s,a.innerHTML=`
      <span class="btn__label">${e}</span>
      ${l?`<span class="btn__icon">${l}</span>`:""}
    `,a}const h="e-commerce-product-page";let d=k();Object.defineProperty(d,"total",{get(){return d.items.reduce((e,t)=>e+t.price*t.qty,0)}});function k(){try{return JSON.parse(localStorage.getItem(h))||{items:[]}}catch{return{items:[]}}}function f(){localStorage.setItem(h,JSON.stringify(d)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:d}))}function p(e,t=1){if(!e?.slug)return;const s=d.items.find(l=>l.slug===e.slug);s?s.qty+=t:d.items.push({slug:e.slug,name:e.name,price:e.price,image:e.image,qty:t}),f(),document.dispatchEvent(new CustomEvent("cart:itemAdded",{detail:{product:e,qty:t,items:d.items}}))}function E(e){d.items=d.items.filter(t=>t.slug!==e),f()}function x(){return d}function S({slug:e,name:t,price:s,qty:l,image:a}){const n=document.createElement("div");n.className="cart-item",n.dataset.slug=e;const i=s*l;return n.innerHTML=`
    <img src="${a}" alt="${t}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${t}</p>
      <p class="cart-item__line">
        <span class="cart-item__price">$${s.toLocaleString()} x ${l}</span>
        <span class="cart-item__total">$${i.toLocaleString()}</span>
      </p>
    </div>
    <button class="cart-item__remove" aria-label="Remove ${t}">
      <img src="/ecommerce-product-page/assets/images/icon-delete.svg" alt="Remove item" />
    </button>
  `,n.querySelector(".cart-item__remove").addEventListener("click",()=>{E(e)}),n}function q(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function t(){const{items:s}=x();e.innerHTML=`
      <div class="cart-modal__header">
        <h2 class="cart-modal__title">Cart (${s.length})</h2>
      </div>

      <div class="cart-modal__items"></div>

      <div class="cart-modal__checkout"></div>
    `;const l=e.querySelector(".cart-modal__items");s.length===0?l.innerHTML='<p class="cart-modal__empty">Your cart is empty.</p>':s.forEach(n=>{l.appendChild(S({...n}))});const a=$({label:"Checkout",variant:"primary"});a.addEventListener("click",()=>{if(s.length===0)alert("Your cart is empty. Add something before checking out!");else{const n=s.map(o=>`${o.name}
$${o.price.toLocaleString()} x ${o.qty} = $${(o.price*o.qty).toLocaleString()}`).join(`

`),i=s.reduce((o,m)=>o+m.price*m.qty,0);alert(`Order Summary:

${n}

Total: $${i.toLocaleString()}`)}}),e.querySelector(".cart-modal__checkout").appendChild(a)}return t(),document.addEventListener("cart:updated",t),e}function C(e){let t=0;const s=document.createElement("div");s.className="lightbox",s.innerHTML=`
    <div class="lightbox__main">
      <img src="${e[0].full}" alt="Product image" class="lightbox__image" tabindex="0" />
    </div>
    <div class="lightbox__thumbnails">
      ${e.map((r,c)=>`
        <img src="${r.thumbnail}"
             data-full="${r.full}"
             alt="Thumbnail ${c+1}"
             class="lightbox__thumb${c===0?" is-active":""}"
             tabindex="0" />
      `).join("")}
    </div>
    <div class="lightbox__modal" aria-modal="true" role="dialog" style="display:none;">
      <button class="lightbox__close" aria-label="Close">
        <img src="/ecommerce-product-page/assets/images/icon-close.svg" alt="Close X"/>
      </button>
      <button class="lightbox__chevron lightbox__chevron--prev" aria-label="Previous">
        <img src="/ecommerce-product-page/assets/images/icon-previous.svg" alt="Previous"/>
      </button>
      <div class="lightbox__modal-content">
        <img src="" alt="Enlarged image" class="lightbox__modal-image"/>
      </div>
      <div class="lightbox__thumbnails">
        ${e.map((r,c)=>`
          <img src="${r.thumbnail}"
               data-full="${r.full}"
               alt="Thumbnail ${c+1}"
               class="lightbox__modal-thumb${c===0?" is-active":""}"
               tabindex="0" />
        `).join("")}
      </div>
      <button class="lightbox__chevron lightbox__chevron--next" aria-label="Next">
        <img src="/ecommerce-product-page/assets/images/icon-next.svg" alt="Next"/>
      </button>
    </div>
  `;const l=s.querySelector(".lightbox__image"),a=s.querySelectorAll(".lightbox__thumb"),n=s.querySelector(".lightbox__modal"),i=s.querySelector(".lightbox__modal-image"),o=s.querySelectorAll(".lightbox__modal-thumb"),m=s.querySelector(".lightbox__close"),_=s.querySelector(".lightbox__chevron--prev"),y=s.querySelector(".lightbox__chevron--next");a.forEach((r,c)=>{r.addEventListener("click",()=>u(c)),r.addEventListener("keydown",g=>{(g.key==="Enter"||g.key===" ")&&u(c)})}),o.forEach((r,c)=>{r.addEventListener("click",()=>u(c)),r.addEventListener("keydown",g=>{(g.key==="Enter"||g.key===" ")&&u(c)})});function u(r){t=r,l.src=e[r].full,a.forEach(c=>c.classList.remove("is-active")),a[r].classList.add("is-active"),o.forEach(c=>c.classList.remove("is-active")),o[r].classList.add("is-active"),n.style.display==="flex"&&(i.src=e[r].full)}function b(){n.style.display="flex",i.src=e[t].full}l.addEventListener("click",b),l.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&b()});function v(r){let c=(t+r+e.length)%e.length;u(c)}return _.addEventListener("click",()=>v(-1)),y.addEventListener("click",()=>v(1)),document.addEventListener("keydown",r=>{n.style.display==="flex"&&(r.key==="ArrowRight"&&v(1),r.key==="ArrowLeft"&&v(-1),r.key==="Escape"&&(n.style.display="none"))}),m.addEventListener("click",()=>n.style.display="none"),n.addEventListener("click",r=>{r.target===n&&(n.style.display="none")}),s}async function w(){try{const e=await fetch("/ecommerce-product-page/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector("#app"),t="/ecommerce-product-page/",s=L(),l=q();e&&e.append(s,l);const a=document.createElement("div");a.id="product-container",a.className="product-container",e.appendChild(a),document.querySelector("#cart-toggle")?.addEventListener("click",()=>{document.querySelector("#cart-modal")?.classList.toggle("is-visible")});try{const o=(await w()).find(m=>m.slug==="fall-limited-sneakers");if(o){const m=C(o.images.map(_=>({thumbnail:`${t}/${_.thumbnail}`,full:`${t}/${_.full}`})));a.appendChild(m)}}catch(i){console.error("❌ Could not load Lightbox images:",i)}p({slug:"fall-sneakers",name:"Fall Limited Edition Sneakers",price:125,image:`${t}/assets/images/image-product-1-thumbnail.jpg`},3),p({slug:"summer-sneakers",name:"Summer Sneakers",price:95,image:`${t}/assets/images/image-product-1-thumbnail.jpg`},2)});

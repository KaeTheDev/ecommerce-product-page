export function Navbar() {
    const nav = document.createElement('header');
    nav.className = 'navbar';

    const basePath = '/ecommerce-product-page';
    nav.innerHTML = `
    <nav class="navbar__container">

      <!-- Left side -->
      <div class="navbar__left">
        <button class="navbar__toggle" aria-label="Open Menu">
          <img src="${basePath}/assets/images/icon-menu.svg" alt="hamburger menu"/>
        </button>

        <a href="./" class="navbar__logo">
          <img src="${basePath}/assets/images/logo.svg" alt="sneakers logo"/>
        </a>

        <ul class="navbar__links">
           <button class="navbar__close" aria-label="Close Menu">
            <img src="${basePath}/assets/images/icon-close.svg" alt="close menu"/>
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
          <img src="${basePath}/assets/images/icon-cart.svg" alt="cart"/>
        </button>

        <a href="#" class="navbar__avatar">
          <img src="${basePath}/assets/images/image-avatar.png" alt="profile pic"/>
        </a>
      </div>

    </nav>
  `;

    const toggleBtn = nav.querySelector('.navbar__toggle');
    const closeBtn = nav.querySelector(".navbar__close");
    const links = nav.querySelector('.navbar__links');

    toggleBtn.addEventListener('click', () => {
        links.classList.toggle('is-open');
    });

    closeBtn.addEventListener("click", () => {
        links.classList.remove("is-open");
    });

    return nav;
}
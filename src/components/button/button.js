export function createButton({ label, variant = 'primary', type = 'button', icon = '' }) {
    const btn = document.createElement('button');
    btn.className = `btn btn--${variant}`; // <-- BEM matches your SCSS
    btn.type = type;
    btn.innerHTML = `
      <span class="btn__label">${label}</span>
      ${icon ? `<span class="btn__icon">${icon}</span>` : ''}
    `;
    return btn;
  }  
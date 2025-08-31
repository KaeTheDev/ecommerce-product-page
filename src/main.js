import './layout.js'; // loads styles

import { Navbar } from './components/navbar/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');

    // Create Navbar
    const navbar = Navbar();

    if(app) app.append(navbar);

});
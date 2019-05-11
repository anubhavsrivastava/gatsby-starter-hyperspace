import React from 'react';

import '../assets/sass/main.scss';
const Header = () => (
  <header id="header">
    <a href="/" class="title">
      Hyperspace
    </a>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/generic">Generic</a>
        </li>
        <li>
          <a href="/elements" class="active">
            Elements
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

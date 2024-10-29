import React from 'react';

import './Header.css';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
        <div className="container">
            <SearchBar />
            <CartButton />
        </div>
    </header>
  );
}

export default Header;

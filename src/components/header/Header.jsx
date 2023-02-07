import React, { useState } from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav-logo">Alvin</a>
        </nav>
    </header>
  )
}

export default Header
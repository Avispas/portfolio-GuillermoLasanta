import React from 'react';
import Contact from './Contact';
import { Link, Route, Routes } from 'react-router-dom';
import App from './App';

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='header__ul'>
          <li className='header__ul--li'>
            <Link to="/home">Home</Link>
          </li>
          <li className='header__ul--li'>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
      <h1 className='header__h1'>Portfolio</h1>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/home" element={<App />} /> */}
      </Routes>
    </header>
  );
}

export default Header;

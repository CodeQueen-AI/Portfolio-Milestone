"use client";
import Link from 'next/link';
import { useState } from 'react';
import './page.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <Link href="/">
        <span className="logo">Portfolio</span>
      </Link>
      {/* Hamburger Icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><Link href="/"><span>HOME</span></Link></li>
        <li><Link href="/About"><span>ABOUT</span></Link></li>
        <li><Link href="/Skills"><span>SKILLS</span></Link></li>
        <li><Link href="/Projects"><span>PORTFOLIO</span></Link></li>
        <li><Link href="/Contact"><span>CONTACT</span></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if link is active
  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="text-primary">Food-Dynasty</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-links desktop-menu">
          <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>ACCUEIL</Link>
          <a href="/#about" className="nav-item">À PROPOS</a>
          <a href="/#service" className="nav-item">SERVICES</a>
          <Link to="/menu" className={`nav-item ${isActive('/menu') ? 'active' : ''}`}>MENU</Link>
          <Link to="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>CONTACT</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
           <span className="logo"><span className="text-primary">Food-</span>Dynasty</span>
           <div className="close-btn" onClick={closeMenu}>
             <FaTimes />
           </div>
        </div>
        <div className="mobile-links">
          <Link to="/" className={`mobile-item ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>ACCUEIL</Link>
          <a href="/#about" className="mobile-item" onClick={closeMenu}>À PROPOS</a>
          <a href="/#service" className="mobile-item" onClick={closeMenu}>SERVICES</a>
          <Link to="/menu" className={`mobile-item ${isActive('/menu') ? 'active' : ''}`} onClick={closeMenu}>MENU</Link>
          <Link to="/contact" className={`mobile-item ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>CONTACT</Link>
        </div>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isMobileMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;

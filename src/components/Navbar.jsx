import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle navigation to sections on home page
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // If we're already on the home page, just scroll
    if (location.pathname === '/' || location.pathname === '') {
      scrollToSection();
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(scrollToSection, 100);
    }
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
          <button onClick={(e) => handleSectionClick(e, 'about')} className="nav-item">À PROPOS</button>
          <button onClick={(e) => handleSectionClick(e, 'service')} className="nav-item">SERVICES</button>
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
          <button onClick={(e) => handleSectionClick(e, 'about')} className="mobile-item">À PROPOS</button>
          <button onClick={(e) => handleSectionClick(e, 'service')} className="mobile-item">SERVICES</button>
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

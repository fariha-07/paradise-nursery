import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Calculate total number of plant items dynamically from Redux store
  const cartItems = useSelector((state) => state.cart?.items || []);
  const totalPlantCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon-wrapper">
            <svg
              className="brand-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22v-9" />
              <path d="M12 13a5 5 0 0 1 5-5c2.5 0 4 1.5 4 4a5 5 0 0 1-5 5h-4Z" />
              <path d="M12 13a5 5 0 0 0-5-5C4.5 8 3 9.5 3 12a5 5 0 0 0 5 5h4Z" />
            </svg>
          </div>
          <div className="brand-text-group">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-tagline">Where Green Meets Serenity</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`navbar-nav ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/plants"
            className={`nav-link ${isActive('/plants') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Plants
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Cart Icon Link with Dynamic Badge */}
          <Link
            to="/cart"
            className={`nav-cart-link ${isActive('/cart') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="View Shopping Cart"
          >
            <div className="cart-icon-container">
              <svg
                className="cart-svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="cart-badge-count" data-testid="cart-count">
                {totalPlantCount}
              </span>
            </div>
            <span className="cart-label-text">Cart</span>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

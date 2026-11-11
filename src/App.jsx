import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import './App.css';

// Landing Page Component
function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/plants');
  };

  return (
    <div className="landing-page-root">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with plant-themed background */}
      <section className="landing-hero-section">
        <div className="landing-hero-overlay"></div>
        <div className="landing-hero-content container">
          <div className="landing-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="16"
              height="16"
            >
              <path d="M12 22v-9" />
              <path d="M12 13a5 5 0 0 1 5-5c2.5 0 4 1.5 4 4a5 5 0 0 1-5 5h-4Z" />
              <path d="M12 13a5 5 0 0 0-5-5C4.5 8 3 9.5 3 12a5 5 0 0 0 5 5h4Z" />
            </svg>
            <span>Welcome to Paradise Nursery</span>
          </div>

          <h1 className="landing-title">
            Where Green Meets <span className="highlight-text">Serenity</span>
          </h1>

          <p className="landing-description">
            Transform your living spaces into flourishing botanical sanctuaries. 
            At Paradise Nursery, we nurture premium houseplants, aromatic herbs, and drought-hardy 
            succulents grown with sustainable love and guaranteed to arrive thriving at your doorstep.
          </p>

          <div className="landing-cta-group">
            <button
              type="button"
              className="get-started-btn"
              onClick={handleGetStartedClick}
            >
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="20"
                height="20"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <Link to="/about" className="learn-more-btn">
              Learn About Us
            </Link>
          </div>

          {/* Value Propositions Ribbon */}
          <div className="landing-highlights-ribbon">
            <div className="highlight-pill">
              <span className="highlight-icon">🌿</span>
              <span>18+ Curated Plant Varieties</span>
            </div>
            <div className="highlight-pill">
              <span className="highlight-icon">📦</span>
              <span>100% Eco-Safe Shipping</span>
            </div>
            <div className="highlight-pill">
              <span className="highlight-icon">✨</span>
              <span>Healthy Arrival Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded About Us Section on Landing Page */}
      <section className="landing-about-section">
        <AboutUs hideNavbar={true} />
      </section>

      {/* Footer */}
      <footer className="paradise-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
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
                <path d="M12 22v-9" />
                <path d="M12 13a5 5 0 0 1 5-5c2.5 0 4 1.5 4 4a5 5 0 0 1-5 5h-4Z" />
                <path d="M12 13a5 5 0 0 0-5-5C4.5 8 3 9.5 3 12a5 5 0 0 0 5 5h4Z" />
              </svg>
              <span>Paradise Nursery</span>
            </div>
            <p>Bringing natural tranquility and cleaner air to households everywhere.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/plants">All Plants</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} Paradise Nursery. All Rights Reserved.</p>
            <p className="footer-sub">Final Project Submission for Coursera Graded Evaluation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="app-main-wrapper">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Wildcard fallback redirects to Landing */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

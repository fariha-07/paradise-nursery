import React from 'react';
import Navbar from './src/Navbar';

const AboutUs = ({ hideNavbar = false }) => {
  return (
    <div className="about-us-wrapper">
      {/* Show Navbar when rendered as standalone page */}
      {!hideNavbar && <Navbar />}

      <div className="about-us-container container">
        {/* Header Section */}
        <section className="about-header-section">
          <span className="about-pill-badge">About Paradise Nursery</span>
          <h1 className="about-main-title">Cultivating Serenity & Life in Every Home</h1>
          <p className="about-lead-text">
            Welcome to <strong>Paradise Nursery</strong>, your sanctuary for vibrant, living greenery. 
            We believe that every leaf has the power to soothe the mind, purify the air, and bring natural elegance to modern spaces.
          </p>
        </section>

        {/* Company Introduction Grid */}
        <section className="about-intro-grid">
          <div className="about-card intro-card">
            <div className="about-icon-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="28"
                height="28"
              >
                <path d="M12 22v-9" />
                <path d="M12 13a5 5 0 0 1 5-5c2.5 0 4 1.5 4 4a5 5 0 0 1-5 5h-4Z" />
                <path d="M12 13a5 5 0 0 0-5-5C4.5 8 3 9.5 3 12a5 5 0 0 0 5 5h4Z" />
              </svg>
            </div>
            <h2>Who We Are</h2>
            <p>
              Founded by devoted botanists and green enthusiasts, Paradise Nursery started with a simple belief:
              integrating nature into daily life should be seamless, rewarding, and accessible to everyone. From humble seedlings
              nurtured in sustainable greenhouses to mature statement plants, our botanical team treats every specimen with precision and love.
            </p>
          </div>

          <div className="about-card mission-card">
            <div className="about-icon-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="28"
                height="28"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 4.24 4.24" />
                <path d="m14.83 9.17 4.24-4.24" />
                <path d="m14.83 14.83 4.24 4.24" />
                <path d="m9.17 14.83-4.24 4.24" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to foster greener, healthier living spaces by delivering top-quality houseplants directly to plant enthusiasts.
              We strive to empower both novice plant parents and experienced collectors with the healthiest plants, eco-friendly supplies,
              and expert care knowledge to nurture thriving indoor ecosystems.
            </p>
          </div>

          <div className="about-card vision-card">
            <div className="about-icon-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="28"
                height="28"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h2>Our Vision</h2>
            <p>
              We envision urban landscapes and modern households transformed into lush, oxygen-rich indoor sanctuaries.
              Through sustainable horticulture, biodiverse cultivation, and plastic-free packaging, we lead the movement toward an
              environmentally conscious and harmonious future.
            </p>
          </div>
        </section>

        {/* Why Choose Paradise Nursery */}
        <section className="why-choose-section">
          <div className="section-title-wrap">
            <span className="category-indicator"></span>
            <h2 className="section-heading">Why Choose Paradise Nursery?</h2>
          </div>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-number">01</div>
              <h3>100% Healthy Arrival Guarantee</h3>
              <p>Every plant travels in temperature-controlled, custom protective packaging and arrives in pristine, vibrant condition.</p>
            </div>
            <div className="reason-item">
              <div className="reason-number">02</div>
              <h3>Pest-Free Greenhouse Care</h3>
              <p>Our plants are organically cultivated, inspected by certified horticulturists, and guaranteed free of common pests.</p>
            </div>
            <div className="reason-item">
              <div className="reason-number">03</div>
              <h3>Expert Plant Doctor Guidance</h3>
              <p>Access lifetime advice, watering schedules, and light diagnostic tips from our team of professional plant doctors.</p>
            </div>
            <div className="reason-item">
              <div className="reason-number">04</div>
              <h3>Sustainable & Plastic-Free</h3>
              <p>From biodegradable nursery pots to recycled cardboard liners, we prioritize mother Earth in every single shipment.</p>
            </div>
          </div>
        </section>

        {/* Our Plants & Services */}
        <section className="plants-services-section">
          <div className="section-title-wrap">
            <span className="category-indicator"></span>
            <h2 className="section-heading">Our Plants and Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Air-Purifying Houseplants</h3>
              <p>
                Scientifically proven botanical varieties including Snake Plants, Spider Plants, and Peace Lilies that filter harmful volatile organic compounds (VOCs).
              </p>
            </div>
            <div className="service-card">
              <h3>Aromatic & Kitchen Herbs</h3>
              <p>
                Fragrant Tuscan Rosemary, English Lavender, and Sweet Mint suited for sunny balconies, window sills, and gourmet cooking.
              </p>
            </div>
            <div className="service-card">
              <h3>Drought-Tolerant Succulents</h3>
              <p>
                Low-maintenance architectural cacti, Aloe Vera, and Echeveria varieties requiring water only once every two to three weeks.
              </p>
            </div>
            <div className="service-card">
              <h3>Bespoke Corporate Plantscaping</h3>
              <p>
                Tailored greenery styling and ongoing maintenance plans for offices, cafes, boutique studios, and creative workspaces.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

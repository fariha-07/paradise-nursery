import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './src/CartSlice';
import Navbar from './src/Navbar';

export const plantsArray = [
  {
    category: 'Indoor Plants',
    description: 'Air-purifying, lush foliage plants that flourish inside your home or office space.',
    plants: [
      {
        id: 'indoor-1',
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
        description: 'Produces oxygen at night and efficiently filters indoor toxins like benzene and formaldehyde.',
        cost: '$15',
        rating: 4.9,
      },
      {
        id: 'indoor-2',
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&w=600&q=80',
        description: 'Broad, glossy emerald leaves that eliminate airborne impurities while adding dramatic flair.',
        cost: '$18',
        rating: 4.8,
      },
      {
        id: 'indoor-3',
        name: 'Monstera Deliciosa',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
        description: 'Iconic Swiss cheese tropical foliage that transforms any living room into an oasis.',
        cost: '$22',
        rating: 5.0,
      },
      {
        id: 'indoor-4',
        name: 'Fiddle Leaf Fig',
        image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=600&q=80',
        description: 'Spectacular violin-shaped leaves favored by interior designers worldwide.',
        cost: '$25',
        rating: 4.7,
      },
      {
        id: 'indoor-5',
        name: 'Pothos',
        image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
        description: 'Hearty cascading vine plant ideal for hanging baskets and low-light corners.',
        cost: '$12',
        rating: 4.9,
      },
      {
        id: 'indoor-6',
        name: 'Calathea',
        image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80',
        description: 'Artistic patterned foliage whose leaves rise each evening in meditative prayer.',
        cost: '$20',
        rating: 4.8,
      },
    ],
  },
  {
    category: 'Outdoor Plants',
    description: 'Fragrant, hearty botanicals that thrive on sunny balconies, patios, and garden borders.',
    plants: [
      {
        id: 'outdoor-1',
        name: 'English Lavender',
        image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80',
        description: 'Soothing floral fragrance that calms the senses and attracts beneficial pollinators.',
        cost: '$16',
        rating: 4.9,
      },
      {
        id: 'outdoor-2',
        name: 'Tuscan Rosemary',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80',
        description: 'Aromatic evergreen needle foliage essential for culinary creations and sunlit patios.',
        cost: '$14',
        rating: 4.8,
      },
      {
        id: 'outdoor-3',
        name: 'English Ivy',
        image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80',
        description: 'Resilient climbing evergreen vine providing lush vertical garden coverage.',
        cost: '$13',
        rating: 4.6,
      },
      {
        id: 'outdoor-4',
        name: 'Sweet Mint',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
        description: 'Crisp, invigorating herbal scent with ultra-fast growth and endless tea possibilities.',
        cost: '$10',
        rating: 4.9,
      },
      {
        id: 'outdoor-5',
        name: 'Star Jasmine',
        image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=600&q=80',
        description: 'Heavily perfumed white flowers that blossom abundantly through spring and summer.',
        cost: '$24',
        rating: 5.0,
      },
      {
        id: 'outdoor-6',
        name: 'Silver Dollar Eucalyptus',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
        description: 'Silvery-blue aromatic leaves filled with invigorating therapeutic essential oils.',
        cost: '$19',
        rating: 4.8,
      },
    ],
  },
  {
    category: 'Succulent Plants',
    description: 'Drought-tolerant, sculptural plants that require minimal water and care.',
    plants: [
      {
        id: 'succulent-1',
        name: 'Aloe Vera',
        image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=600&q=80',
        description: 'Succulent spear foliage containing soothing natural medicinal gel for burns and skin.',
        cost: '$11',
        rating: 4.9,
      },
      {
        id: 'succulent-2',
        name: 'Jade Plant',
        image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80',
        description: 'Classic Feng Shui money tree symbol of good fortune with plump, shiny leaves.',
        cost: '$15',
        rating: 4.8,
      },
      {
        id: 'succulent-3',
        name: 'Echeveria Elegans',
        image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80',
        description: 'Exquisite rosette shape in soft pastel tones, nicknamed the Mexican Gem.',
        cost: '$12',
        rating: 4.9,
      },
      {
        id: 'succulent-4',
        name: 'Zebra Haworthia',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
        description: 'Architectural succulent with prominent white zebra stripes on dark spiky leaves.',
        cost: '$14',
        rating: 4.7,
      },
      {
        id: 'succulent-5',
        name: 'Golden Barrel Cactus',
        image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80',
        description: 'Striking spherical desert cactus adorned with luminous golden spines.',
        cost: '$22',
        rating: 4.8,
      },
      {
        id: 'succulent-6',
        name: 'Panda Plant',
        image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80',
        description: 'Velvety silver leaves tipped with adorable chocolate-brown markings.',
        cost: '$13',
        rating: 4.7,
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const [addedToCartState, setAddedToCartState] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState('');

  // Check if plant is in cart either via Redux store or local state
  const isPlantInCart = (plantName) => {
    return (
      cartItems.some((item) => item.name === plantName) ||
      Boolean(addedToCartState[plantName])
    );
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCartState((prev) => ({
      ...prev,
      [plant.name]: true,
    }));

    // Flash notification
    setNotification(`Added "${plant.name}" to your cart!`);
    setTimeout(() => {
      setNotification('');
    }, 2800);
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? plantsArray
      : plantsArray.filter((cat) => cat.category === selectedCategory);

  return (
    <div className="product-list-page">
      {/* Navigation Bar */}
      <Navbar />

      {/* Floating notification */}
      {notification && (
        <div className="cart-notification-banner" role="status">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="18"
            height="18"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{notification}</span>
        </div>
      )}

      {/* Hero Header for Products */}
      <section className="product-hero-section">
        <div className="product-hero-content">
          <span className="hero-pill-badge">Handpicked Greenery</span>
          <h1 className="product-hero-title">Our Plant Collection</h1>
          <p className="product-hero-subtitle">
            Breathe life, calm, and pure oxygen into your sanctuary with our healthy, sustainably grown plants.
          </p>

          {/* Category Filter Tabs */}
          <div className="category-tabs-container">
            <button
              className={`category-tab-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Plants ({plantsArray.reduce((acc, c) => acc + c.plants.length, 0)})
            </button>
            {plantsArray.map((categoryGroup) => (
              <button
                key={categoryGroup.category}
                className={`category-tab-btn ${selectedCategory === categoryGroup.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(categoryGroup.category)}
              >
                {categoryGroup.category} ({categoryGroup.plants.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories & Cards Grid */}
      <main className="product-grid-main container">
        {filteredCategories.map((categoryGroup) => (
          <section key={categoryGroup.category} className="category-section">
            <div className="category-header">
              <div className="category-title-wrap">
                <span className="category-indicator"></span>
                <h2 className="category-title">{categoryGroup.category}</h2>
              </div>
              <p className="category-description">{categoryGroup.description}</p>
            </div>

            <div className="plants-grid">
              {categoryGroup.plants.map((plant) => {
                const added = isPlantInCart(plant.name);
                return (
                  <div key={plant.id || plant.name} className="plant-card">
                    <div className="plant-image-container">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-thumbnail"
                        loading="lazy"
                      />
                      <span className="plant-price-badge">{plant.cost}</span>
                      <span className="plant-category-tag">{categoryGroup.category}</span>
                    </div>

                    <div className="plant-info-container">
                      <div className="plant-header-row">
                        <h3 className="plant-name">{plant.name}</h3>
                        <div className="plant-rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#f59e0b"
                            stroke="#f59e0b"
                            width="14"
                            height="14"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span>{plant.rating}</span>
                        </div>
                      </div>

                      <p className="plant-description">{plant.description}</p>

                      <div className="plant-footer-row">
                        <div className="plant-price-text">
                          <span className="price-label">Price:</span>
                          <span className="price-value">{plant.cost}</span>
                        </div>

                        <button
                          type="button"
                          className={`add-to-cart-btn ${added ? 'btn-added' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                          aria-label={added ? `${plant.name} already in cart` : `Add ${plant.name} to cart`}
                        >
                          {added ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                width="16"
                                height="16"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              Added to Cart
                            </>
                          ) : (
                            <>
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
                                <circle cx="8" cy="21" r="1" />
                                <circle cx="19" cy="21" r="1" />
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                              </svg>
                              Add to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ProductList;

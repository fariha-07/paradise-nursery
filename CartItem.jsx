import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateCartQuantity, updateQuantity, clearCart } from './src/CartSlice';
import Navbar from './src/Navbar';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const numericCost =
        typeof item.cost === 'string'
          ? parseFloat(item.cost.replace(/[^0-9.]/g, ''))
          : parseFloat(item.cost);
      total += (numericCost || 0) * (item.quantity || 0);
    });
    return total.toFixed(2);
  };

  // Calculate total cost for an individual item (unit price * quantity)
  const calculateTotalCost = (item) => {
    const numericCost =
      typeof item.cost === 'string'
        ? parseFloat(item.cost.replace(/[^0-9.]/g, ''))
        : parseFloat(item.cost);
    return ((numericCost || 0) * (item.quantity || 0)).toFixed(2);
  };

  // Calculate total number of plants in the shopping cart
  const calculateTotalPlantsCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  // Handle Continue Shopping navigation
  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (onContinueShopping) {
      onContinueShopping(e);
    } else {
      navigate('/plants');
    }
  };

  // Handle Checkout click -> Display "Coming Soon"
  const handleCheckoutShopping = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    alert('Coming Soon');
  };

  // Increment item quantity
  const handleIncrement = (item) => {
    const newQuantity = (item.quantity || 1) + 1;
    dispatch(updateCartQuantity({ name: item.name, quantity: newQuantity }));
  };

  // Decrement item quantity or remove if quantity reaches zero
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateCartQuantity({ name: item.name, quantity: newQuantity }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item completely from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Clear all items from cart
  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-page-wrapper">
      {/* Navigation bar visible on Cart page */}
      <Navbar />

      <main className="cart-main-container container">
        <div className="cart-header-section">
          <div className="cart-header-title-group">
            <h1 className="cart-main-title">Your Plant Shopping Cart</h1>
            <p className="cart-summary-text">
              Review your selected greenery before proceeding to checkout.
            </p>
          </div>

          <div className="cart-stats-bar">
            <div className="stat-pill">
              <span className="stat-label">Total Plants:</span>
              <span className="stat-value" data-testid="total-plants-count">
                {calculateTotalPlantsCount()}
              </span>
            </div>
            <div className="stat-pill stat-total">
              <span className="stat-label">Cart Total:</span>
              <span className="stat-value" data-testid="cart-total-amount">
                ${calculateTotalAmount()}
              </span>
            </div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart-view">
            <div className="empty-cart-icon-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="72"
                height="72"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h2 className="empty-cart-title">Your Cart is Currently Empty</h2>
            <p className="empty-cart-message">
              Looks like you haven't added any lovely plants to your cart yet. Discover our fresh indoor, outdoor, and succulent collections!
            </p>
            <button
              type="button"
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
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
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content-grid">
            {/* Cart Items List */}
            <div className="cart-items-list">
              {cart.map((item) => (
                <article key={item.name} className="cart-item-card">
                  <div className="cart-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-thumbnail"
                    />
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <button
                        type="button"
                        className="item-delete-btn"
                        onClick={() => handleRemove(item)}
                        title={`Remove ${item.name} from cart`}
                        aria-label={`Remove ${item.name} from cart`}
                      >
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
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        <span className="delete-text">Delete</span>
                      </button>
                    </div>

                    <div className="cart-item-pricing-row">
                      <span className="unit-price-label">Unit Price:</span>
                      <span className="unit-price-value">
                        {typeof item.cost === 'string' && item.cost.startsWith('$')
                          ? item.cost
                          : `$${item.cost}`}
                      </span>
                    </div>

                    <div className="cart-item-controls-row">
                      {/* Quantity Controller */}
                      <div className="quantity-controls-group">
                        <span className="quantity-label">Quantity:</span>
                        <div className="quantity-stepper">
                          <button
                            type="button"
                            className="quantity-btn decrement-btn"
                            onClick={() => handleDecrement(item)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            -
                          </button>
                          <span
                            className="quantity-number-display"
                            data-testid={`quantity-${item.name}`}
                          >
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="quantity-btn increment-btn"
                            onClick={() => handleIncrement(item)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total cost for this plant */}
                      <div className="item-subtotal-group">
                        <span className="subtotal-label">Subtotal:</span>
                        <span className="subtotal-value">${calculateTotalCost(item)}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <div className="cart-list-actions-bar">
                <button
                  type="button"
                  className="clear-cart-link-btn"
                  onClick={handleClearCart}
                >
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
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  Clear Shopping Cart
                </button>
              </div>
            </div>

            {/* Order Summary & Actions Card */}
            <aside className="cart-summary-sidebar">
              <div className="summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-line">
                  <span>Total Number of Plants:</span>
                  <span className="summary-bold">{calculateTotalPlantsCount()}</span>
                </div>

                <div className="summary-line">
                  <span>Estimated Shipping:</span>
                  <span className="summary-free">FREE</span>
                </div>

                <div className="summary-line">
                  <span>Eco-Packaging:</span>
                  <span className="summary-free">FREE</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-line summary-total-row">
                  <span className="summary-total-label">Total Amount:</span>
                  <span className="summary-total-value">${calculateTotalAmount()}</span>
                </div>

                <div className="cart-actions-column">
                  {/* Checkout Button */}
                  <button
                    type="button"
                    className="checkout-btn"
                    onClick={handleCheckoutShopping}
                  >
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
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    Checkout
                  </button>

                  {/* Continue Shopping Button */}
                  <button
                    type="button"
                    className="continue-shopping-btn"
                    onClick={handleContinueShopping}
                  >
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
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Continue Shopping
                  </button>
                </div>

                <div className="summary-guarantee-box">
                  <div className="guarantee-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2d6a4f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="18"
                      height="18"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>100% Healthy Arrival Guarantee</span>
                  </div>
                  <div className="guarantee-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2d6a4f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="18"
                      height="18"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Eco-friendly sustainable nursery</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartItem;

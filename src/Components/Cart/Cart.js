import React from 'react';
import sha512 from 'js-sha512';
import axios from 'axios';
import './Cart.css';

function Cart() {
  // Example cart data (replace with dynamic data from state or props)
  const cartItems = [
    {
      id: 1,
      name: 'Hoodie',
      price: 50.0,
      quantity: 2,
      image: './img/product01.png',
    },
    {
      id: 2,
      name: 'T-Shirt',
      price: 25.0,
      quantity: 1,
      image: './img/product02.png',
    },
  ];

  // Calculate subtotal, tax, shipping, and total
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = 5.0;
  const total = subtotal + tax + shipping;

  // Function to handle ABA Payway checkout with KHQR
  const handleCheckout = async () => {
    const merchantId = 'sokchanear0@gmail.com'; // Your Merchant ID
    const publicKey = 'c50a0dc2eecd834dca1c4bfc44c9977056a4eefc'; // Your Public Key
    const tranId = `TXN-${Date.now()}`; // Generate a unique transaction ID
    const reqTime = new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14); // Current timestamp in YYYYmmddHis format

    // Prepare items for the transaction
    const items = cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity.toString(),
      price: item.price.toFixed(2),
    }));
    const itemsBase64 = btoa(JSON.stringify(items)); // Base64 encode the items

    // Generate the hash
    const hashString = `${reqTime}${merchantId}${tranId}${total.toFixed(2)}${itemsBase64}`;
    const hash = sha512.hmac(publicKey, hashString);

    // Log the hash string and generated hash for debugging
    console.log('Hash String:', hashString);
    console.log('Generated Hash:', hash);

    // Prepare the request body
    const formData = new FormData();
    formData.append('req_time', reqTime);
    formData.append('merchant_id', merchantId);
    formData.append('tran_id', tranId);
    formData.append('amount', total.toFixed(2));
    formData.append('items', itemsBase64);
    formData.append('currency', 'USD'); // Change to KHR if needed
    formData.append('payment_option', 'khqr'); // Use 'khqr' for KHQR payment
    formData.append('hash', hash);

    // Log the request data for debugging
    console.log('Request Data:', {
      req_time: reqTime,
      merchant_id: merchantId,
      tran_id: tranId,
      amount: total.toFixed(2),
      items: itemsBase64,
      currency: 'USD',
      payment_option: 'khqr',
      hash: hash,
    });

    try {
      // Make the API request to ABA Payway
      const response = await axios.post(
        'https://checkout-sandbox.payway.com.kh/api/payment-gateway/v1/payments/purchase', // Sandbox URL
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const data = response.data;
      if (data.status.code === '00') {
        // Handle KHQR response
        if (data.qrString) {
          // Display the KHQR code to the user
          alert('Scan the KHQR code to complete the payment.');
          console.log('KHQR Code:', data.qrString);
          // You can use a QR code library to render the KHQR code on the screen
        } else {
          alert('Checkout successful!');
        }
      } else {
        alert(`Checkout failed: ${data.status.message}`);
      }
    } catch (error) {
      console.error('Error during checkout:', error.response ? error.response.data : error.message);
      alert('An error occurred during checkout. Please try again.');
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        {/* Cart Items List */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-item">Remove</button>
              </div>
              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: $5.00</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <hr />
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <div className="cart-actions">
            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks to access Redux state and dispatch actions
import { removeItem, updateQuantity } from './CartSlice'; // Importing action creators from CartSlice
import './CartItem.css'; // Importing CSS for styling the CartItem component

// CartItem component definition
const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items); // Selecting cart items from the Redux state
  const dispatch = useDispatch(); // Getting the dispatch function to send actions to the Redux store

  // Function to calculate the total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    console.log(cart);
    cart.map(item => {
      let cost = parseInt(item.cost.substring(1, item.cost.length)); // Convert the cost string to an integer
      totalAmount = totalAmount + (cost * item.quantity); // Multiply cost by quantity and add to total amount
    });
    return totalAmount; // Return the calculated total amount
  };

  // Handle continue shopping action
  const handleContinueShopping = (e) => {
    onContinueShopping(e); // Call the passed function to handle continue shopping
  };

  // Handle incrementing the quantity of an item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ ...item, quantity: item.quantity + 1 })); // Dispatch action to increment the quantity
  };

  // Handle decrementing the quantity of an item
  const handleDecrement = (item) => {
    dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 })); // Dispatch action to decrement the quantity
  };

  // Handle removing an item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name)); // Dispatch action to remove the item by name
  };

  // Function to calculate the total cost for an individual item based on its quantity
  const calculateTotalCost = (item) => {
    let cost = parseInt(item.cost.substring(1, item.cost.length)); // Convert the cost string to an integer
    return (cost * item.quantity); // Multiply cost by quantity to get total cost
  };

  // Handle checkout action
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference'); // Placeholder for checkout functionality
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2> {/* Display total cart amount */}
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}> {/* Render each item in the cart */}
            <img className="cart-item-image" src={item.image} alt={item.name} /> {/* Display item image */}
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div> {/* Display item name */}
              <div className="cart-item-cost">{item.cost}</div> {/* Display item cost */}
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button> {/* Decrease quantity button */}
                <span className="cart-item-quantity-value">{item.quantity}</span> {/* Display current quantity */}
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button> {/* Increase quantity button */}
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div> {/* Display total cost for item */}
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button> {/* Delete item button */}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button> {/* Continue shopping button */}
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button> {/* Checkout button */}
      </div>
    </div>
  );
};

export default CartItem; // Export the CartItem component as the default export



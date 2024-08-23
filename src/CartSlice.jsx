import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice from Redux Toolkit

// Creating a slice for the cart
export const CartSlice = createSlice({
  name: 'cart', // Naming the slice 'cart'
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; // Destructure the action payload
        const existingItem = state.items.find(item => item.name === name); // Check if the item already exists
        if (existingItem) {
            existingItem.quantity++; // If item exists, increment the quantity
        } else {
            state.items.push({ name, image, cost, quantity: 1 }); // If not, add the item to the cart with quantity 1
        }
    },
    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload); // Filter out the item to be removed
    },
    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the action payload
        const itemToUpdate = state.items.find(item => item.name === name); // Find the item to update
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity; // Update the quantity if the item is found
        }
    },
  },
});

// Exporting the action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer to be used in the store
export default CartSlice.reducer;



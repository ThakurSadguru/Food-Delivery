/*import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = 'http://localhost:8080/api'; // Adjust to match your backend URL

const apiService = {
  // Get food items by category
  getFoodsByCategory: (category) => {
    return axios.get(`${API_BASE_URL}/foods/category/${category}`);
  },

  // Add item to cart
  addToCart: (userId, foodId, quantity) => {
    return axios.post(`${API_BASE_URL}/carts/add`, null, {
      params: { userId, foodId, quantity }
    });
  },

  // Get user's cart
  getCart: (userId) => {
    return axios.get(`${API_BASE_URL}/carts/user/${userId}`);
  },

  // Remove item from cart
  removeFromCart: (userId, foodId) => {
    return axios.post(`${API_BASE_URL}/carts/remove`, null, {
      params: { userId, foodId }
    });
  }
};

export default apiService;*/

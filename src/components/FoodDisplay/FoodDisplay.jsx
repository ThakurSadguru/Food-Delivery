
/*import React, { useState, useEffect } from 'react';
import apiService from '../../services/apiService';

const FoodDisplay = ({ category }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch food items based on the selected category
    apiService.getFoodsByCategory(category)
      .then((response) => {
        setFoods(response.data);  // Store food items in state
      })
      .catch((error) => {
        console.error('Error fetching food items', error);
      });
  }, [category]);  // Fetch foods again if the category changes

  const addToCart = (foodId) => {
    const userId = 1; // Get the user ID dynamically (e.g., from authentication state)
    const quantity = 1; // Default to adding 1 item
    
    apiService.addToCart(userId, foodId, quantity)
      .then((response) => {
        console.log(response.data); // Handle success
      })
      .catch((error) => {
        console.error('Error adding to cart', error);
      });
  };

  return (
    <div>
      {foods.length > 0 ? (
        foods.map(food => (
          <div key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>${food.price}</p>
            <button onClick={() => addToCart(food.id)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No foods available in this category.</p>
      )}
    </div>
  );
};

export default FoodDisplay;*/














import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {

  const {food_list}= useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
          
        })}
      </div>
    </div>
  )
}

export default FoodDisplay

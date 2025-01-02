import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-naming-rating">
          <p>{name}</p>
          <image src={assets.rating_starts} alt=""/>
        </div>
      </div>
      
    </div>
  )
}

export default FoodItem
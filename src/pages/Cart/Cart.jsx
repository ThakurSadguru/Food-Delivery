/*import React, { useState, useEffect } from 'react';
import apiService from '../../services/apiService';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userId = 1; // Replace with actual user ID
    apiService.getCart(userId)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items', error);
      });
  }, []);

  const removeItem = (foodId) => {
    const userId = 1; // Replace with actual user ID
    apiService.removeFromCart(userId, foodId)
      .then((response) => {
        console.log(response.data); // Handle success
        // Optionally re-fetch the cart items after removal
        apiService.getCart(userId).then((response) => setCartItems(response.data));
      })
      .catch((error) => {
        console.error('Error removing item from cart', error);
      });
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <p>{cartItem.food.name} - {cartItem.quantity}</p>
              <button onClick={() => removeItem(cartItem.food.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;*/






/*import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () =>{
  const{cartItems,food_list,removeFromCart, getTotalCartAmount}=useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className='cart'>
       <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt=''/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
        </div>    

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder='promo code' />
                  <button>Submit</button>
                </div>
              </div>
            </div>
            </div>  
    </div>
  )
}

export default Cart*/

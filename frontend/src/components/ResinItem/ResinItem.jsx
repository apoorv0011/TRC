//  import React, { useContext } from 'react'
//  import "./ResinItem.css"
//  import { assets } from '../../assets/assets'
 
//  const ResinItem = ({id,name,price,description,image}) => {

//   // const [itemCount,seItemCount]=useState(0)
//   const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);

//    return (
//      <div className="resin-item">
//       <div className="resin-item-image-container">
//         <img className='resin-item-image'  src={image} alt="" />
//         {
//           !cartItems[id]?
//           <img className='add' onClick={()=>addToCart(id)} src={assets.white_icon} alt="" />
//           :<div className='resin-item-coumter'>
//             <img onClick={()=>removeFromCart(id)} src={assets.red_icon}  alt="" />
//             <p>{itemCount}</p>
//             <img onClick={()=>addToCart(id)} src={assets.green_icon} alt="" />
//           </div>
          
//         }
//       </div>
//       <div className="resin-item-info">
//         <div className="resin-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="resin-item-desc">{description}</p>
//         <p className="resin-item-price">₹{price}</p>


//       </div>

       
//      </div>
//    )
//  }
 
//  export default ResinItem
 
import React, { useContext } from 'react';
import { StoreContext } from '../../context/ShowContext';
import "./ResinItem.css";
import { assets } from '../../assets/assets';

const ResinItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0; // Ensure itemCount has a fallback of 0 if not in the cart

  return (
    <div className="resin-item">
      <div className="resin-item-image-container">
        <img className='resin-item-image' src={image} alt="" />
        {
          itemCount === 0 ?
            <img className='add' onClick={() => addToCart(id)} src={assets.white_icon} alt="" />
            : <div className='resin-item-counter'>
                <img onClick={() => removeFromCart(id)} src={assets.red_icon} alt="" />
                <p>{itemCount}</p>
                <img onClick={() => addToCart(id)} src={assets.green_icon} alt="" />
              </div>
        }
      </div>
      <div className="resin-item-info">
        <div className="resin-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="resin-item-desc">{description}</p>
        <p className="resin-item-price">₹{price}</p>
      </div>
    </div>
  );
}

export default ResinItem;

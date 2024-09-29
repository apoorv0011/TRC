import React, { useContext } from 'react'
import "./ProductDisplay.css"
import { StoreContext } from '../../context/ShowContext'
import ResinItem from '../ResinItem/ResinItem'

const ProductDisplay = ({category}) => {
    const{product_list} = useContext(StoreContext)
  return (
    <div className='product_display' id='product_display'>
        <h1>NEW ARRIVALS</h1>
        <div className="product-display-list">
            {product_list.map((item,index)=>{
                return <ResinItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>

      
    </div>
  )
}

export default ProductDisplay

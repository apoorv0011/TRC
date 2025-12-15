import React, { useState } from 'react'
import "./ExploreMenu.css"
import { menu_list } from "../../data/menuData";

const ExploreMenu = () => {
  const [category, setCategory] = useState("All");
  
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>CHOOSE YOUR LOVE</h1>
      
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
              key={index} 
              className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
            >
              <div className="category-image-wrapper">
                <img src={item.menu_image} alt={item.menu_name} />
                <div className="category-overlay">
                  <span>Explore</span>
                </div>
              </div>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu

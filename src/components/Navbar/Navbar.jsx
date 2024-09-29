import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu,setmenu]=useState("Home");

  return (
    
    <div className="navbar">
        {/* <img src={assets.navlogo} alt="" className='logo'/> */}
        <div className="upperNav">
          <Link to='/'><div className="logo1"><img src={assets.navlogo} alt="" height="100px" className='logo'/></div></Link>
          <form className="searchBar" action=" ">
            <input type="text" id="searchBar" placeholder="Search" />
            <button className="button-info" /*onClick={this.addItem}*/>
            <img src={assets.search_icon} alt=""/>
            </button>
            </form>
            <div className="profile">
              {/* <img src={assets.profilelogo} alt=""/>
              <img src={assets.wishlist_icon} alt=""/> */}
              <Link to='/cart'><img src={assets.cart_icon} alt=""/></Link>
              <button onClick={()=>setShowLogin(true)} className='Signin-button' >Sign In</button>
            </div>
            </div>
            <div className="lowerNav">
              <ul>
                <Link to='/' onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
                <li onClick={()=>setmenu("Categories")} className={menu==="Categories"?"active":""}>Categories</li>
                <li onClick={()=>setmenu("Best Sellers")} className={menu==="Best Sellers"?"active":""}>Best Sellers</li>     
                <li onClick={()=>setmenu("New Arrivals")} className={menu==="New Arrivals"?"active":""}>New Arrivals</li>
                <li onClick={()=>setmenu("Trending")} className={menu==="Trending"?"active":""}>Trending</li>
                <li onClick={()=>setmenu("Gifts")} className={menu==="Gifts"?"active":""}>Gifts</li>
              </ul>
            </div>
    </div>
  )
}

export default Navbar

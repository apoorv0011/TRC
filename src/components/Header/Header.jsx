import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
        <div><img src={assets.bracelet} height="500px"  /></div>
            <div><img src={assets.pendant_4} height="500px" /></div>
          <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Header

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">

        <div>
          <img src="/products/bracelet.jpg" height="500px" alt="bracelet" />
        </div>

        <div>
          <img src="/products/pendant1.jpg" height="500px" alt="pendant" />
        </div>

        <button onClick={() => window.location.href='/shop'}>Shop Now</button>
      </div>
    </div>
  );
};

export default Header;

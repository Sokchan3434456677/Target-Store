import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
<div>

  <header>
    {/* TOP HEADER */}
    <div id="top-header">
      <div className="container">
        <ul className="header-links pull-left">
          <li><a href="#"><i className="fa fa-phone" /> +855-965-881-72</a></li>
          <li><a href="#"><i className="fa fa-envelope-o" /> sokchanear0@email.com</a></li>
          <li><a href="#"><i className="fa fa-map-marker" /> 1019 SenSok PP</a></li>
        </ul>
        <ul className="header-links pull-right">
          <li><a href="#"><i className="fa fa-dollar" /> USD</a></li>
          <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
        </ul>
      </div>
    </div>
    {/* /TOP HEADER */}
    {/* MAIN HEADER */}
    <div id="header">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* LOGO */}
          <div className="col-md-3">
            <div className="header-logo">
              <a href="#" className="logo">
                <img src="./img/logo1.png" alt />
              </a>
            </div>
          </div>
          {/* /LOGO */}
          {/* SEARCH BAR */}
          <div className="col-md-6">
            <div className="header-search">
              <form>
                <select className="input-select">
                  <option value={0}>All Categories</option>
                  <option value={1}>Category 01</option>
                  <option value={1}>Category 02</option>
                </select>
                <input className="input" placeholder="Search here" />
                <button className="search-btn">Search</button>
              </form>
            </div>
          </div>
          {/* /SEARCH BAR */}
          {/* ACCOUNT */}
          <div className="col-md-3 clearfix">
            <div className="header-ctn">
              {/* Wishlist */}
              <div>
                <a href="#">
                  <i className="fa fa-heart-o" />
                  <span>Your Wishlist</span>
                  <div className="qty">2</div>
                </a>
              </div>
              {/* /Wishlist */}
              {/* Cart */}
              <div className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
               <li>
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" />
                  </Link>
                </li>
                
                <span>Your Cart</span>
                  <div className="qty">3</div>
                </a>

              </div>
              {/* /Cart */}
              {/* Menu Toogle */}
              {/* <div className="menu-toggle">
                <a href="#">
                  <i className="fa fa-bars" />
                  <span>Menu</span>
                </a>
              </div> */}
              {/* /Menu Toogle */}
            </div>
          </div>
          {/* /ACCOUNT */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </div>
    {/* /MAIN HEADER */}
  </header>
</div>

  )
}

export default Header;

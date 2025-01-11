
import React from 'react';
import { Link } from 'react-router-dom';
import './Style/style.css';
import Section from './Section';
import Newletter from './Newletter';

function ProductAPI() {
  return (
    <div className="section">
      <Section/>
     
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* section title */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">TARGET STORE</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className="active"><a data-toggle="tab" href="#tab1">Hoodie</a></li>
                  <li><Link to="/t-shirt">T-Shirt</Link></li>
                  <li><Link to="/stussy-cap">Stussy-Cap</Link></li>
                  <li><Link to="/sweat-shorts">Sweat-Shorts</Link></li>
                  
                </ul>
              </div>
            </div>
          </div>
          {/* /section title */}
          {/* Products tab & slick */}
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                {/* tab */}
                <div id="tab1" className="tab-pane active">
                  <div className="products-slick" data-nav="#slick-nav-1">
                    {/* product */}
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product01.png" alt />
                        {/* <div className="product-label">
                          <span className="sale">-30%</span>
                          <span className="new">NEW</span>
                        </div> */}
                      </div>
                      <div className="product-body">
                        <p className="product-category">2 zipper hoodie </p>
                        <h3 className="product-name"><a href="#">Boxy Fit Premium quality Available instock Size 1 size 2 </a></h3>
                        <h4 className="product-price">$26.00 
                          {/* <del className="product-old-price">$990.00</del> */}
                        </h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                    {/* /product */}
                    {/* product */}
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product02.png" alt />
                        <div className="product-label">
                          {/* <span className="new">NEW</span> */}
                        </div>
                      </div>
                      <div className="product-body">
                        <p className="product-category">Stussy spider Hoodie 🕸️🕷️</p>
                        <h3 className="product-name"><a href="#">Black-light gray Available instock 🎱🎱</a></h3>
                        <h4 className="product-price">$14.00 
                          {/* <del className="product-old-price">$990.00</del> */}
                        </h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                    {/* /product */}
                    {/* product */}
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product03.png" alt />
                        <div className="product-label">
                          {/* <span className="sale">-30%</span> */}
                        </div>
                      </div>
                      <div className="product-body">
                        <p className="product-category">New deal 🙌</p>
                        <h3 className="product-name"><a href="#">Balaclava zipper Hoodie </a></h3>
                        <h4 className="product-price">$28.00 
                          {/* <del className="product-old-price">$990.00</del> */}
                        </h4>
                        <div className="product-rating">
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                    {/* /product */}
                    {/* product */}
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product04.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">VLONE SAKURA HOODIE 🌸</p>
                        <h3 className="product-name"><a href="#">It’s back instock 🫶🏻🌸❄️</a></h3>
                        <h4 className="product-price">$14.00 
                          {/* <del className="product-old-price">$990.00</del> */}
                        </h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                    {/* /product */}
                    {/* product */}
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product05.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Family 8 ball hoodie 🎱👻</p>
                        <h3 className="product-name"><a href="#">it’s instock </a></h3>
                        <h4 className="product-price">$14.00 
                          {/* <del className="product-old-price">$990.00</del> */}
                        </h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                    {/* /product */}
                  </div>
                  <div id="slick-nav-1" className="products-slick-nav" />
                </div>
                {/* /tab */}
              </div>
            </div>
          </div>
          {/* Products tab & slick */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
      <Newletter />
    </div>
  );
}

export default ProductAPI;
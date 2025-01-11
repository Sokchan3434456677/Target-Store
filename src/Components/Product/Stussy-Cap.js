
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css';
import Section from '../Section';
import Newletter from '../Newletter';

function StussyCap() {
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
                   <li><Link to="/hoodie">Hoodie</Link></li>
                  <li><Link to="/t-shirt">T-Shirt</Link></li>
                  <li><a data-toggle="tab" href="#tab1">Stussy-Cap</a></li>
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
                        <img src="./img/StussyCap.jpg" alt />
                        {/* <div className="product-label">
                          <span className="sale">-30%</span>
                          <span className="new">NEW</span>
                        </div> */}
                      </div>
                      <div className="product-body">
                        <p className="product-category">StussyCap </p>
                        <h3 className="product-name"><a href="#">Green Baseball cap Stussy</a></h3>
                        <h4 className="product-price">$10.00 
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
                        <img src="./img/StussyCap01.webp" alt />
                        <div className="product-label">
                          {/* <span className="new">NEW</span> */}
                        </div>
                      </div>
                      <div className="product-body">
                        <p className="product-category">StussyCap</p>
                        <h3 className="product-name"><a href="#">Stock Low Pro Cap in Cream</a></h3>
                        <h4 className="product-price">$10.00 
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
                        <img src="./img/StussyCAp02.webp" alt />
                        <div className="product-label">
                          {/* <span className="sale">-30%</span> */}
                        </div>
                      </div>
                      <div className="product-body">
                        <p className="product-category">StussyCap</p>
                        <h3 className="product-name"><a href="#">Stussy cap on sale low pro</a></h3>
                        <h4 className="product-price">$10.00 
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
                        <img src="./img/StussyCap03.jpg" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">StussyCap</p>
                        <h3 className="product-name"><a href="#">Stussy Strapback Cap</a></h3>
                        <h4 className="product-price">$10.00 
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
                        <img src="./img/StussyCap04.webp" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">StussyCap</p>
                        <h3 className="product-name"><a href="#">Stüssy Men's' Basic Strapback Baseball Cap in Blue</a></h3>
                        <h4 className="product-price">$10.00 
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

export default StussyCap;
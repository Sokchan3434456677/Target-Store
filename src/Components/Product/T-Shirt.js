import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css'
import Section from '../Section';
import Newletter from '../Newletter';
function TShirt() {
  return (

    
    <div>
        <Section/>
    
      <div className="section">
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
                  {/* <li className="active"><a data-toggle="tab" href="#tab1">Hoodie</a></li> */}
                  <li><a data-toggle="tab" href="#tab1">T-Shirt</a></li>
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
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="products-slick" data-nav="#slick-nav-2">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/product06.jpg" alt />
                          <div className="product-label">
                            {/* <span className="sale">-30%</span>
                            <span className="new">NEW</span> */}
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Ferrari 🐎🐎🐎</p>
                          <h3 className="product-name"><a href="#">- polo tee 
                                                                    * navy blue 
                                                                    * red 
                                                                    * white 
                                                                    * black 

                                                                    Size M L XL</a></h3>
                          <h4 className="product-price">$12.00 
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
                          <img src="./img/product07.jpg" alt />
                          <div className="product-label">
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Essentials Tee pink pink 💖💖</p>
                          <h3 className="product-name"><a href="#">Available instock now </a></h3>
                          <h4 className="product-price">$12.00 
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
                          <img src="./img/product08.jpg" alt />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">FUCK FAKE FRIENDS 👄</p>
                          <h3 className="product-name"><a href="#">Form boxy fit ❄️

                                                                    Grab your order 👣</a></h3>
                          <h4 className="product-price">$13.00 
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
                          <img src="./img/product09.jpg" alt />
                        </div>
                        <div className="product-body">
                          <p className="product-category">ITS TIME FOR 🫦</p>
                          <h3 className="product-name"><a href="#">Boxy fit 
                          100% cotton 250 gsm ❄️</a></h3>
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
                          <img src="./img/product10.jpg" alt />
                        </div>
                        <div className="product-body">
                          <p className="product-category">Stussy x Nike ✨🎱</p>
                          <h3 className="product-name"><a href="#">It’s back 
Stussy x Nike ✨🎱
Available  M L XL </a></h3>
                          <h4 className="product-price">$13.00 
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
                    <div id="slick-nav-2" className="products-slick-nav" />
                  </div>
                  {/* /tab */}
                </div>
              </div>
            </div>
            {/* /Products tab & slick */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      <Newletter />
    </div>
  );
}

export default TShirt;
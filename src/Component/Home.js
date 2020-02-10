import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-owl-carousel';

export default function Home() {
    return (
        <div>
            <div>
  <div className="container-fluid text-center" style={{backgroundColor:'#eaeaea'}}>
    <div className="logo">
      <h1><Link to="/"><b>T<br />H<br />E</b>FoodStuff Store<span>Your No 1 food vendor in Nigeria</span></Link></h1>
    </div>
    {/* <div className="head-t">
      <ul className="card">
        <li><a href="wishlist.html"><i className="fa fa-heart" aria-hidden="true" />Wishlist</a></li>
        <li><a href="login.html"><i className="fa fa-user" aria-hidden="true" />Login</a></li>
        <li><a href="register.html"><i className="fa fa-arrow-right" aria-hidden="true" />Register</a></li>
        <li><a href="about.html"><i className="fa fa-file-text-o" aria-hidden="true" />Order History</a></li>
        <li><a href="shipping.html"><i className="fa fa-ship" aria-hidden="true" />Shipping</a></li>
      </ul>	
    </div> */}
    <div className="header-ri">
      <ul className="social-top">
        <li><Link to="/" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true" /><span /></Link></li>
        <li><Link to="/" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true" /><span /></Link></li>
        <li><Link to="/" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true" /><span /></Link></li>
        <li><Link to="/" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true" /><span /></Link></li>
      </ul>	
    </div>
    <div className="nav-top">
      <nav className="navbar navbar-default">
        <div className="navbar-header nav_2">
          <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div> 
        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
          <ul className="nav navbar-nav ">
            <li><Link to="/" className="hyper "><span>Home</span></Link></li>	
            <li>
              <Link to="/" data-toggle="pill" className="hyper"><span>Kitchen</span></Link>
              {/* <ul className="dropdown-menu multi">
                <div className="row">
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Water &amp; Beverages</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Fruits &amp; Vegetables</a></li>
                      <li><a href="kitchen.html"> <i className="fa fa-angle-right" aria-hidden="true" />Staples</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Branded Food</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Breakfast &amp; Cereal</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Snacks</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Spices</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Biscuit &amp; Cookie</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Sweets</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Pickle &amp; Condiment</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Instant Food</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Dry Fruit</a></li>
                      <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true" />Tea &amp; Coffee</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3 w3l">
                    <Link to="/"><img src="images/me.png" className="img-responsive" alt="foodstuff store" /></Link>
                  </div>
                  <div className="clearfix" />
                </div>	
              </ul> */}
            </li>
            <li>
            <Link to="/" data-toggle="pill" className="hyper"><span> Personal Care </span></Link>
              {/* <ul className="dropdown-menu multi multi1">
                <div className="row">
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" /> Ayurvedic </a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Baby Care</a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Cosmetics</a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Deo &amp; Purfumes</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="care.html"> <i className="fa fa-angle-right" aria-hidden="true" />Hair Care </a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Oral Care</a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Personal Hygiene</a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Skin care</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" /> Fashion Accessories </a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Grooming Tools</a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Shaving Need</a></li>
                      <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true" />Sanitary Needs</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3 w3l">
                    <a href="care.html"><img src="images/me1.png" className="img-responsive" alt /></a>
                  </div>
                  <div className="clearfix" />
                </div>	
              </ul> */}
            </li>
            <li>
              <Link to="#" className="hyper"><span>Household</span></Link>
              {/* <ul className="dropdown-menu multi multi2">
                <div className="row">
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Cleaning Accessories</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />CookWear</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Detergents</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Gardening Needs</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Kitchen &amp; Dining</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />KitchenWear</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Pet Care</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Plastic Wear</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3">
                    <ul className="multi-column-dropdown">
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Pooja Needs</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Serveware</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Safety Accessories</a></li>
                      <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true" />Festive Decoratives </a></li>
                    </ul>
                  </div>
                  <div className="col-sm-3 w3l">
                  <Link to="/"><img src="images/me2.png" className="img-responsive" alt="foodstuff stores" /></Link>
                  </div>
                  <div className="clearfix" />
                </div>	
              </ul> */}
            </li>
            <li><Link to= "/" data-toggle="pill" className="hyper"> <span>Codes</span></Link></li>
            <li><Link to="/" data-toggle="pill" className="hyper"><span>Contact Us</span></Link></li>
          </ul>
        </div>
      </nav>
      {/* <div className="cart">
        <span className="fa fa-shopping-cart my-cart-icon"><span className="badge badge-notify my-cart-badge" /></span>
      </div> */}
      <div className="clearfix" />
    </div>
  </div>			
  {/**/}
  <div className="bannerVideo">
    <div className="container">
      <div className="banner-info">
        <h3>This is a food stuff store where you get the upadted prices of native foodstuffs in Nigeria
         </h3>	
        <div className="search-form">
          <form action="#" method="post">
            <input type="text" placeholder="Search..." name="Search..." />
            <input type="search"/>
          </form>
        </div>		
      </div>	
    </div>
  </div>
  {/*content*/}
  <div className="content-top ">
    <div className="container ">
      <div className="spec ">
        <h3>Shop</h3>
        <div className="ser-t">
          <b />
          <span><i /></span>
          <b className="line" />
        </div>
      </div>
      <div className="tab-head ">
        <nav className="nav-sidebar">
          <ul className="nav tabs ">
            <li className="active"><a href="#tab1" data-toggle="tab">Staples</a></li>
            <li className><a href="#tab2" data-toggle="tab">Snacks</a></li> 
            <li className><a href="#tab3" data-toggle="tab">Fruits &amp; Vegetables</a></li>  
            <li className><a href="#tab4" data-toggle="tab">Breakfast &amp; Cereal</a></li>
          </ul>
        </nav>
        <div className=" tab-content tab-content-t ">
          <div className="tab-pane active text-style" id="tab1">
            <div className=" con-w3l">
              <div className="col-md-3 m-wthree">
                <div className="col-m">								
                <Link to="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
                    <img src="images/of.png" className="img-responsive" alt="foodstore1" />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </Link>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Moong</a>(1 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$2.00</label><em className="item_price">$1.50</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b " data-id={1} data-name="Moong" data-summary="summary 1" data-price="1.50" data-quantity={1} data-image="images/of.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <Link to="/" data-toggle="modal" data-target="#myModal2" className="offer-img">
                    <img src="images/of1.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </Link>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Sunflower Oil</a>(5 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$10.00</label><em className="item_price">$9.00</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={2} data-name="Sunflower Oil" data-summary="summary 2" data-price={9.00} data-quantity={1} data-image="images/of1.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                <Link to="/" data-toggle="modal" data-target="#myModal3" className="offer-img">
                    <img src="images/of2.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </Link>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Kabuli Chana</a>(1 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$3.00</label><em className="item_price">$2.00</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={3} data-name="Kabuli Chana" data-summary="summary 3" data-price={2.00} data-quantity={1} data-image="images/of2.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                    <img src="images/of3.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Soya Chunks</a>(1 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={4} data-name="Soya Chunks" data-summary="summary 4" data-price="3.50" data-quantity={1} data-image="images/of3.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="tab-pane  text-style" id="tab2">
            <div className=" con-w3l">
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                <Link to="/" data-toggle="modal" data-target="#myModal5" className="offer-img">
                    <img src="images/of4.png" className="img-responsive" alt= "food store" />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </Link>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Lays</a>(100 g)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$1.00</label><em className="item_price">$0.70</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={5} data-name="Lays" data-summary="summary 5" data-price="0.70" data-quantity={1} data-image="images/of4.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                <Link to="/" data-toggle="modal" data-target="#myModal6" className="offer-img">
                    <img src="images/of5.png" className="img-responsive" alt="Food Ware in Nigeria" />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </Link>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Kurkure</a>(100 g)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$1.00</label><em className="item_price">$0.70</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={6} data-name="Kurkure" data-summary="summary 6" data-price="0.70" data-quantity={1} data-image="images/of5.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal7" className="offer-img">
                    <img src="images/of6.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Popcorn</a>(250 g)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$2.00</label><em className="item_price">$1.00</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={7} data-name="Popcorn" data-summary="summary 7" data-price={1.00} data-quantity={1} data-image="images/of6.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal8" className="offer-img">
                    <img src="images/of7.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Nuts</a>(250 g)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={8} data-name="Nuts" data-summary="summary 8" data-price="3.50" data-quantity={1} data-image="images/of7.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>		  
          </div>
          <div className="tab-pane  text-style" id="tab3">
            <div className=" con-w3l">
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal9" className="offer-img">
                    <img src="images/of8.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Banana</a>(6 pcs)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$2.00</label><em className="item_price">$1.50</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={9} data-name="Banana" data-summary="summary 9" data-price="1.50" data-quantity={1} data-image="images/of8.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal10" className="offer-img">
                    <img src="images/of9.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Onion</a>(1 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$1.00</label><em className="item_price">$0.70</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={10} data-name="Onion" data-summary="summary 10" data-price="0.70" data-quantity={1} data-image="images/of9.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal11" className="offer-img">
                    <img src="images/of10.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html"> Bitter Gourd</a>(1 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$2.00</label><em className="item_price">$1.00</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={11} data-name="Bitter Gourd" data-summary="summary 11" data-price={1.00} data-quantity={1} data-image="images/of10.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal12" className="offer-img">
                    <img src="images/of11.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Apples</a>(1 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={12} data-name="Apples" data-summary="summary 12" data-price="3.50" data-quantity={1} data-image="images/of11.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>		  
          </div>
          <div className="tab-pane text-style" id="tab4">
            <div className=" con-w3l">
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal13" className="offer-img">
                    <img src="images/of12.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Honey</a>(500 g)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={13} data-name="Honey" data-summary="summary 13" data-price={6.00} data-quantity={1} data-image="images/of12.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m ">
                  <a href="#" data-toggle="modal" data-target="#myModal14" className="offer-img">
                    <img src="images/of13.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Chocos</a>(250 g)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={14} data-name="Chocos" data-summary="summary 14" data-price="4.50" data-quantity={1} data-image="images/of13.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m ">
                  <a href="#" data-toggle="modal" data-target="#myModal15" className="offer-img">
                    <img src="images/of14.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Oats</a>(1 kg)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={15} data-name="Oats" data-summary="summary 15" data-price="3.50" data-quantity={1} data-image="images/of14.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-wthree">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target="#myModal16" className="offer-img">
                    <img src="images/of15.png" className="img-responsive" alt />
                    <div className="offer"><p><span>Offer</span></p></div>
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">Bread</a>(500 g)</h6>							
                    </div>
                    <div className="mid-2">
                      <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="add">
                      <button className="btn btn-danger my-cart-btn my-cart-b" data-id={16} data-name="Bread" data-summary="summary 16" data-price="0.80" data-quantity={1} data-image="images/of15.png">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*content*/}
  <div className="content-mid">
    <div className="container">
      <div className="col-md-4 m-w3ls">
        <div className="col-md1 ">
          <a href="kitchen.html">
            <img src="images/co1.jpg" className="img-responsive img" alt />
            <div className="big-sa">
              <h6>New Collections</h6>
              <h3>Season<span>ing </span></h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4 m-w3ls1">
        <div className="col-md ">
          <a href="hold.html">
            <img src="images/co.jpg" className="img-responsive img" alt />
            <div className="big-sale">
              <div className="big-sale1">
                <h3>Big <span>Sale</span></h3>
                <p>It is a long established fact that a reader </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4 m-w3ls">
        <div className="col-md2 ">
          <a href="kitchen.html">
            <img src="images/co2.jpg" className="img-responsive img1" alt />
            <div className="big-sale2">
              <h3>Cooking <span>Oil</span></h3>
              <p>It is a long established fact that a reader </p>		
            </div>
          </a>
        </div>
        <div className="col-md3 ">
          <a href="hold.html">
            <img src="images/co3.jpg" className="img-responsive img1" alt />
            <div className="big-sale3">
              <h3>Vegeta<span>bles</span></h3>
              <p>It is a long established fact that a reader </p>
            </div>
          </a>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  </div>
  {/*content*/}
  {/* Carousel
    ================================================== */}
    
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to={0} className="active" />
      <li data-target="#myCarousel" data-slide-to={1} />
      <li data-target="#myCarousel" data-slide-to={2} />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <a href="kitchen.html"> <img className="first-slide" src="images/ba.jpg" alt="First slide" /></a>
      </div>
      <div className="item">
        <a href="care.html"> <img className="second-slide " src="images/ba1.jpg" alt="Second slide" /></a>
      </div>
      <div className="item">
        <a href="hold.html"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></a>
      </div>
    </div>
  </div>{/* /.carousel */}
 
  {/*content*/}
  <div className="product">
    <div className="container">
      <div className="spec ">
        <h3>Special Offers</h3>
        <div className="ser-t">
          <b />
          <span><i /></span>
          <b className="line" />
        </div>
      </div>
      <div className=" con-w3l">
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal17" className="offer-img">
              <img src="images/of16.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">Moisturiser</a>(500 g)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add add-2">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/of16.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal18" className="offer-img">
              <img src="images/of17.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">  Lady Finger</a>(250 g)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="4.50" data-quantity={1} data-image="images/of17.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal19" className="offer-img">
              <img src="images/of18.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html"> Ribbon</a>(1 pc)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="3.50" data-quantity={1} data-image="images/of18.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal20" className="offer-img">
              <img src="images/of19.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">Grapes</a>(500 g)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="0.80" data-quantity={1} data-image="images/of19.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal21" className="offer-img">
              <img src="images/of20.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">Clips</a>(1 pack)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/of20.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal22" className="offer-img">
              <img src="images/of21.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">Conditioner</a>(250 g)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="4.50" data-quantity={1} data-image="images/of21.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal23" className="offer-img">
              <img src="images/of22.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">Cleaner</a>(250 kg)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="3.50" data-quantity={1} data-image="images/of22.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 pro-1">
          <div className="col-m">
            <a href="#" data-toggle="modal" data-target="#myModal24" className="offer-img">
              <img src="images/of23.png" className="img-responsive" alt />
            </a>
            <div className="mid-1">
              <div className="women">
                <h6><a href="single.html">Gel</a>(150 g)</h6>							
              </div>
              <div className="mid-2">
                <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                <div className="block">
                  <div className="starbox small ghosting"> </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="add">
                <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="0.80" data-quantity={1} data-image="images/of23.png">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/*footer*/}
  <div className="footer">
    <div className="container">
      <div className="col-md-3 footer-grid">
        <h3>About Us</h3>
        <p>Nam libero tempore, cum soluta nobis est eligendi 
          optio cumque nihil impedit quo minus id quod maxime 
          placeat facere possimus.</p>
      </div>
      <div className="col-md-3 footer-grid ">
        <h3>Menu</h3>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="kitchen.html">Kitchen</a></li>
          <li><a href="care.html">Personal Care</a></li>
          <li><a href="hold.html">Household</a></li>						 
          <li><a href="codes.html">Short Codes</a></li> 
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-3 footer-grid ">
        <h3>Customer Services</h3>
        <ul>
          <li><a href="shipping.html">Shipping</a></li>
          <li><a href="terms.html">Terms &amp; Conditions</a></li>
          <li><a href="faqs.html">Faqs</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="offer.html">Online Shopping</a></li>						 
        </ul>
      </div>
      <div className="col-md-3 footer-grid">
        <h3>My Account</h3>
        <ul>
          <li><a href="login.html">Login</a></li>
          <li><a href="register.html">Register</a></li>
          <li><a href="wishlist.html">Wishlist</a></li>
        </ul>
      </div>
      <div className="clearfix" />
      <div className="footer-bottom">
        <h2><Link to="/"><b>T<br />H<br/>E</b>FoodStuff Store<span>The No 1 Vendor for Foodstuffs in Nigeria</span></Link></h2>
        <p className="fo-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <ul className="social-fo">
          <li><a href="#" className=" face"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
          <li><a href="#" className=" twi"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
          <li><a href="#" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
          <li><a href="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
        </ul>
        <div className=" address">
          <div className="col-md-4 fo-grid1">
            <p><i className="fa fa-home" aria-hidden="true" />Our Address Our Adress Our Address.</p>
          </div>
          <div className="col-md-4 fo-grid1">
            <p><i className="fa fa-phone" aria-hidden="true" />Phone Number Phone Number Phone Number</p>	
          </div>
          <div className="col-md-4 fo-grid1">
            <p><a href="mailto:info@example.com"><i className="fa fa-envelope-o" aria-hidden="true" />Mail Mail Mail</a></p>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="copy-right">
        <p> © 2020 FoosStuff Store store. All Rights Reserved </p>
      </div>
    </div>
  </div>
  {/* //footer*/}
  {/* smooth scrolling */}
  <a href="#" id="toTop" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
  {/* //smooth scrolling */}
  {/* for bootstrap working */}
  {/* //for bootstrap working */}
  {/* product */}
  <div className="modal fade" id="myModal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Moong(1 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$2.00</del>$1.50</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={1} data-name="Moong" data-summary="summary 1" data-price="1.50" data-quantity={1} data-image="images/of.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of1.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Sunflower Oil(5 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$10.00</del>$9.00</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={2} data-name="Sunflower Oil" data-summary="summary 2" data-price={9.00} data-quantity={1} data-image="images/of1.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal3" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of2.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Kabuli Chana(1 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$3.00</del>$2.00</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={3} data-name="Kabuli Chana" data-summary="summary 3" data-price={2.00} data-quantity={1} data-image="images/of2.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal4" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of3.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Soya Chunks(1 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$4.00</del>$3.50</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={4} data-name="Soya Chunks" data-summary="summary 4" data-price="3.50" data-quantity={1} data-image="images/of3.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal5" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of4.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Lays(100 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.70</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={5} data-name="Lays" data-summary="summary 5" data-price="0.70" data-quantity={1} data-image="images/of4.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal6" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of5.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Kurkure(100 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.70</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={6} data-name="Kurkure" data-summary="summary 6" data-price="0.70" data-quantity={1} data-image="images/of5.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal7" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of6.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Popcorn(250 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$2.00</del>$1.00</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={7} data-name="Popcorn" data-summary="summary 7" data-price={1.00} data-quantity={1} data-image="images/of6.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal8" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of7.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Nuts(250 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$4.00</del>$3.50</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={8} data-name="Nuts" data-summary="summary 8" data-price="3.50" data-quantity={1} data-image="images/of7.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal9" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of8.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Banana(6 pcs)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$2.00</del>$1.50</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={9} data-name="Banana" data-summary="summary 9" data-price="1.50" data-quantity={1} data-image="images/of8.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal10" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of9.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Onion(1 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.70</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={10} data-name="Onion" data-summary="summary 10" data-price="0.70" data-quantity={1} data-image="images/of9.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal11" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of10.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Bitter Gourd(1 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$2.00</del>$1.00</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={11} data-name="Bitter Gourd" data-summary="summary 11" data-price={1.00} data-quantity={1} data-image="images/of10.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal12" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of11.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Apples(1 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$4.00</del>$3.50</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={12} data-name="Apples" data-summary="summary 12" data-price="3.50" data-quantity={1} data-image="images/of11.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal13" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of12.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Honey(500 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$7.00</del>$6.00</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={13} data-name="Honey" data-summary="summary 13" data-price={6.00} data-quantity={1} data-image="images/of12.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal14" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of13.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Chocos(250 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$5.00</del>$4.50</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={14} data-name="Chocos" data-summary="summary 14" data-price="4.50" data-quantity={1} data-image="images/of13.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal15" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of14.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Oats(1 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$4.00</del>$3.50</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={15} data-name="Oats" data-summary="summary 15" data-price="3.50" data-quantity={1} data-image="images/of14.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal16" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of15.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Bread(500 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={16} data-name="Bread" data-summary="summary 16" data-price="0.80" data-quantity={1} data-image="images/of15.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal17" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of16.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Moisturiser(500 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={17} data-name="Moisturiser" data-summary="summary 17" data-price="0.80" data-quantity={1} data-image="images/of16.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal18" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of17.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Lady Finger(250 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={18} data-name="Lady Finger" data-summary="summary 18" data-price="0.80" data-quantity={1} data-image="images/of17.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal19" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of18.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Satin Ribbon Red(1 pc)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={19} data-name="Satin Ribbon Red" data-summary="summary 19" data-price="0.80" data-quantity={1} data-image="images/of18.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal20" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of19.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Grapes(500 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={20} data-name="Grapes" data-summary="summary 20" data-price="0.80" data-quantity={1} data-image="images/of19.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal21" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of20.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Clips(1 pack)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={21} data-name="Clips" data-summary="summary 21" data-price="0.80" data-quantity={1} data-image="images/of20.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal22" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of21.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Conditioner</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={22} data-name="Conditioner" data-summary="summary 22" data-price="0.80" data-quantity={1} data-image="images/of21.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal23" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of22.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Cleaner(250 kg)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={23} data-name="Cleaner" data-summary="summary 23" data-price="0.80" data-quantity={1} data-image="images/of22.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
  {/* product */}
  <div className="modal fade" id="myModal24" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
        </div>
        <div className="modal-body modal-spa">
          <div className="col-md-5 span-2">
            <div className="item">
              <img src="images/of23.png" className="img-responsive" alt />
            </div>
          </div>
          <div className="col-md-7 span-1 ">
            <h3>Gel(150 g)</h3>
            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
            <div className="price_single">
              <span className="reducedfrom "><del>$1.00</del>$0.80</span>
              <div className="clearfix" />
            </div>
            <h4 className="quick">Quick Overview:</h4>
            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
            <div className="add-to">
              <button className="btn btn-danger my-cart-btn my-cart-btn1 " data-id={24} data-name="Gel" data-summary="summary 24" data-price="0.80" data-quantity={1} data-image="images/of23.png">View Details</button>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

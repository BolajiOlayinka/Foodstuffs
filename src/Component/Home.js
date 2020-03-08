import React, { Component } from "react";
import Carousel from "./Carousel";
import HomeProduct from "./HomeProduct";
import Title from "./Title";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import Slider from "./Slider";
import SearchBox from "./SearchBox";
import logo from "../Afrimakt-Logo.png";
import { Container, Collapse, Navbar, NavbarToggler } from "reactstrap";
import CategoryNav from "./CategoryNav";
import { storeProducts } from ".././data";

// import OwlCarousel from "react-owl-carousel";
// import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
// import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
          product: storeProducts,
          searchfield: ""
        };
      }
      onChange = e => {
        this.setState({ searchfield: e.target.value });
        console.log(e.target.value);
    
      };
  render() {
    const searchProducts = this.state.product.filter(storeProducts => {
        return (storeProducts.title
            .toLowerCase())
          .includes(this.state.searchfield.toLowerCase());
      });
      console.log(searchProducts)
    return (
      <React.Fragment>
        <div className="container">
          <Wrappersub>
            <div className="container">
              <ul id="menu-top-right" className="nav nav-inline pull-left">
                <li>
                  <StyledLink to="#">
                    <i className="fa fa-phone pr-2" />
                    Our Phone Number: +2347013337324
                  </StyledLink>
                </li>
              </ul>
              <ul className="nav nav-inline pull-right ">
                <li>
                  <StyledLink to="/">
                    <i className="fa fa-home pr-2" />
                    Home
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/store">
                    <i className="fas fa-store pr-2" />
                    Store
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">
                    <i className="fas fa-users pr-2" />
                    About Us
                  </StyledLink>
                </li>
                <Item>
                  <StyledLink to="#">
                    <i className="fas fa-id-card pr-2" />
                    Contact Us
                  </StyledLink>
                </Item>
              </ul>{" "}
            </div>
          </Wrappersub>
          <NavWrapper>
            <Contain className="container">
              <Navbar light expand="md" className="mb-0">
                <BrandLink to="/">
                  <img src={logo} alt="store" className="navbar-brand" />
                </BrandLink>

                <NavbarToggler />

                <Collapse navbar>
                  <ItemNav>
                    <StyledLinkNav to="/" className="nav-Link">
                      Home
                    </StyledLinkNav>
                  </ItemNav>
                  <ItemNav>
                    <StyledLinkNav to="/store" className="nav-Link">
                      Store
                    </StyledLinkNav>
                  </ItemNav>
                  <ItemNav>
                    <StyledLinkNav to="/about" className="nav-Link">
                      About us
                    </StyledLinkNav>
                  </ItemNav>
                </Collapse>

                <SearchBox onchange={this.onChange}/>
                <CartLink to="/cart" className="myCart">
                  <CartBody>
                    <CartText className="ml-2 mr-2">
                      <i className="fas fa-cart-plus"></i>
                    </CartText>
                    Cart <span> (0)</span>
                  </CartBody>
                </CartLink>
              </Navbar>
            </Contain>
          </NavWrapper>
          <CategoryNav />
          <Carousel />
        </div>
        <Title name="Our " title="Store" />
        {/* <OwlCarousel loop draggable autoplay className="d-lg-block d-md-none d-sm-none d-xs-none"> */}
        <Container><HomeProduct storeproducts={searchProducts}/></Container>
        
        {/* </OwlCarousel> */}
        <div className="text-center mt-5 mb-5">
          <Link to="/store">
            <StoreButton>Enter Store</StoreButton>
          </Link>
        </div>
        <Title name="Client " title="Testimonial" />
        <Testimonial />
        <Slider />
        <div className="text-center mt-5 mb-5">
          <Link to="/store">
            <StoreButton>Enter Store</StoreButton>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
const NavWrapper = styled.div`
  margin: 0px;
  padding-top: 1em !important;
  padding-bottom: 1em !important;
`;
const BrandLink = styled(Link)`
  color: black;

  &:hover {
    text-decoration: none;
  }
  margin-right: 2em;

  @media (max-width: 425px) {
    margin-right: auto;
  }
  @media (max-width: 375px) {
    margin-left: 0em;
  }
`;
const StyledLinkNav = styled(Link)`
  color: var(--mainPink) !important;
  font-size: 1.3rem;
  text-transform: capitalize !important;
  margin-left: 0.5em;
  margin-right: 0.5em;
  vertical-align: middle;
  display: flex;
  padding: 1em 3em;

  &:hover {
    text-decoration: none !important;
    cursor: pointer;
    background-color: var(--mainBlue);
    color: var(--mainWhite) !important;
  }
  @media (min-width: 1024px) {
    display: none;
    padding: 1em 1em;
  }
  @media (min-width: 768px) {
    display: none;
    padding: 1em 0.5em;
  }
  @media (max-width: 425px) {
    padding: 1em 4em;
    display: none;
  }
  @media (max-width: 375px) {
    padding: 1em 2em;
    displa: none;
  }
`;
const Contain = styled.div`
  @media (max-width: 768px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;
const ItemNav = styled.li`
  display: flex;
`;

const CartLink = styled(Link)`
  float: right;
  margin-left: auto;
  font-size: 1.5em;
  font-weight: bold;

  color: var(--mainBlack);

  &:hover {
    color: var(--mainBlue);
    text-decoration: none !important;
    cursor: pointer;
  }
  @media (max-width: 425px) {
    margin-left: auto;
    margin-top: -3.2em;
    margin-right: 3.2em;
  }
`;
const CartText = styled.span`
  font-size: 1em;
  padding: 0.3em;
  &:hover {
    text-decoration: none !important;
  }
`;
const CartBody = styled.span`
  display: flex;
  align-items: center;
`;

const StoreButton = styled.button`
  background-color: var(--mainPink);
  padding: 1em 2.5em;
  font-size: 14px;
  color: white;
  border-style: none;
  border-color: transparent;
  border-radius: 0.5em;

  &:hover {
    background-color: var(--mainGreen);
  }
`;
const Wrappersub = styled.div`
  background-color: var(--mainBlue);
  padding-top: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #ddd;
`;

const StyledLink = styled(Link)`
  color: var(--mainWhite);
  @media (max-width: 425px) {
    font-size: 10px;
  }
`;
const Item = styled.li`
  @media (max-width: 425px) {
    display: none !important;
  }
`;

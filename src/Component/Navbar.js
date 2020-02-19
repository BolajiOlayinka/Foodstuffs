import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";
// import logo from "../logo-white-sm.png";
import styled from "styled-components";
import Search from './Search';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavWrapper>
      <Contain className="container">
        <Navbar light expand="md" className="mb-0">

          <BrandLink to="/">
            <h2>AgroCenter</h2>
            {/* <img src={logo} alt="store" className="navbar-brand" /> */}
          </BrandLink>

          <NavbarToggler onClick={toggle} />

          
            <Collapse isOpen={isOpen} navbar>
              <Item>
                <StyledLink to="/" className="nav-Link">
                  Home
                </StyledLink>
              </Item>
              <Item>
                <StyledLink to="/store" className="nav-Link">
                  Store
                </StyledLink>
              </Item>
              <Item>
                <StyledLink to="/about" className="nav-Link">
                  About us
                </StyledLink>
              </Item>
            </Collapse>

           <Search/>
          <CartLink to="/cart" className="myCart">
            <CartBody>
              <CartText className="ml-2 mr-2">
                <i className="fas fa-cart-plus"></i>
              </CartText>
              Cart  <span> (0)</span>
            </CartBody>
            
          </CartLink>
          
        </Navbar>
        </Contain>
      </NavWrapper>
    </div>
  );
};
export default Header;

const NavWrapper = styled.div`

  margin: 0px;
  padding-top:1em!important;
  padding-bottom:1em!important;
 
  
`;
const BrandLink = styled(Link)`
 color:black;

 &:hover{
   text-decoration:none;
 }
  margin-right: 2em;

  @media (max-width: 425px) {
    margin-right: auto;
  }
  @media (max-width: 375px) {
    margin-left: 0em;
  }
`;
const StyledLink = styled(Link)`
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
    background-color: var(--mainGreen);
    color: var(--mainWhite) !important;
  }
  @media (min-width: 1024px) {
    display:none;
    padding: 1em 1em;
  }
  @media (min-width: 768px) {
    display:none;
    padding: 1em 0.5em;
  }
  @media (max-width: 425px) {
    padding: 1em 4em;
    display:none;
  }
  @media (max-width: 375px) {
    padding: 1em 2em;
    displa:none;
  }
`;
const Contain = styled.div`
 

  @media (max-width: 768px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;
const Item = styled.li`
  display: flex;
`;

const CartLink = styled(Link)`
  float: right;
  margin-left: auto;
  font-size: 1.5em;
  font-weight:bold;

  color: var(--mainBlack);

  &:hover {
    color: var(--mainGreen);
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

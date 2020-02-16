import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
 
 
  
} from "reactstrap";
import { Link } from "react-router-dom";
// import logo from "../logo-white-sm.png";
import styled from "styled-components";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavWrapper>
        <Navbar color="light" light expand="md" className="mb-0">
          <BrandLink to="/">
          <h2>AgroCenter</h2>
            {/* <img src={logo} alt="store" className="navbar-brand" /> */}
          </BrandLink>

          <NavbarToggler onClick={toggle} />

          <Contain className="container">
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

            <Form class="searchBox">
              <Input
                type="text"
                placeholder="Search For Products"
                name="search"
              ></Input>
              <SearchButton type="submit">
                <i class="fa fa-search"></i>
              </SearchButton>
            </Form>
          </Contain>
          <CartLink to="/cart" className="myCart">
            <CartBody>
              <CartText className="ml-2 mr-2">
                <i className="fas fa-cart-plus"></i>
              </CartText>
              Cart
            </CartBody>
          </CartLink>
        </Navbar>
      </NavWrapper>
    </div>
  );
};
export default Header;

const NavWrapper = styled.div`
  background-color: var(--mainGreen)!important;
  margin:0px;
`;
const BrandLink = styled(Link)`
  margin-left: 2em;
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
  padding: 1em 4em;

  &:hover {
    text-decoration: none !important;
    cursor: pointer;
    background-color: var(--mainGreen);
    color: var(--mainWhite) !important;
  }
  @media (max-width: 1024px) {
    padding: 1em 1em;
  }
  @media (max-width: 425px) {
    padding: 1em 4em;
  }
  @media (max-width: 375px) {
    padding: 1em 2em;
  }
`;
const Contain = styled.div`
  padding-left: 3em;
  padding-right: 3em;

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
  margin-right: 2em;
  font-size: 1.5em;

  color: var(--mainPink);

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
const Form = styled.form`
  width: 50%;
  @media (max-width: 768px) {
    width:45%;
  }
  @media (max-width: 425px) {
    margin-top: -5em;
    margin-left: auto;
    margin-right: 8em;
  }
  @media (max-width: 375px) {
    width: 50%;
    margin-right: 9em;
  }
  @media (max-width: 320px) {
    width: 40%;
  }
`;
const Input = styled.input`  
     padding: 1em;
     font-size: 1.2em;
     border: 1px solid var(--mainPink);
     float:left;
     width: 80%;
     border-radius:1em 0em 0em 1em;

     background: #f1f1f1;

     ::placeholder{
     text-align:center;
     color:var(--mainPink)
     }
     @media (max-width:768px){
         width:70%;
     }
     @media (max-width:320px){
        font-size: 1em;
     }
     

  }
`;

const SearchButton = styled.button`
  width: 10%;
  padding: 8.5px 8px;
  background: var(--mainGreen);
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  border-radius: 0em 1em 1em 0;
  :hover {
    background: var(--mainPink);
  }
  @media (max-width: 768px) {
    width: 15%;
    padding: 8.5px 1px;
  }
  @media (max-width: 375px) {
    width: 20%;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
  ::after {
    content: "";
    clear: both;
    display: table;
  }
`;

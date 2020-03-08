import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function subNavbar() {
  return (
    <div>
      <Wrappersub>
        <div className="container">
          <ul id="menu-top-right" className="nav nav-inline pull-left">
            <li >
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
    </div>
  );
}

const Wrappersub = styled.div`
  background-color: var(--mainBlue);
  padding-top: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #ddd;
`

const StyledLink = styled(Link)`
color:var(--mainWhite);
@media(max-width:425px){
font-size:10px;
}
`
const Item= styled.li `
@media(max-width:425px){
    display:none!important;
}
`
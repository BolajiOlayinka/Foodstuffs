import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { storeProducts } from ".././data";
import ProductList from "./ProductList";

export default class Search extends Component {
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
      <Form class="searchBox">
        <Input
          type="text"
          placeholder="Search For Products"
          name="search"
          onchange={this.onChange}
        ></Input>
        <SearchButton type="submit">
          <i className="fa fa-search"></i>
        </SearchButton>
      </Form>
    );
  }
}

const Form = styled.form`
  width: 100%;
  @media (max-width: 768px) {
    width: 45%;
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
     border: 1px solid var(--mainBlack);
     float:left;
     width: 80%;
     background: #f1f1f1;

     ::placeholder{
     text-align:center;
     color:var(--mainBlack)
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
  background: var(--mainBlue);
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;

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

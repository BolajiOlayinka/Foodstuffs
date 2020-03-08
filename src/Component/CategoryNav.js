import React from 'react';
import styled from 'styled-components';
import {
    
    Form, FormGroup,Input,
 } from 'reactstrap';

const Category = (props) => {

  return (

<Wrapper>

<FormArea>
<FormGroup>
       
        <InputArea type="select" bsSize="lg" name="select" id="exampleSelect">
          <option>ALL CATEGORIES</option>
          <CategoryOption className="py-5">AGRO PRODUCTS</CategoryOption>
          <CategoryOption>FOOD</CategoryOption>
          <CategoryOption>FROZEN FOOD</CategoryOption>
          <CategoryOption>FRUITS</CategoryOption>
          <CategoryOption>TUBER AND ROOTS</CategoryOption>
          <CategoryOption>VEGETABLES</CategoryOption>
        </InputArea>
      </FormGroup>
     
</FormArea>
<ProductPrice>
<p>Affordable prices for all products</p>
    
</ProductPrice>




</Wrapper>



  )
}


  export default Category;

  const Wrapper= styled.div `
  display:flex;
  justify-content:space-between;
  background-color:var(--mainBlue);
  color:white;
  padding-top:1em;
  padding-bottom:0.5em;
  `
  const InputArea= styled(Input) `
  border-style:none;
  border-radius:none;
  margin-left:2em;
  ${'' /* width:30%; */}
  color:black;
  font-weight:bold;
  `
  const FormArea =styled(Form) `
  width:30%;
  `

  const ProductPrice=styled.div `
 margin-right:2em;
 align-self:center;

  `
  const CategoryOption =styled.option `

  @media(min-width:769px){
  font-weight:bold;
  margin-top:1em;
  padding-bottom:1em;
  min-height:2em;
  }
  @media (max-width:769px){
    padding-top:6px;
    padding-bottom:6px;
    font-weight:bold;
    min-height:0.8em;
  }
  `
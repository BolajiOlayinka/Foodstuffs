import React from 'react';
import styled from "styled-components";

export default function SearchBox(searchfield, onchange) {
    return (
        <React.Fragment>
         <Form class="searchBox">
              <Input
                type="text"
                placeholder="Search For Products"
                name="search"
                onChange={onchange}
              ></Input>
              <SearchButton type="submit">
                <i class="fa fa-search"></i>
              </SearchButton>
            </Form>
            
        </React.Fragment>
    )
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
  background: var(--mainGreen);
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

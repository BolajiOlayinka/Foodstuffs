import React, { Component } from 'react';
import Carousel from './Carousel'
import HomeProduct from './HomeProduct';
import Title from './Title';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Testimonial from './Testimonial';

export default class Home extends Component {
    render() {
        return (
            <div>
            <Carousel/>
            <Title name="Our " title="Store"/>
                <HomeProduct/>
                <div className="text-center mt-5 mb-5">
                <Link to ='/store'>
                            <StoreButton>
                                Enter Store
                            </StoreButton>
                            </Link>
                </div>
                <Title name="Client " title="Testimonial"/>
                <Testimonial/>
            </div>
        )
    }
}

const StoreButton = styled.button `
background-color:var(--mainPink);
padding:1em 2.5em;
font-size:14px;
color:white;
border-style:none;
border-color:transparent;
border-radius:0.5em;

&:hover{
    background-color:var(--mainGreen);
    

}
`
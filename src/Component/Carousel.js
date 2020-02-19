import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const items = [
  {
    src: 'images/banner1.png',
    altText: 'Slide 1',
    
    header: 'Welcome',
    key: '1'
  },
  {
    src:'images/banner2.png',
    altText: 'Slide 2',
    
    header: 'Shop for your natural goods',
    key: '2'
  },
  {
    src: 'images/banner3.png',
    altText: 'Slide 3',
    
    header: 'Best Offers Available',
    key: '3'
  }
];

const Carousel = () => (<Wrapper><Link to ="/store"> <UncontrolledCarousel items={items} /> <ButtonContainer>Shop Now</ButtonContainer></Link></Wrapper>);

export default Carousel;


const Wrapper =styled.div `
.carousel-inner{
  z-index:0;
}
.carousel-item{
  z-index:0;
}
.carousel-item .active{
  z-index:0;
}
.carousel-indicators{
  display:none;
}
.carousel-caption h3{
  display:none;
}
.carousel-control-next-icon{
  display:none;
}
.carousel-control-prev-icon{
  display:none;
}
`
const ButtonContainer =styled.button `
padding:1em 2em;
background-color:var(--mainPink);
color:white;
position:absolute;
z-index:1;
margin-top:-10%;
${'' /* margin-left:500px; */}
margin-left:40%;
border-style:none;

&:hover{
color:var(--mainPink);
background-color:white;
}

`
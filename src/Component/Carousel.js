import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

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

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
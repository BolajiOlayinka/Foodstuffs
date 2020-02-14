import React, { Component } from 'react';
import Carousel from './Carousel'
import HomeProduct from './HomeProduct';
import Title from './Title';

export default class Home extends Component {
    render() {
        return (
            <div>
            <Carousel/>
            <Title name="Our " title="Store"/>
                <HomeProduct/>
            </div>
        )
    }
}

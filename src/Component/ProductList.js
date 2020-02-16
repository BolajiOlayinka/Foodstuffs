import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import {ProductConsumer} from '../Context';
import Slider from './Slider';
export default class ProductList extends Component {
    render() { 
        return (
            <React.Fragment>
            <Slider/>
                <div className="py-5">
                    <div className="container">
                    <Title className="font-weight-bold" name="Our" title=" Products"/>
                       <div className="row">
                        <ProductConsumer>
                            {value => {                               
                                 return value.products.map( product => {
                                     return <Product key={product.id} product ={product}/>;
                                 })
                            }}
                        </ProductConsumer>
                            
                       </div> 
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

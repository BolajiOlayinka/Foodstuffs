import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types'
export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart}= this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-5">
                <div className="card h-100">
                    <ProductConsumer>
                    {(value)=>(
                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                   
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true :false} 
                    onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                        
                    }}>
                    {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                            {""}
                            In Cart
                        </p>
                    ) : (
                        <i className="fas fa-cart-plus"/>
                    )}
                    </button>
                   
                   
                    </div>
                    )}
                    
                    </ProductConsumer>
                    {/* Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0 font bold">{title}</p>
                        <h5 className="text-green font-italic mb-0 bold">
                        <span className="mr-1 bold text-green">₦</span>{price}/kg
                        </h5>
                    </div>
                    <ProductConsumer>
                        {(value)=>(
                            <div className="text-center mt-4">
                            <Link to ="/details" className="detailsButton" onClick={() => value.handleDetail(id)}>View Details</Link>
                            </div>
                        )}
                    </ProductConsumer>
                </div> 
                
            </ProductWrapper>
        )
    }
}
Product.propTypes={
    product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool,
}).isRequired
}
const ProductWrapper =styled.div`
.card{
    border-color:var(--mainBlack);
    transition:all 1s linear;
    padding:1em;
    margin-top:1em;
    margin-bottom:1em;

}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
    padding-top:2em;
}
&:hover{
    .card{
        border:0.04rem solid rgba (0,0,0,2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,2);

    }
    .card-footer{
        background:#eaeaea;
        
    }
    .detailsButton{
        background:var(--mainGreen);
        text-decoration:none!important;
        transition: color .15s ease-in-out;
        background-color: .15s ease-in-out;
        border-color:.15s ease-in-out;
        box-shadow: .15s ease-in-out;
        transform:translateZ(0);
}
        
    }
}
.img-container{
    position:relative;
    overflow:hidden;

}
.card-img-top{
    transition:all 1s linear;
    
}
.detailsButton{
    background:var(--mainPink);
    color:var(--mainAsh);
    padding:0.5em;
    border-radius:0.3em;
   
    text-decoration:none;
    cursor:pointer;
}

@media (min-width: 992px){
    .card-img-top{
    height:150px;

    }
}
@media (max-width: 450px){

${'' /* .card-img-top{
    margin-left:auto;} */}
}

.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    color:white;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%); 
    transition:all 1s linear;
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`;


import React, { Component } from 'react';
import Product from "./Product";
// import {Col} from 'reactstrap';
import {ProductConsumer} from '../Context';
// import Title from './Title';


// import React, { Component } from 'react';
// import Product from "./Product";
// import OwlCarousel from "react-owl-carousel";
// import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
// import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";


export default class HomeProduct extends Component {
    render() { 
        return (
            <div>
                <div className="py-5">
                    <div className="container">
                    {/* <Title name="our" title="products"/> */}
                    
                   <div class="row">
                        <ProductConsumer>
                        {/* <OwlCarousel items="3" loop autoplay className="d-lg-block d-md-none d-sm-none d-xs-none"> */}
                            {/* {value => {                               
                                 return value.products.map( product => {
                                      return (
                                     
                                      <Product key={product.id} product ={product}/>
                                     
                                     )
                              })
                             }} */}
                             {value => {                               
      return value.products.slice(0,20).map( product => {
          return <Product key={product.id} product ={product}/>;
      })
  }}
                            {/* </OwlCarousel>   */}
                         </ProductConsumer>
                         </div>
                        </div> 
                    </div>
                </div>

           
         )
     }
 }


// {value => {                               
//     return value.products.slice(0,20).map( product => {
//         return <Product key={product.id} product ={product}/>;
//     })
// }}

// export default function HomeProduct() {
//     return (
//         <ProductConsumer>
//               {value => {  
//              return value.products.map((product => {
//         return (
//           <Col lg="6 mt-5" md="6" sm="12" xs="12">
//             <Product
//             //   key={[i]}
//               key={product.id}
//               title={product.title}
//             //   img={<img src={storeProducts[i].url} alt="Boom" />}
//               price={product.price}
             
              
//             />
//           </Col>
//         );
//              }))}}
//         </ProductConsumer>
//     )
// }

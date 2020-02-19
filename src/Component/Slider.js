import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

export default class Slider extends Component {
    render() {
        return (
            <div>
                <OwlCarousel
          items="3"
          loop
          autoplay
          className="d-lg-block d-md-none d-sm-none d-xs-none"
        >
          <div className="item">
            <img src="img/slide1.png" alt="person" />
          </div>
          <div className="item">
            <img src="img/slide2.png" alt="person" />
          </div>
          <div className="item">
            <img src="img/slide3.png" alt="person" />
          </div>
          <div className="item">
            {" "}
            <img src="img/slide4.png" alt="person" />
          </div>
          <div className="item">
            <img src="img/slide5.png" alt="person" />
          </div>
          <div className="item">
            <img src="img/slide6.png" alt="person" />
          </div>
          
        </OwlCarousel>
            </div>
        )
    }
}

import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch, Route} from 'react-router-dom';
// import SubNav from './Component/subNavbar.js';
import Footer from './Component/Footer';
import SubFoot from './Component/SubFooter';
// import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Default from "./Component/Default";
import Details from "./Component/Details";
import Cart from "./Component/Cart/Cart.js";
import Modal from "./Component/Modal";
import Home from "./Component/Home";
// import CategoryNav from './Component/CategoryNav';
import {Container} from 'reactstrap';

// import Footer from "./Component/Footer";

class App extends React.Component{

  render(){
    return (
      <React.Fragment>
      {/* <SubNav/>
      
        <Navbar/> */}
        <Container>
        {/* <CategoryNav/> */}
        </Container>
        
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/store" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
       
        </Switch>
        <Modal/>
        <Footer/>
        <SubFoot/>
      </React.Fragment>
    );
  }
}
export default App;





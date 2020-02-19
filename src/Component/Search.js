    import React, { Component } from 'react';
    import SearchBox from './SearchBox';
    
    import {ProductConsumer} from '../Context';
    export default class Search extends Component {
// constructor() {
//     super();
//     this.state = {
//       campaign: campaignData,
//       searchfield: ""
//     };
//   }
  onChange = e => {
    this.setState({ searchfield: e.target.value });
    console.log(e.target.value);

  };


        render() {
            
            return (
    //          const searchCampaign = this.state.campaign.filter(campaignData => {
    //   return (campaignData.title 
    //     .toLowerCase())
    //     .includes(this.state.searchfield.toLowerCase());
    // });
    // console.log(searchCampaign)
    // return (
    //   <div>
    //     <div className="searchBanner">
    //       <div className="verifiedBannerBody">
    //         <h1>Explore</h1>
    //         <SearchBox onchange={this.onChange} />
    //       </div>
    //     </div>



                <React.Fragment>
                {/* <ProductConsumer>
                {value => {                               
                     return value.products.filter(product => {
                         return (product.title.toLowerCase())
                  .includes(searchfield.toLowerCase());
                     })
                }}
            </ProductConsumer> */}
                    <SearchBox onChange={onchange}/>
            </React.Fragment>
                
            )
        }
    };
    
    
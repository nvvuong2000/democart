import React, { Component } from 'react';
import Sanphamds from './Sanphamds'
import Nav from './Nav'
import {connect} from 'react-redux'
import * as actions from './../actions/actions'

class SanPham extends Component{
	constructor(props){
		super(props);
		this.state= {
			sanphams :[],
		};
	}
	componentDidMount(){
		this.props.fetch_list_products();
		// console.log(this.props.fetch_list_products());
	}
	showProducts(products){
		var result = null;
		var {additemtocard} = this.props;
        if(products.length>0){
            result=products.map((sanpham,index)=>{
                return(
                    <Sanphamds key={index} index={index} sanpham={sanpham} additemtocard={additemtocard} />
                );
            })
        }
        return result;
    }
    render(){
    var {sanphams,keyword} = this.props;
  
   console.log(keyword);
  
 
  
    
 

        return(
			// <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
			<div>

			
	
	  
	  <section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url(images/destination-single.jpg)'}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-start">
          <div className="col-md-9   pb-4">
            <h1 className="mb-3 bread">DANH SÁCH SẢN PHẨM</h1>
             <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Trang chủ <i className="ion-ios-arrow-forward"></i></a></span> <span>Danh sách sản phẩm <i className="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-lg-9 pr-lg-4">
    				<div className="row">
					{this.showProducts(sanphams)}
		    			
		    		</div>
		    		<div className="row mt-5">
		          <div className="col text-center">
		            <div className="block-27">
		              <ul>
		                <li><a href="#">&lt;</a></li>
		                <li className="active"><span>1</span></li>
		                <li><a href="#">2</a></li>
		                <li><a href="#">3</a></li>
		                <li><a href="#">4</a></li>
		                <li><a href="#">5</a></li>
		                <li><a href="#">&gt;</a></li>
		              </ul>
		            </div>
		          </div>
		        </div>
    			</div> 
    		<Nav />
    		</div>
    	</div>
    </section>


    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About <span><a href="index.html">Ecoland</a></span></h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Online Enquiry</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>General Enquiry</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Booking</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Privacy</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Refund Policy</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Call Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Adventure</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Hotel and Restaurant</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Beach</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Nature</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Camping</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Party</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. </p>
          </div>
        </div>
      </div>
    </footer>
    
  


 {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>  */}


    </div>
//   </body>
        );
    }
}
const mapStateToProps=(state)=>{
	return{
    sanphams: state.products,
    keyword: state.search,
		
	}

}
const mapDistpatchToProps = (dispatch,props)=>{
	return{
		additemtocard:(item)=>{
            dispatch(actions.act_ADD_PRODUCT_INTO_CART_REQUEST(item,1));
        },
		fetch_list_products:()=>{
            dispatch(actions.act_GET_FULL_PRODUCTS_REQUEST())
        },
	}
}
export default connect(mapStateToProps,mapDistpatchToProps) (SanPham);
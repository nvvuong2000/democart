import React, { Component } from 'react';
import Sanphamds from './Sanphamds'
import Nav from './Nav'
import Footer from './Footer'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'

class Search extends Component{
	constructor(props){
		super(props);
		this.state= {
			sanphams :[],
		};
	}
	// componentDidMount(){
	// 	this.props.fetch_list_products();
	// 	// console.log(this.props.fetch_list_products());
	// }
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
    var {keyword} = this.props;
    console.log(keyword);
  //   sanphams = sanphams.filter((sanpham) => {
  //     return sanpham.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  // });

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
					{this.showProducts(keyword)}
		    			
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


  <Footer />
    
  


 {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>  */}


    </div>
//   </body>
        );
    }
}
const mapStateToProps=(state)=>{
	return{
    // sanphams: state.products,
    keyword: state.search,
		
	}

}
const mapDistpatchToProps = (dispatch,props)=>{
	return{
		additemtocard:(item)=>{
            dispatch(actions.act_ADD_PRODUCT_INTO_CART_REQUEST(item,1));
		},
		
		// fetch_list_products:()=>{
        //     dispatch(actions.act_GET_FULL_PRODUCTS_REQUEST())
        // },
	}
}
export default connect(mapStateToProps,mapDistpatchToProps) (Search);
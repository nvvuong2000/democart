import React , {Component} from 'react'
// import '../../src/style.css'
import * as actions from './../actions/actions'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import CartResult from './CartResullt'
class Cart extends Component{
    constructor(props){
		super(props);
		this.state= {
			items :[],
		};
	}
    componentDidMount(){
		this.props.getallitem();

  }
  // UNSAFE_componentWillReceiveProps(nexprops){
  //   console.log(nexprops);
  // }
 
	showProducts(products){
    var result = null;
    var {onChangeQuan} = this.props;
    
		
        if(products.length>0){
            result=products.map((sanpham,index)=>{
                return(
                    <CartItem key={index} index={index} link ={sanpham.item.link}sanpham={sanpham} quan_buy ={sanpham.quantity} id={sanpham.item.id} name={sanpham.item.name} price={sanpham.item.price} quantity={sanpham.item.quantity} type={sanpham.item.type} color={sanpham.item.color} total={sanpham.item.price*sanpham.quantity} onChangeQuan={onChangeQuan}/>
                );
            })
        }
        return result;
    }
    showCartResult=(cart)=>{
      var result = null;
      if(cart.length>0){
        result = <CartResult cart={cart}/>
      }
      else{
        result =<h2> Hiện tại giỏ hàng trống</h2>
      }
      return result;
    }
    render(){
        
        var {items } = this.props;
        // console.log(items);
        return(
          
          <div>
          <div className="container">
          {/*Section: Block Content*/}
          <section className="mt-5 mb-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-8">
                {/* Card */}
                <div className="card wish-list mb-4">
                  <div className="card-body">
                    {/* <h5 className="mb-4">Cart (<span>2</span> items)</h5> */}
                    {this.showProducts(items)}
                    <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1" /> Do not delay the purchase, adding
                      items to your cart does not mean booking them.</p>
                  </div>
                </div>
                {/* Card */}
                {/* Card */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="mb-4">Expected shipping delivery</h5>
                    <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                  </div>
                </div>
                {/* Card */}
                {/* Card */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="mb-4">We accept</h5>
                    <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                    <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                    <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                    <img className="mr-2" width="45px" src="https://z9t4u9f6.stackpathcdn.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark" />
                  </div>
                </div>
                {/* Card */}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4">
                {/* Card */}
               {this.showCartResult(items)}
                {/* Card */}
                {/* Card */}
                <div className="card mb-4">
                  <div className="card-body">
                    <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Add a discount code (optional)
                      <span><i className="fas fa-chevron-down pt-1" /></span>
                    </a>
                    <div className="collapse" id="collapseExample">
                      <div className="mt-3">
                        <div className="md-form md-outline mb-0">
                          <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card */}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/*Section: Block Content*/}
        </div>
        </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        items: state.cart,
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        getallitem:()=>{
            dispatch(actions.act_GET_FULL_ITEM_REQUEST())
        },
        onChangeQuan:(product,typechange)=>{
          dispatch(actions.actChangeQuanItemRequest(product,typechange));
      },
       
       
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
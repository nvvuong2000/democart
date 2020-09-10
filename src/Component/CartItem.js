import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/actions'
import callAPI from '../call/callAPI'
import {Link} from 'react-router-dom'
import { act } from 'react-dom/test-utils'

class CartItem extends Component{
  
constructor(props){
  super(props);
  this.state={
    quantity:0,

  }
}
   del=(id)=>{

    // var {sanpham} = this.props;
    console.log(id)
     this.props.delitem(id);
   }
   onChange=(sanpham,type)=>{
          this.props.onChangeQuan(sanpham,type);
      
       }    
    render(){
        var {sanpham} = this.props;
       
        return(
           
            <div>
                   <div className="row mb-4">
                      <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                          <img className="img-fluid w-100" src={this.props.link} alt="Sample" />
                          <a href="#!">
                            
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7 col-lg-9 col-xl-9">
                        <div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5>{this.props.name}</h5>
                              <p className="mb-3 text-muted text-uppercase small">{this.props.type} - {this.props.color}</p>
                              <p className="mb-2 text-muted text-uppercase small">Color: {this.props.color}</p>
        <p className="mb-3 text-muted text-uppercase small">Size: {this.props.type}</p>
                            </div>
                            <div>
                              <div className="def-number-input number-input safari_only mb-0 w-100">
                               <Link to={`/Cart`}>   <button className=" btn btn-primary   waves-effect waves-light minus" onClick={()=>{this.onChange(sanpham,false)}}>-</button></Link>
                                <input className="mb-3 text-muted text-uppercase small"  name="quantity"  defaultValue={sanpham.quantity} type="number" />
                                <button  className=" btn btn-primary   waves-effect waves-light plus" onClick={()=>{this.onChange(sanpham,true)}}>+</button>
                              </div>
                              <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                {/* (Note, 1 piece) */}
                               Còn  {this.props.quantity-sanpham.quantity} sản phẩm
                              </small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <a  type="button" className="card-link-secondary small text-uppercase mr-3" onClick={()=>{this.del(sanpham.id)}}><i className="fas fa-trash-alt mr-1"   /> Remove item </a>
                              <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i className="fas fa-heart mr-1" /> Move to wish list </a>
                            </div>
        <p className="mb-0"><span><strong>{this.props.total}</strong></span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mb-4" />
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch,props)=>{
  return{
 
    delitem:(id)=>{
      dispatch(actions.act_DELETE_PRODUCT_INTO_CART_REQUEST(id))
    },
  
   
  }
}
export default connect(null,mapDispatchToProps) (CartItem);
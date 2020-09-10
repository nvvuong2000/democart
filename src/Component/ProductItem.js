import React, { Component } from 'react';
import * as actions from './../actions/actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import SanPham from './SanPham';

class ProductItem extends Component {


    ondel=(id)=>{
        this.props.ondeleteproduct(id);
    }
    
   
    render() {
        var {product,index} = this.props;
        // console.log(product);
        return(
            

        
            <tr>
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.link}</td>
                <td>
                <span className="ion-ios-star"></span>
				    						<span className="ion-ios-star"></span>
				    						<span className="ion-ios-star"></span>
				    						<span className="ion-ios-star"></span>
                </td>
                <td>
                   {product.description}
                </td>
                
             
               
               
                <td className="text-center" >
                    {product.status===true?"Đang kinh doanh":"Ngừng kinh doanh"}
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning">
                       
                       
                        
                            <li type="button"  className="nav-item btn btn-warning" > <Link to={`./ActionProducts/${product.id}/edit`} className="nav-link"><span>Sửa</span></Link></li>
                        
                    </button>
                    &nbsp;
                    <button onClick={()=>{this.ondel(product.id)}}
                        type="button" className="btn btn-danger" 
                        >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        
        );
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        ondeleteproduct:(id)=>{
            dispatch(actions.act_DELETE_ITEM_REQUEST(id))
        },
       
    }
        
    
}
export default connect(null,mapDispatchToProps)  (ProductItem);

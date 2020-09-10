import React , {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions/actions'
import {callAPI} from './../call/callAPI'
class Sanphamds extends Component{
    constructor(props){
        super(props);
      }
    buy=(sanpham)=>{
        console.log(sanpham);

        
       this.props.additemtocard(sanpham);
    }
    showRate(number){
        var a = [];
        for(var i=0; i<number;i++){
            a.push(  <i key ={i} className="ion-ios-star"> </i>);

        }
        for(var i=0; i<100-number;i++){
            a.push( <i className="ion-ios-star-outline"></i> );

        }
        return a;
        
    }
    render(){
        var {sanpham} = this.props;
        return(
            <div className="col-md-6 col-lg-4  ">
            <div className="project">
                <div className="img">
                    <div className="vr"><span>Sale</span></div>
                    <Link to={`/ChiTietSanPham/${sanpham.id}`}><img src={sanpham.link} className="img-fluid" alt="Colorlib Template"/></Link>
                </div>
                <div className="text">
                    <h4 className="price">{sanpham.price}</h4>
                    <span>{sanpham.type}-{sanpham.color}</span>
                    <h3><Link to={`/ChiTietSanPham/${sanpham.id}`}>{sanpham.name}</Link></h3>
                    <div className="star d-flex clearfix">
                        <div className="mr-auto float-left">
                            <li style={{listStyleType: 'none'}}>
                            {this.showRate(sanpham.rate)}
                            </li>
                        
                        </div>
                        <div className="float-right">
                        <button to='./Cart' className="ion-ios-cart" style={{fontSize:'20px'}} onClick={()=>{this.buy(sanpham)}}></button>
                        </div>
                    </div>
                </div>
                <a href="images/destination-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand"></span>
                </a>
            </div>
        </div>
        );
    }
}


export default (Sanphamds)
import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
class Menu extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
             <div className="container">
            <Link className="navbar-brand" to='/'>BanTayTrang</Link>
            <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item"><Link to='./'className="nav-link"><span>Trang Chủ</span></Link></li>
                <li className="nav-item"><Link to='./Products' className="nav-link"><span>Sản phẩm</span></Link></li>
                <li className="nav-item"><Link to='./Contact' className="nav-link"><span>Liên hệ</span></Link></li>
                <li className="nav-item"><Link to='./Cart' className="nav-link"><span>Giỏ hàng</span></Link></li>
                <li className="nav-item"><Link to='./Quanlisanpham' className="nav-link"><span>Quản lí sản phẩm</span></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        );
    }
}
export default Menu;
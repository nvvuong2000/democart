import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/actions'
import TaskSearch from './TaskSearch'
import TaskSort from './TaskSort'
import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:'',
        }
    }
    onHandleChange = (event) => {
        this.setState({
            keyword : event.target.value
        });
        // console.log(this.state.keyword);
    }
    onHandleClick=()=>{
        // console.log(this.state.keyword);
        this.props.onSearch(this.state.keyword);
    }
    render() {
        var {keyword} = this.state;
        // console.log;
      
        return (
            <div className="col-lg-3 p-4 bg-light">
                <div className="search-wrap-1  ">
                    <h2 className="mb-3">BỘ LỌC</h2>
                    <form action="#" className="search-property-1">
                        <div className="row">
                            <div className="col-lg-12 align-items-end mb-3">
                        <div className="form-group">
                            <label htmlFor="#">Tìm Kiếm</label>
                          <div className="form-field">
                              <div className="icon"><span className="ion-ios-search"></span></div>
                        <input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa để tìm kiếm" onChange={this.onHandleChange} value={this.state.keyword}/>
                      </div>
                  </div>
                    </div>
                            {/* <TaskSearch /> */}
                            <TaskSort />
                            <div className="col-lg-12 align-self-end">
                                <div className="form-group">
                                    <div className="form-field">
                                         <Link  to={`./Products?search=${keyword}`}> <li type="button" className="form-control btn btn-primary" onClick={this.onHandleClick} value="Submit" ></li></Link> 
                                        {/* <button  className="ion-ios-cart" style={{fontSize:'20px'}} onClick={()=>{this.buy(sanpham)}}></button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        onSearch :(keyword)=>{
            dispatch(actions.actSearchRequest(keyword));
        }
    }
}
export default connect(null,mapDispatchToProps)  (Nav);
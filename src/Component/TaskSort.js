import React, { Component } from 'react'
import { actSortRequest } from '../actions/actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class TaskSort extends Component {
    onSort = (by, value) => {
        this.props.onSort({
            by: by,
            value: value
        });
    }
    render() {
        var { by, value } = this.props;

        return (


            <div className="col-lg-12 align-items-end mb-3">
                <div className="form-group">
                    <label htmlFor="#">Sắp Xếp</label>
                    <div className="form-field">
                        <div className="select-wrap">
                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                            <ul name="" id="" className="form-control">
                                <Link to={`Products?sortBy=name&order=asc`}><li onClick={() => { this.onSort('name', 'asc') }}> Tên:A-Z </li>  </Link>

                                <Link to={`Products?sortBy=name&order=desc`} > <li onClick={() => { this.onSort('name', 'desc') }}>Tên:Z-A</li></Link>
                                <Link to={`Products?sortBy=price&order=asc`} ><li onClick={() => { this.onSort('price', 'asc') }}>Giá: Thấp - Cao</li></Link>
                                <Link to={`Products?sortBy=price&order=desc`} > <li onClick={() => { this.onSort('price', 'desc') }}>Giá: Cao-Thấp</li> </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
// const mapStateToProps = state => {
//     return {
//         by : state.sort.by,
//         value : state.sort.value,
//     };
// };


const mapDispatchToProps = (dispatch, props) => {
    return {

        onSort: (sort) => { // sort.by sort.value
            dispatch(actSortRequest(sort));
        }
    };
};
export default connect(null, mapDispatchToProps)(TaskSort);
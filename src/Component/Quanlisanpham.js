import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { act_GET_FULL_PRODUCTS_REQUEST } from '../actions/actions'

// import React, {Component } from 'react'
class Quanlisanpham extends Component {
    showProducts = (products) => {

        var result = null;
        if (products.length > 0) {
            result = Array.from(products).map((product, index) => {
                return <ProductItem key={index} product={product} index={index} />
            });
        }

        return result;
    }
    componentDidMount() {
        this.props.fetch_all_products()
    }

    render() {
        var { products } = this.props

        return (
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div className="row mt-15">
                    <button
                        type="button"
                        className="btn btn-warning">
                        <li type="button" className="nav-item btn btn-warning" > <Link to={`./ActionProducts/Add`} className="nav-link"><span>Thêm sản phẩm</span></Link></li>
                    </button>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Giá</th>
                                    <th className="text-center">Số lượng</th>
                                    <th className="text-center">Link</th>
                                    <th className="text-center">Đánh giá</th>
                                    <th className="text-center">Mô tả</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showProducts(products)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetch_all_products: () => {
            dispatch(act_GET_FULL_PRODUCTS_REQUEST())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quanlisanpham);
import React, {Component} from 'react'
import { connect } from 'react-redux';
import callAPI from './../call/callAPI'

import { actEditProductRequest, actAddProductRequest, actUpdateProductRequest } from '../actions/actions';


class ActionProducts extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      
    name: "",
    price: "",
    status: true,
    link: "",
    description: "",
    quantity: 0,
    rate: 0,
    type: "",
    color: ""

    }
  }
  componentDidMount(){
    var { match} = this.props;
    // console.log(match);
    if(match){
      this.props.onEditItem(match.params.id)
    }
   

    
  
  }
  componentWillReceiveProps(nextprops){
    console.log(nextprops);
    if(nextprops && nextprops.itemEdit){
      var product = nextprops.itemEdit;
      // console.log(nextprops);
      this.setState({
        id:product.id,
        
      name: product.name,
      price: product.price,
      status: product.status,
      link: product.link,
      description: product.description,
      quantity: product.quantity,
      rate: product.rate,
      type: product.type,
      color: product.color,
  
      });
    }
    // if(nextprops && nextprops.itemEdit){
    //   var data = nextprops.itemEdit;
    //   this.setState({
    //     id: data.id,
    //           name:data.name,
    //           price:data.price,
    //           status:data.status,
    //           description: data.description,
    //           link: data.link,
    //   })
    // }
  

    
  }
  // }
  handleChange =(e)=>{
    var target = e.target;
      var name = target.name;
     var value = (target.type =='checkbox')?target.checked: target.value;
      this.setState({
        [name]:value,
      });
   
  
}
onSave=(e)=>{
  e.preventDefault();
  var {history} = this.props;
  console.log(this.state);
 var {id,name,link, price,status,description,}= this.state;
 if(id){
    callAPI(`products/${id}`,'PUT',{
      name:name,
      price:price,
      status:status,
      description:description,
      link:link
    }).then(res=>{
      console.log(res.data);
      history.goBack();
    })
 }else{
 var newProduct={
   id:id,
  name:name,
  price:price,
  status:status,
  description:description,
  link:link
 };
this.props.onAddProduct(newProduct);
//  console.log(this.state);
  
  history.goBack();
}

  // history.goBack();
  // console.log(this.props.onAddProduct(Addnew));

  
}
    render(){
      var {product} = this.props;
      // console.log(product);
        return(
    
  
 
  <div>


          
          <div className="comment-form-wrap pt-5">
            <h3 className="mb-5">THÊM SẢN PHẨM</h3>
            <form action="#" className="p-5 bg-light" onSubmit={this.onSave}>
              <div className="form-group">
                <label for="name">Tên *</label>
                <input type="text" className="form-control" name="name" value={this.state.name}  onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label for="email">Giá *</label>
                <input type="number" className="form-control" name="price" value={this.state.price} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label for="website">Số lượng:</label>
                <input type="number" className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label for="website">Link</label>
                <input type="text" className="form-control" name="link" value={this.state.link} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label for="website">Đánh giá</label>
                <input type="number" className="form-control" name="rate" value={this.state.rate} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label for="website">Type</label>
                <input type="text" className="form-control" name="type" value={this.state.type} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label for="website">Color</label>
                <input type="text" className="form-control" name="color" value={this.state.color} onChange={this.handleChange}/>
              </div>

              <div className="form-group">
                <label for="message">Mô tả:</label>
                <textarea name="" id="message" cols="30" rows="10" className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
              </div>
              <div className="form-group">
                <label for="website">Trạng thái:</label>
                <input type="checkbox"  checked={this.state.status} name="status" onChange={this.handleChange}/> Đang kinh doanh 
              </div>

              <div className="form-group">
                <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary"/>
              </div>

            </form>
          </div>
        
        

<footer className="ftco-footer ftco-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">About <span><a href="index.html">Ecoland</a></span></h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
            <li className="   "><a href="#"><span className="icon-twitter"></span></a></li>
            <li className="   "><a href="#"><span className="icon-facebook"></span></a></li>
            <li className="   "><a href="#"><span className="icon-instagram"></span></a></li>
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

        <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
 Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. </p>
      </div>
    </div>
  </div>
</footer>

</div>
        );
    }
}
const mapStateToProps=(state)=>{
  return{
    itemEdit:state.itemdetails,
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return{
    onAddProduct:(product)=>{
      dispatch(actAddProductRequest(product));
    },
    onEditItem:(id)=>{
      dispatch(actEditProductRequest(id));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ActionProducts);